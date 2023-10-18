import React, { useContext, Fragment, useState } from "react";
import myContext from "../context/myContext";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

const UpdatePackage = () => {
  const context = useContext(myContext);
  const { packages, setPackages, updatePackage } = context;
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
      <motion.div whileTap={{ scale: 0.75 }} className=" inset-0">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-[#0037f0] bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Update Package
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
                    Update Package
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
                          setPackages({ ...packages, title: e.target.value })
                        }
                        value={packages.title}
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                      />
                      <label className="mb-[-1.5rem]" htmlFor="price">
                        New Price
                      </label>
                      <input
                        name="price"
                        type="text"
                        onChange={(e) =>
                          setPackages({ ...packages, price: e.target.value })
                        }
                        value={packages.price}
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                      />
                      <label className="mb-[-1.5rem]" htmlFor="imageUrl">
                        New Image
                      </label>
                      <input
                        name="imageUrl"
                        type="text"
                        onChange={(e) =>
                          setPackages({ ...packages, imageUrl: e.target.value })
                        }
                        value={packages.imageUrl}
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                      />
                      <label className="mb-[-1.5rem]" htmlFor="category">
                        New Category
                      </label>
                      <input
                        name="category"
                        type="text"
                        onChange={(e) =>
                          setPackages({ ...packages, category: e.target.value })
                        }
                        value={packages.category}
                        className="bg-gray-300 rounded-md px-6 py-2 ring-gray-400 hover:ring-gray-600 ring-2"
                      />
                      <label className="mb-[-1.5rem]" htmlFor="address">
                        New Description
                      </label>
                      <textarea
                        onChange={(e) =>
                          setPackages({
                            ...packages,
                            description: e.target.value,
                          })
                        }
                        value={packages.description}
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
                      onClick={updatePackage}
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

export default UpdatePackage;
