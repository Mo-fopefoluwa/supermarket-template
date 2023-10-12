import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/registration/Signup";
import MyState from "./context/MyState";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/registration/Login";
import Nopage from "./pages/Nopage";
import Category from "./pages/Category";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Packages from "./pages/Packages";

function App() {
  return (
    <div className="App">
      <MyState>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category" element={<Category />} />
            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
          <ToastContainer />
        </AnimatePresence>
      </MyState>
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
    return <Navigate to={"login"} />;
  }
};

//admin

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "fopefaokunla@gmail.com") {
    return children;
  } else {
    return <Navigate to={"login"} />;
  }
};
