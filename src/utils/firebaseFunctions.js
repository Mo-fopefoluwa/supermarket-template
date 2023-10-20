//saving new item

import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { fireDB } from "../Firebase/Firebase";

export const saveItem = async (data) => {
  await setDoc(doc(fireDB, "products", `${Date.now()}`), data, { merge: true });
};

//getting product items

export const getAllProduct = async () => {
  const items = await getDocs(
    query(collection(fireDB, "products"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};
