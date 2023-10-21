export const actionType = {
  SET_USER: "SET_USER",
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CARTITEMS: "SET_CARTITEMS",
  SET_CART: "SET_CART",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };
    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };
    case actionType.SET_CART:
      return {
        ...state,
        cart: action.cart,
      };
    default:
      return state;
  }
};

export default reducer;
