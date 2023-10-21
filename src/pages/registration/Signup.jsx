import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import myContext from "../../context/myContext";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../Firebase/Firebase";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    //setLoading(true);
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
      //setLoading(false);
    } catch (error) {
      toast.error("sign up failed" + error);
      //setLoading(false);
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

  const provider = new GoogleAuthProvider();

  const googleLogin = async () => {
    const auth = getAuth();
    const response = await signInWithPopup(auth, provider);
    console.log(response);
  };

  return (
    <div className="bg-[#e8ecf2] h-[110vh]">
      <div className="px-4 md:px-8 py-16">
        <h1 className="text-[1.6rem] text-[#1e1700] md:text-[2.5rem] px-4 md:px-12 lg:px-20 pb-8 font-bold">
          Welcome to Our
          <br /> Online Supermarket
        </h1>
        <div className="flex justify-center items-center">
          <div className="py-6 bg-[#e8ecf2] w-full md:w-[50%] lg:w-[40%] rounded-xl">
            <form className="py-12 flex flex-col px-6" action="">
              <span className="flex flex-col">
                <label
                  className="text-[#464545] font-semibold pb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="w-full border-2 focus:ring-[#2b88f3] border-[#57585b]  ring-[#2050f2] relative ring-2  rounded-md focus:outline-none px-4 py-3"
                  id="name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </span>
              <span className="flex flex-col">
                <label
                  className="text-[#464545] font-semibold pb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full border-2 focus:ring-[#2b88f3] border-[#57585b]  ring-[#2050f2] relative ring-2  rounded-md focus:outline-none px-4 py-3"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
              <span className="flex flex-col pt-12">
                <label
                  className="text-[#464545] font-semibold pb-2"
                  htmlFor="password"
                >
                  Password
                </label>

                <span className="relative">
                  <input
                    className="w-full border-2 focus:ring-[#2b88f3] border-[#57585b]  ring-[#2050f2] relative ring-2  rounded-md focus:outline-none px-4 py-3"
                    id="password"
                    type={passwordType}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="absolute right-4 top-4"
                    onClick={togglePassword}
                  >
                    {passwordType === "password" ? (
                      <AiOutlineEyeInvisible size={20} />
                    ) : (
                      <AiOutlineEye size={20} />
                    )}
                  </button>
                </span>
              </span>
            </form>
            <span className="flex flex-row justify-between items-center px-6">
              <p className="font-bold text-[#1e1700] text-[1.4rem]">Sign Up</p>
              <button
                onClick={signup}
                type="submit"
                className="bg-[#2050f2] hover:ring-[#2b88f3] h-[35px] w-[60px] flex text-white drop-shadow-md justify-center items-center rounded-md"
              >
                <HiArrowRight size={20} />
              </button>
            </span>
            <div
              onClick={googleLogin}
              className=" flex justify-center items-center "
            >
              <p className="bg-white inset-22 rounded-md text-lg font-medium drop-shadow-md px-4 py-2">
                signup with Google
              </p>
            </div>
            <p className="text-center text-[#1e1700] pt-6 font-semibold">
              Have an account?{" "}
              <Link className="text-[#6082f6]" to={"/login"}>
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
