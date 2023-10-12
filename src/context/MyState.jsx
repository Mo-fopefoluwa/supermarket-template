import React, { useState } from "react";
import MyContext from "./myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
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

  return (
    <MyContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        signup,
        login,
        togglePassword,
        email,
        setEmail,
        password,
        setPassword,
        passwordType,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
