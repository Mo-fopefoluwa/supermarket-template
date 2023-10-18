import React, { useContext, Fragment, useState } from "react";
import myContext from "../context/myContext";
import { Dialog, Transition } from "@headlessui/react";
import Loader from "./Loader";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

const AddProducts = () => {
  const context = useContext(myContext);
  const {
    products,
    setProducts,
    categories,
    addProduct,
    uploadImage,
    deleteImage,
    mode,
  } = context;
  const { loading } = context;
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className=" inset-0">
        <button
          type="button"
          onClick={openModal}
          style={{ backgroundColor: mode === "dark" ? "#4069f4" : "" }}
          className="rounded-md bg-[#0037f0] bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add Product
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-black"
                  >
                    Add Products
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="flex flex-col gap-6 ">
                      <label className="mb-[-1.5rem]" htmlFor="title">
                        Product Title
                      </label>
                      <input
                        name="title"
                        type="text"
                        onChange={(e) =>
                          setProducts({ ...products, title: e.target.value })
                        }
                        value={products.title}
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                      />
                      <label className="mb-[-1.5rem]" htmlFor="price">
                        Price
                      </label>
                      <input
                        name="price"
                        type="text"
                        onChange={(e) =>
                          setProducts({ ...products, price: e.target.value })
                        }
                        value={products.price}
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                      />
                      <label className="mb-[-1.5rem]" htmlFor="imageUrl">
                        Image
                      </label>
                      <input
                        name="imageUrl"
                        type="text"
                        onChange={(e) =>
                          setProducts({ ...products, imageUrl: e.target.value })
                        }
                        value={products.imageUrl}
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                      />

                      <select
                        name="category"
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                        onChange={(e) =>
                          setProducts({
                            ...products,
                            category: e.target.value,
                          })
                        }
                      >
                        <option value="other" className="bg-gray-300">
                          Select Category
                        </option>
                        {categories &&
                          categories.map((item) => {
                            return (
                              <option
                                className="capitalize bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                                key={item.id}
                                value={item.name}
                              >
                                {" "}
                                {item.name}
                              </option>
                            );
                          })}
                      </select>
                      <label className="mb-[-1.5rem]" htmlFor="category">
                        Weight
                      </label>
                      <input
                        name="weight"
                        type="text"
                        onChange={(e) =>
                          setProducts({ ...products, weight: e.target.value })
                        }
                        value={products.weight}
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                      />
                      <label className="mb-[-1.5rem]" htmlFor="address">
                        Description
                      </label>
                      <textarea
                        onChange={(e) =>
                          setProducts({
                            ...products,
                            description: e.target.value,
                          })
                        }
                        value={products.description}
                        cols="10"
                        rows="5"
                        name="decription"
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                      ></textarea>
                    </form>
                  </div>

                  <div className="mt-[4rem]">
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      type="button"
                      style={{
                        backgroundColor: mode === "dark" ? "#4069f4" : "",
                      }}
                      className="inline-flex w-[100%] justify-center rounded-md border border-transparent bg-[#0037f0] px-4 py-[.6rem] text-sm font-medium text-white hover:bg-[#0037f0]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#31e252] focus-visible:ring-offset-2"
                      onClick={addProduct}
                    >
                      Got it!
                    </motion.button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AddProducts;
