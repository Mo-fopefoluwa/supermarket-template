import React, { useState } from "react";

import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("");

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
    //setLoading(true);
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
      //setLoading(false);
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
      //setLoading(false);
    }
  };

  const provider = new GoogleAuthProvider();

  const googleLogin = async () => {
    const auth = getAuth();
    const response = await signInWithPopup(auth, provider);
    console.log(response);
  };

  return (
    <div className="bg-[#e8ecf2] h-[120vh]">
      <div className="px-4 md:px-8 py-16">
        <h1 className="text-[1.6rem] text-[#1e1700] md:text-[2.5rem] px-4 pb-8 font-bold">
          Welcome back to Our
          <br /> Online Supermarket
        </h1>
        <div className="flex justify-center items-center">
          <div className="py-6 w-full md:w-[50%] lg:w-[40%] bg-[#e8ecf2] rounded-xl">
            <form className="py-12 flex flex-col px-6" action="">
              <span className="flex flex-col">
                <label
                  className="text-[#464545] font-semibold pb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full border-2 focus:ring-[#2b88f3] border-[#57585b]  ring-[#2050f2] ring-2  rounded-md focus:outline-none px-4 py-3"
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
                    className="w-full border-2  focus:ring-[#2b88f3] border-[#57585b]  ring-[#2050f2] relative ring-2  rounded-md focus:outline-none px-4 py-3"
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
              <span className="pt-4 flex  justify-end items-center">
                <Link
                  className="font-semibold text-[.8rem] md:text-[1rem]"
                  to={"/forgotpassword"}
                >
                  Forgot Password?
                </Link>
              </span>
            </form>
            <span className="flex flex-row justify-between items-center px-6">
              <p className="font-bold text-[1.4rem] text-[#1e1700]">Log in</p>
              <button
                onClick={login}
                type="submit"
                className="bg-[#2050f2] text-white h-[35px] w-[60px] flex justify-center items-center rounded-md"
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
            <p className="text-center pt-6 font-semibold">
              Don't have an account?{" "}
              <Link className="text-[#6082f6]" to={"/signup"}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
