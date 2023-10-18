import React, { useContext } from "react";
import { FaUserTie } from "react-icons/fa";
import myContext from "../context/myContext";
import Layout from "../components/Layout";
import DashboardTab from "./DashboardTab";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";

function Dashboard() {
  const context = useContext(myContext);
  const { mode, product, user, order } = context;

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap justify-center items-center -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2 hover:shadow-[#0037f0] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-[#e8ecf2] border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "#cbcfd4" : "",
                  color: mode === "dark" ? "#e8ecf2" : "",
                }}
              >
                <div
                  style={{ color: mode === "dark" ? "#4069f4" : "" }}
                  className="text-[#0037f0] w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <AiFillShopping size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "#3a3b3c" : "" }}
                >
                  {order.length}
                </h2>
                <p
                  className=" text-[#0037f0] font-bold"
                  style={{ color: mode === "dark" ? "#4069f4" : "" }}
                >
                  Total Orders
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2 hover:shadow-[#0037f0] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-[#e8ecf2] border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "#cbcfd4" : "",
                  color: mode === "dark" ? "#e8ecf2" : "",
                }}
              >
                <div
                  style={{ color: mode === "dark" ? "#4069f4" : "" }}
                  className="text-[#0037f0] w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "#3a3b3c" : "" }}
                >
                  {user.length}
                </h2>
                <p
                  className=" text-[#0037f0]  font-bold"
                  style={{ color: mode === "dark" ? "#4069f4" : "" }}
                >
                  Total Users
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2 hover:shadow-[#0037f0] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-[#e8ecf2] border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "#cbcfd4" : "",
                  color: mode === "dark" ? "#e8ecf2" : "",
                }}
              >
                <div
                  style={{ color: mode === "dark" ? "#4069f4" : "" }}
                  className="text-[#0037f0] w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <MdOutlineProductionQuantityLimits size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-[#0f193b] fonts1"
                  style={{ color: mode === "dark" ? "#3a3b3c" : "" }}
                >
                  {product.length}
                </h2>
                <p
                  className=" text-[#0037f0]  font-bold"
                  style={{ color: mode === "dark" ? "#4069f4" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;
