import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear("user");
        toast.success("signed out successfully");
        navigate("/login");
      })
      .catch((error) => toast.error("sign out failed"));
  };

  return (
    <div>
      {" "}
      {authUser ? (
        <div className="">
          {/* <p>{`Signed In as ${authUser.email}`}</p>{" "} */}
          <button onClick={userSignOut}>Logout</button>
        </div>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </div>
  );
};

export default AuthDetails;
