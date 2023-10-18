import React, { useContext, Fragment, useState } from "react";
import myContext from "../context/myContext";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

const UpdateProducts = () => {
  const context = useContext(myContext);
  const { products, setProducts, updateProduct, edithandleProduct } = context;
  const { loading } = context;
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    // editHandle();
    setIsOpen(true);
  }

  return (
    <div>
      <motion.div whileTap={{ scale: 0.75 }} className=" inset-0">
        <button
          type="button"
          onClick={edithandleProduct}
          className="rounded-md bg-[#0037f0] bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
      </motion.div>

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
                    className="text-lg font-medium leading-6 "
                  >
                    Update Product
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      action=""
                      className="flex flex-col gap-6 "
                      method="get"
                    >
                      <label className="mb-[-1.5rem]" htmlFor="title">
                        New Title
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
                        New Price
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
                        New Image
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
                      <label className="mb-[-1.5rem]" htmlFor="category">
                        New Category
                      </label>
                      <input
                        name="category"
                        type="text"
                        onChange={(e) =>
                          setProducts({ ...products, category: e.target.value })
                        }
                        value={products.category}
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                      />
                      <label className="mb-[-1.5rem]" htmlFor="address">
                        New Description
                      </label>
                      <textarea
                        onChange={(e) =>
                          setProducts({
                            ...products,
                            description: e.target.value,
                          })
                        }
                        value={products.description}
                        cols="30"
                        rows="10"
                        name="decription"
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                      ></textarea>
                    </form>
                  </div>

                  <div className="mt-[4rem]">
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      type="button"
                      className="inline-flex w-[100%] justify-center rounded-md border border-transparent bg-[#0037f0] px-4 py-[.6rem] text-sm font-medium text-white hover:bg-[#0037f0]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#31e252] focus-visible:ring-offset-2"
                      onClick={updateProduct}
                    >
                      Update!
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

export default UpdateProducts;
