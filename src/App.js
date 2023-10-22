import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/registration/Signup";

import { AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/registration/Login";
import Nopage from "./pages/Nopage";

import Cart from "./pages/Cart";

import ProductInfo from "./pages/ProductInfo";
import NewItem from "./pages/NewItem";
import { useStateValue } from "./context/StateProvider";
import { getAllProduct } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./context/reducer";
import ProductContainer from "./components/ProductContainer";
import Dashboard from "./components/Dashboard";
//import { useDispatch } from "react-redux";

function App() {
  // const dispatch = useDispatch();

  const [{ products }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllProduct().then((data) => {
      dispatch({
        type: actionType.SET_PRODUCTS,
        products: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<NewItem />} />
          <Route path="/ourproducts" element={<ProductContainer />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/cart" element={<Cart />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/*" element={<Nopage />} />
        </Routes>
        <ToastContainer />
      </AnimatePresence>
    </div>
  );
}

export default App;

//user
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    setTimeout(() => {
      toast("Please login to view");
    }, 1000);
    return <Navigate to={"/login"} />;
  }
};

//admin

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "fopefaokunla@gmail.com") {
    return children;
  } else {
    setTimeout(() => {
      toast("Please login to view");
    }, 1000);
    return <Navigate to={"/login"} />;
  }
};
