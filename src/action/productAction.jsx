// import { useContext, useState } from "react";
// import {
//   PRODUCT_LIST_FAIL,
//   PRODUCT_LIST_REQUEST,
//   PRODUCT_LIST_SUCCESS,
//   PRODUCT_ITEM_ADD_REQUEST,
//   PRODUCT_ITEM_ADD_SUCCESS,
//   PRODUCT_ITEM_ADD_FAIL,
//   PRODUCT_ITEM_REMOVE_REQUEST,
//   PRODUCT_ITEM_REMOVE_SUCCESS,
//   PRODUCT_ITEM_REMOVE_FAIL,
//   PRODUCT_ITEM_UPDATE_SUCCESS,
//   PRODUCT_ITEM_UPDATE_REQUEST,
//   PRODUCT_ITEM_UPDATE_FAIL,
// } from "../constants/productConstants";
// import myContext from "../context/myContext";
// import nextId from "react-id-generator";
// import { toast } from "react-toastify";

// export const ListProducts = async (dispatch) => {
//   const context = useContext(myContext);
//   const { product } = context;
//   const productData = [];

//   try {
//     dispatch({
//       type: PRODUCT_LIST_REQUEST,
//     });
//     product.forEach((products) => {
//       productData.push(products);
//     });
//     dispatch({ type: PRODUCT_LIST_SUCCESS, payload: productData });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_LIST_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
// const [products, setProducts] = useState({
//   title: null,
//   price: null,
//   imageUrl: null,
//   category: null,
//   description: null,
//   time: Timestamp.now(),
//   date: new Date().toLocaleString("en-Us", {
//     month: "short",
//     day: "2-digit",
//     year: "numeric",
//   }),
// });

// export const addProduct = (new_product_item) => async (dispatch) => {
//   const newProducts = {};
//   //const newItemId = nextId();

//   try {
//     dispatch({
//       PRODUCT_ITEM_ADD_REQUEST,
//     });

//     const productItemRef = doc(fireDB, "products", products);
//     const docSnap = await getDoc(productItemRef);

//     if (docSnap.exists()) {
//       const existItem = docSnap.data();
//       toast.alert(existItem.title + " is already in your products list");
//       dispatch({
//         type: PRODUCT_ITEM_ADD_FAIL,
//       });
//     } else {
//       console.log("No such document");
//       await setDoc(doc(fireDB, "products", products));
//       toast.success(
//         "Item" + new_product_item.title + "has been successfully added"
//       );
//       newProducts = new_product_item;
//       dispatch({
//         type: PRODUCT_ITEM_ADD_SUCCESS,
//         payload: newProducts,
//       });
//     }
//   } catch (error) {
//     toast.error("Failed to add" + new_product_item.title + error);
//     dispatch({
//       type: PRODUCT_ITEM_ADD_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const updateCartQty = (cart_item_id, qty) => async (dispatch) => {

// };

// export const deleteItem = (product_item_id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: PRODUCT_ITEM_REMOVE_REQUEST,
//     });
//     await deleteDoc(fireDB, "products", products);

//     toast.success(product_item_id + "was succesfully deleted");
//     window.location.reload();

//     dispatch({
//       type: PRODUCT_ITEM_REMOVE_SUCCESS,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_ITEM_REMOVE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
