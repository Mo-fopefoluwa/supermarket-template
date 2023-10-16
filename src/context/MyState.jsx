import React, { useState, useEffect } from "react";
import MyContext from "./myContext";
import {
  QuerySnapshot,
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { fireDB, storage } from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { create } from "../reduxx/productSlice";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const MyState = (props) => {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (name === "") {
      toast.error("Name is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (password === "") {
      toast.error("Password is required");
    }
    try {
      const auth = getAuth();
      const users = await createUserWithEmailAndPassword(auth, email, password);
      //console.log(users);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      setName("");
      setEmail("");
      setPassword("");
      toast.success("You're now a proud member of GMarket");
      window.location.href = "/login";
      setLoading(false);
    } catch (error) {
      toast.error("sign up failed" + error);
      setLoading(false);
    }
  };

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const auth = getAuth();
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("sign in successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // navigate("/");
      window.location.href = "/";
      setLoading(false);
    } catch (error) {
      toast.error("sign in failed" + error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
  };

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const googleLogin = async () => {
    const response = await signInWithPopup(auth, provider);
    console.log(response);
  };

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    weight: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-Us", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const [packages, setPackages] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-Us", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  let [isOpen, setIsOpen] = useState(false);

  const addProduct = async () => {
    if (products.title == null) {
      return toast.error("Please fill the title field");
    } else if (products.price == null) {
      return toast.error("Please add a price");
    } else if (products.description == null) {
      return toast.error("Please add a desciption for the product");
    }

    try {
      setLoading(true);
      const productItemRef = collection(fireDB, "products");
      await addDoc(productItemRef, products);
      toast.success("Product Added Successfully");
      console.log(products);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 8000);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts("");
  };

  const [msg, setMsg] = useState("");

  const uploadImage = (e) => {
    setLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setMsg("Error while uploading: Please try again ");
        // setAlertStatus('danger')
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProducts.imageUrl(downloadURL);
          setLoading(false);
          console.log(setProducts.imageUrl);
          // setFields(true)
          setMsg("Image uploaded successfully");
          // setAlertStatus(success)
          //   setTimeout(() => {
          //     setFields(false)
          //   }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setLoading(true);
    const storageRef = ref(storage);
    const deleteRef = (storageRef, products.imageUrl);
    deleteObject(deleteRef).then(() => {
      setProducts.imageUrl(null);
      setLoading(false);
      setMsg("Image deleted successfully");
      // setAlertStatus('success')
      // setTimeout(() => {
      //   setFields(false)
      // }, 4000);
    });
  };

  // <span className="group flex flex-col justify-center items-center border-4 border-dotted border-gray-300 w-full h-[200px] md:h-[250px] cursor-pointer rounded-lg">
  //   {loading ? (
  //     <Loader />
  //   ) : (
  //     <>
  //       {!products.imageUrl ? (
  //         <>
  //           <label
  //             htmlFor="imageUrl"
  //             className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
  //           >
  //             <div className="w-full h-full flex flex-col items-center pt-8 gap-2">
  //               <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
  //               <p className="text-gray-500 hover:textgray-700">
  //                 Click here to upload
  //               </p>
  //             </div>
  //             <input
  //               name="imageUrl"
  //               type="file"
  //               accept="images/*"
  //               onChange={
  //                 (e) =>
  //                   setProducts({
  //                     ...products,
  //                     imageUrl: e.target.value,
  //                   })
  //                 // uploadImage
  //               }
  //               value={products.imageUrl}
  //               className=" px-6 py-2 w-full h-full"
  //             />
  //           </label>
  //         </>
  //       ) : (
  //         <>
  //           <div className="relative h-full">
  //             <img
  //               src={products.imageUrl}
  //               alt="uploaded image"
  //             />
  //             {/* <button
  //               type="button"
  //               className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all  ease-in-out"
  //               onClick={deleteImage}
  //             >
  //               {" "}
  //               <MdDelete />{" "}
  //             </button> */}
  //           </div>
  //         </>
  //       )}
  //     </>
  //   )}
  // </span>

  const addPackages = async () => {
    if (packages.title === "") {
      return toast.error("Please fill the title field");
    } else if (packages.price === "") {
      return toast.error("Please add a price");
    } else if (packages.imageUrl === "") {
      return toast.error("Please add an image");
    } else if (packages.category === "") {
      return toast.error("Please add a category");
    } else if (packages.description === "") {
      return toast.error("Please add a desciption for the package bundle");
    }
    try {
      setLoading(true);
      const packageRef = collection(fireDB, "packages");
      await addDoc(packageRef, packages);
      toast.success("Package Added Successfully");
      //console.log(packages);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 8000);
      getPackageData();
      setLoading(false);
      // setIsOpen(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setPackages("");
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const addProduct = async (e) => {
  //   //debugger;
  //   e.preventDefault();

  //   if (products.title == "") {
  //     return toast.error("Please fill the title field");
  //   } else if (products.price == "") {
  //     return toast.error("Please add a price");
  //   } else if (products.imageUrl == "") {
  //     return toast.error("Please add an image");
  //   } else if (products.category == "") {
  //     return toast.error("Please add a category");
  //   }
  //   // else if (products.weight == "") {
  //   //   return toast.error("Please add the weight of the product");
  //   // }
  //   else if (products.description == "") {
  //     return toast.error("Please add a desciption for the product");
  //   }
  //   try {
  //     dispatch(
  //       create({
  //         title: products.title,
  //         price: products.price,
  //         imageUrl: products.imageUrl,
  //         category: products.category,
  //         // weight: products.weight,
  //         description: products.description,
  //         deletedAt: 0,
  //       })
  //     );
  //     toast.success("Package Added Successfully");
  //     console.log(products);
  //     //getProductData();
  //     //navigate("/dashboard");
  //     //window.location.reload();
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setProducts({
  //     title: "",
  //     price: "",
  //     imageUrl: "",
  //     category: "",
  //     //weight: "",
  //     description: "",
  //     time: Timestamp.now(),
  //     date: new Date().toLocaleString("en-Us", {
  //       month: "short",
  //       day: "2-digit",
  //       year: "numeric",
  //     }),
  //   });
  // };
  const [packagee, setPackage] = useState([]);
  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time")
        //limit(8)
      );

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getPackageData = async () => {
    setLoading(true);
    try {
      const qu = query(
        collection(fireDB, "packages"),
        orderBy("time")
        //limit(8)
      );

      const data = onSnapshot(qu, (QuerySnapshot) => {
        let packageArray = [];
        QuerySnapshot.forEach((doc) => {
          packageArray.push({ ...doc.data(), id: doc.id });
        });
        setPackage(packageArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getPackageData();
  }, []);

  useEffect(() => {
    getProductData();
  }, []);

  const edithandleProduct = (item) => {
    setProducts(item);
    setIsOpen(true);
  };

  const edithandlePackage = (item) => {
    setPackages(item);
    setIsOpen(true);
  };
  // update product
  const updateProduct = async (item) => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully");
      getProductData();
      setLoading(false);
      setIsOpen(false);
      window.location.href = "/dashboard";
      window.location.reload();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setProducts("");
  };

  const updatePackage = async (item) => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "packages", packages.id), packages);
      toast.success("Package Updated successfully");
      getPackageData();
      setLoading(false);
      setIsOpen(false);
      window.location.href = "/dashboard";
      window.location.reload();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setPackages("");
  };

  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted successfully");
      setLoading(false);
      getProductData();
      window.location.reload();
    } catch (error) {
      toast.error("Couldn't complete the process, Please try again");
      setLoading(false);
    }
  };

  const deletePackage = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "packages", item.id));
      toast.success("Package Deleted successfully");
      setLoading(false);
      getPackageData();
      window.location.reload();
    } catch (error) {
      toast.error("Couldn't complete the process, Please try again");
      setLoading(false);
    }
  };

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "orders"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false);
      });
      setOrder(ordersArray);
      // console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "user"));
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false);
      });
      setUser(usersArray);
      console.log(usersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);

  const categories = [
    {
      id: 1,
      name: "Fruits",
      urlParamName: "fruits",
    },
    ,
    {
      id: 2,
      name: "food & oils",
      urlParamName: "food-and-oils",
    },

    {
      id: 3,
      name: "baby care",
      urlParamName: "baby",
    },
    ,
    {
      id: 4,
      name: "beauty",
      urlParamName: "beauty",
    },
    ,
    {
      id: 5,
      name: "meat & fish",
      urlParamName: "meat-and-fish",
    },
    {
      id: 6,
      name: "medicine",
      urlParamName: "medicine",
    },
    ,
    {
      id: 7,
      name: "cutleries",
      urlParamName: "cutleries",
    },
    {
      id: 8,
      name: "milk & dairies",
      urlParamName: "milk",
    },
    ,
    {
      id: 9,
      name: "snacks & branded foods",
      urlParamName: "",
    },
    ,
    {
      id: 10,
      name: "cleaning & household",
      urlParamName: "cleaning",
    },
  ];

  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  return (
    <MyContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        loading,
        signup,
        login,
        togglePassword,
        order,
        user,
        name,
        categories,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        passwordType,
        products,
        packages,
        setProducts,
        setPackage,
        setPackages,
        addPackages,
        addProduct,
        product,
        packagee,
        updateProduct,
        updatePackage,
        edithandleProduct,
        edithandlePackage,
        deleteProduct,
        deletePackage,
        getPackageData,
        getProductData,
        uploadImage,
        deleteImage,
        setMsg,
        msg,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
