import React, { useState } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import {
  MdAttachFile,
  MdAttachMoney,
  MdBook,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
  MdMoney,
} from "react-icons/md";
import { categories, tags } from "../utils/data";
import Loader from "../components/Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../Firebase/Firebase";
import { getAllProduct, saveItem } from "../utils/firebaseFunctions";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const NewItem = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState("");
  const [fields, setFields] = useState(false);
  const [tag, setTag] = useState("");
  const [msg, setMsg] = useState(null);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [loading, setLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [{ products }, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setLoading(true);
    const imageFile = e.target.files[0];
    console.log(imageFile);
    const storageRef = ref(storage, `images/ ${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading: Please try again ");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setLoading(false);
        }, 5000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 5000);
        });
      }
    );
  };
  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCategory("Select Category");
    setTag("");
    setWeight("");
    setPrice("");
    setDescription("");
  };

  const fetchData = async () => {
    await getAllProduct().then((data) => {
      dispatch({
        type: actionType.SET_PRODUCTS,
        products: data,
      });
    });
  };

  const deleteImage = () => {
    setLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setLoading(false);
      setMsg("Image successfully deleted");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 5000);
    });
  };
  const saveDetails = () => {
    setLoading(true);
    try {
      if (
        !title ||
        !category ||
        !weight ||
        !description ||
        !price ||
        !imageAsset
      ) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setLoading(false);
        }, 5000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          weight: weight,
          tag: tag,
          price: price,
          description: description,
          qty: 1,
        };
        saveItem(data);
        setLoading(false);
        setLoading(false);
        setMsg("Product successfully added");
        clearData();
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading: Try again");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setLoading(false);
      }, 5000);
    }
    fetchData();
  };
  return (
    <Layout>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-[90%] md:w-[75%] border-2 border-gray-300 rounded-lg p-4 flex flex-col gap-4 items-center justify-center">
          {fields && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-full p-2 text-lg font-semibold rounded-lg text-center ${
                alertStatus === "danger"
                  ? "bg-red-400 text-red-800"
                  : "bg-emerald-400 text-emerald-800"
              }`}
            >
              {msg}
            </motion.p>
          )}
          <div className="w-full py-2 border-b-2 border-gray-300 flex items-center gap-2">
            <MdFastfood className="text-xl text-gray-700" />
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a title"
              className="w-full h-full outline-none text-[#22305f] placeholder:text-gray-500 bg-transparent text-lg font-semibold"
            />
          </div>
          <div className="w-full  py-2 border-b-2 border-gray-300 flex items-center gap-2">
            <select
              className="w-full h-full outline-none bg-transparent text-lg font-semibold"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="text-xl text-gray-500 bg-white" value="other">
                Select Category
              </option>
              {categories &&
                categories.map((category) => {
                  return (
                    <option
                      key={category.id}
                      className="bg-white text-base border-0 outline-none capitalize text-[#22305f]"
                      value={category.urlParamName}
                    >
                      {" "}
                      {category.name}{" "}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="w-full  py-2 border-b-2 border-gray-300 flex items-center gap-2">
            <select
              className="w-full h-full outline-none bg-transparent text-lg font-semibold"
              onChange={(e) => setTag(e.target.value)}
            >
              <option className="text-xl text-gray-500 bg-white" value="other">
                Select Tag
              </option>
              {tags &&
                tags.map((tagss) => {
                  return (
                    <option
                      key={tagss.id}
                      className="bg-white text-base border-0 outline-none capitalize text-[#22305f]"
                      value={tagss.name}
                    >
                      {" "}
                      {tagss.name}{" "}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[300px] md:h-[400px] cursor-pointer rounded-lg">
            {loading ? (
              <Loader />
            ) : (
              <>
                {!imageAsset ? (
                  <>
                    <label
                      className="w-full relative h-full flex flex-col items-center justify-center cursor-pointer"
                      htmlFor=""
                    >
                      <div className="group relative w-full h-full flex flex-col gap-2 items-center justify-center">
                        <MdCloudUpload className="text-gray-500 text-[3rem] group-hover:text-gray-700" />
                        <p className="text-gray-500 text-base group-hover:text-gray-700">
                          Click here to upload
                        </p>
                      </div>
                      <input
                        type="file"
                        name="uploadimage"
                        accept="image/*"
                        onChange={uploadImage}
                        className="w-[100%] absolute invisible top-0 left-0 h-[100%]"
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <div className="relative h-full">
                      <img
                        className="w-full h-full object-cover"
                        src={imageAsset}
                        alt="uploaded image"
                      />
                      <motion.button
                        whileTap={{ scale: 0.75 }}
                        type="button"
                        onClick={deleteImage}
                        className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-100 transition-all ease-in-out"
                      >
                        {" "}
                        <MdDelete className="text-white" />{" "}
                      </motion.button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="w-full flex flex-col md:flex-row items-center gap-3">
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <MdFoodBank className="text-gray-700 text-2xl" />
              <input
                className="w-full h-full text-[#22305f] text-lg bg-transparent outline-none border-none placeholder:text-gray-400"
                type="text"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row items-center gap-3">
              <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                <MdAttachMoney className="text-gray-700 text-2xl" />
                <input
                  className="w-full h-full text-[#22305f] text-lg bg-transparent outline-none border-none placeholder:text-gray-400"
                  type="text"
                  required
                  value={price}
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-3">
            <div className="w-full py-2 border-b border-gray-300 flex items-start gap-2">
              <MdAttachFile className="text-gray-700 text-2xl" />
              <textarea
                className="w-full h-full text-[#22305f] text-lg bg-transparent outline-none border-none placeholder:text-gray-400"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="10"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center w-full">
            <button
              type="button"
              className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-[#22305f] text-white text-lg font-semibold py-2 rounded-lg"
              onClick={saveDetails}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewItem;
