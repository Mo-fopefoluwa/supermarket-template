import { fetchUser } from "../utils/fetchLocalStorageData";
import { fetchCart } from "../utils/firebaseFunctions";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  products: null,
  cartShow: false,
  cartItems: cartInfo,
};
