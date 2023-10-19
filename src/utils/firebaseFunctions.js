//saving new item

import { doc, setDoc } from "firebase/firestore";
import { fireDB } from "../Firebase/Firebase";

export const saveItem = async (data) => {
  await setDoc(doc(fireDB, "products", `${Date.now()}`), data, { merge: true });
};
