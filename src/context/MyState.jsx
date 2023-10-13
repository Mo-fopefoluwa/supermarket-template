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
import { fireDB } from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

const MyState = (props) => {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);
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
    if (email === "") {
      toast.error("Email is required");
    } else if (password === "") {
      toast.error("Password is required");
    }
    try {
      const auth = getAuth();
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);

      const user = {
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      setEmail("");
      setPassword("");
      toast.success("sign up success");
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

  const [products, setProducts] = useState({
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

  const [packages, setPackages] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    weight: null,
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
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);
      toast.success("Product Added Successfully");
      //console.log(products);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 8000);
      getProductData();
      setLoading(false);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts("");
  };

  const addPackages = async () => {
    if (
      packages.title == null ||
      packages.price == null ||
      packages.imageUrl == null ||
      packages.category == null ||
      packages.description == null
    ) {
      return toast.error("Please fill all fields");
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
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setPackages("");
  };

  const [packagee, setPackage] = useState([]);
  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
        limit(8)
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
      const q = query(
        collection(fireDB, "packages"),
        orderBy("time"),
        limit(8)
      );

      const data = onSnapshot(q, (QuerySnapshot) => {
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
  };

  const edithandlePackage = (item) => {
    setPackages(item);
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

  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  return (
    <MyContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        signup,
        login,
        togglePassword,
        user,
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
        addPackages,
        product,
        packagee,
        updateProduct,
        updatePackage,
        edithandleProduct,
        edithandlePackage,
        deleteProduct,
        deletePackage,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
