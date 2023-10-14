import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { fireDB } from "../Firebase/Firebase";
import nextId from "react-id-generator";

export const CART_LIST_REQUEST = "CART_LIST_REQUEST";
export const CART_LIST_SUCCESS = "CART_LIST_SUCCESS";
export const CART_LIST_FAIL = "CART_LIST_FAIL";
export const CART_ITEM_ADD_REQUEST = "CART_ITEM_ADD_REQUEST";
export const CART_ITEM_ADD_SUCCESS = "CART_ITEM_ADD_SUCCESS";
export const CART_ITEM_ADD_FAIL = "CART_ITEM_ADD_FAIL";
export const CART_ITEM_REMOVE_REQUEST = "CART_ITEM_REMOVE_REQUEST";
export const CART_ITEM_REMOVE_SUCCESS = "CART_ITEM_REMOVE_SUCCESS";
export const CART_ITEM_REMOVE_FAIL = "CART_ITEM_REMOVE_FAIL";
export const CART_ITEM_UPDATE_SUCCESS = "CART_ITEM_UPDATE_SUCCESS";
export const CART_ITEM_UPDATE_REQUEST = "CART_ITEM_UPDATE_REQUEST";
export const CART_ITEM_UPDATE_FAIL = "CART_ITEM_UPDATE_FAIL";

export const listCartItems = () => async (dispatch) => {
  let cartData = [];

  async function getCartItems(fireDB) {
    const cartCol = collection(fireDB, "cartItems");
    const cartSnapshot = await getDocs(cartCol);
    const cartList = cartSnapshot.docs.map((doc) => doc.data());
    return cartList;
  }
  try {
    dispatch({ type: CART_LIST_REQUEST });
    cartData = await getCartItems(fireDB);
    dispatch({ type: CART_LIST_SUCCESS, payload: cartData });
  } catch (error) {
    dispatch({
      type: CART_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.rsponse.data.message
          : error.message,
    });
  }
};

export const addProductToCart = (new_cart_item) => async (dispatch) => {
  const newCartProduct = {};
  const newItemId = nextId();

  try {
    dispatch({
      CART_ITEM_ADD_REQUEST,
    });

    const cartItemRef = doc(fireDB, "cartItems", newItemId);
    const docSnap = await getDoc(cartItemRef);

    if (docSnap.exists()) {
      const existItem = docSnap.data();
      alert(existItem.title + " is already in your cart");
      dispatch({
        type: CART_ITEM_ADD_FAIL,
      });
    } else {
      console.log("No such document");
      await setDoc(doc(fireDB, "cartItems", newItemId), {
        id: newItemId,
        title: new_cart_item.title,
        price: new_cart_item.price,
        imageURL: new_cart_item.imageURL,
        category: new_cart_item.category,
        qtyInCart: 1,
      });
      alert("Item" + new_cart_item.title + "has been successfully added");
      newCartProduct = new_cart_item;
      dispatch({
        type: CART_ITEM_ADD_SUCCESS,
        payload: newCartProduct,
      });
    }
  } catch (error) {
    alert("Failed to add" + new_cart_item.title + error);
    dispatch({
      type: CART_ITEM_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateCartQty = (cart_item_id, qty) => async (dispatch) => {
  try {
    dispatch({
      type: CART_ITEM_UPDATE_REQUEST,
    });
    await updateDoc(doc(fireDB, "cartItems", cart_item_id), {
      qtyInCart: qty,
    });
    dispatch({
      type: CART_ITEM_UPDATE_SUCCESS,
      payload: qty,
    });
  } catch (error) {
    dispatch({
      type: CART_ITEM_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteItemFromCart = (cart_item_id) => async (dispatch) => {
  try {
    dispatch({
      type: CART_ITEM_REMOVE_REQUEST,
    });
    await deleteDoc(fireDB, "cartItems", cart_item_id);

    alert(cart_item_id + "was succesfully deleted");
    window.location.reload();

    dispatch({
      type: CART_ITEM_REMOVE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: CART_ITEM_REMOVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
