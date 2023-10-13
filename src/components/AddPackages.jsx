import React, { useContext, Fragment, useState } from "react";
import myContext from "../context/myContext";
import { Dialog, Transition } from "@headlessui/react";

const AddPackages = () => {
  const context = useContext(myContext);
  const { packages, setPackages, addPackages } = context;
  const { loading } = context;
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    addProduct();
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
          className="rounded-md bg-[#40aa54] bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add Package
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
                    Add Package
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="flex flex-col gap-6 ">
                      <label className="mb-[-1.5rem]" htmlFor="title">
                        Title
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
                        Price
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
                        Image
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
                        Category
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
                        Description
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
                    <button
                      type="button"
                      className="inline-flex w-[100%] justify-center rounded-md border border-transparent bg-[#40aa54] px-4 py-[.6rem] text-sm font-medium text-white hover:bg-[#1f7c30] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#31e252] focus-visible:ring-offset-2"
                      onClick={addPackages}
                    >
                      Got it!
                    </button>
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

export default AddPackages;
