// import { createSlice } from "@reduxjs/toolkit";
// import { fireDB } from "../Firebase/Firebase";
// import { getFirestore } from "firebase/firestore";
// const firestore = getFirestore();

// //const productDB = firestore.collection("products");
// const initialState = {
//   title: "",
//   price: "",
//   imageUrl: "",
//   category: "",
//   description: "",
//   //    weight: '',
// };

// export const productSlice = createSlice({
//   name: "productsData",
//   initialState,
//   reducers: {
//     create: (state, action) => {
//       productDB.add(action.payload).then((ref) => {
//         console.log("product added", ref);
//       });
//     },
//     editProduct: (state, action) => {
//       productDB.doc(action.payload.id).update(action.payload);
//     },
//     deleteProduct: (state, action) => {
//       productDB.doc(action.payload.id).update({
//         deletedAt: new Date(),
//       });
//     },
//   },
// });

// export const { create, editProduct, deleteProduct } = productSlice.actions;

// export default productSlice.reducer;
