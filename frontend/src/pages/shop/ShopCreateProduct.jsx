import React, { useState } from "react";
import DashboardHeader from "./shopComponent/DashboardHeader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoriesData } from "../../static/data";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { createProduct } from "../../redux/action/product";
import styles from "../../styles/styles";
import { store } from "../../redux/store";
import { toast } from "react-toastify";

function ShopCreateProduct({ active }) {
  const { seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    console.log("form submitted");
    e.preventDefault();
    const newForm = new FormData();
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("tags", tags);
    newForm.append("originalPrice", originalPrice);
    newForm.append("discountPrice", discountPrice);
    newForm.append("stock", stock);
    newForm.append("shopId", seller.id);
    images.forEach((image) => {
      newForm.append("images", image);
    });
    store
      .dispatch(createProduct(newForm))
      .then(() => toast.success("product created successfully"));
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    console.log(files);
    setImages((previousImages) => [...previousImages, ...files]);
  };

  return (
    <div className="w-full flex justify-center items-center ">
      <div className=" w-[90%] 800px:w-[50%]   rounded-[4px] h-[80vh] px-7 py-5 overflow-y-scroll j bg-white ">
        <h5 className="text-[30px] font-Poppins text-center">Create product</h5>
        <form action="" onSubmit={handleSubmit}>
          <br />
          <label className="pb-4">
            Name <span className="text-green-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            placeholder="Enter your product name ..."
            className="w-full px-4 mt-4 border border-gray-300 h-[35px] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-600"
          />
          <br />
          <label className="pb-4">
            Description <span className="text-green-500 ">*</span>
          </label>
          <textarea
            cols="30"
            rows="8"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            name="description"
            placeholder="Enter your description ..."
            className="w-full px-4 mt-4 border border-gray-300 h-[35px] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-700"
          ></textarea>
          <br />
          <label className="pb-4">
            Category <span className="text-green-500">*</span>
          </label>
          <select
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full   rounded-[5px] mt-4 border border-gray-400 h-[35px] bg-transparent"
          >
            <option value="Choose a categoey">Choose a category</option>
            {categoriesData.map((item, index) => (
              <option value={item.title} key={index}>
                {" "}
                {item.title}
              </option>
            ))}
          </select>
          <br />
          <label className="pb-4">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
            }}
            name="tags"
            placeholder="Enter your product tags ..."
            className="w-full px-4  mt-4  border border-gray-300 h-[35px] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-600"
          />
          <br />
          <label className="pb-4">Original price</label>
          <input
            type="text"
            value={originalPrice}
            onChange={(e) => {
              setOriginalPrice(e.target.value);
            }}
            name="originalPrice"
            placeholder="Enter your product price ..."
            className="w-full px-4  mt-4 border border-gray-300 h-[35px] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-600"
          />
          <br />
          <label className="pb-4">
            Price(with discount) <span className="text-green-500">*</span>
          </label>
          <input
            type="text"
            value={discountPrice}
            onChange={(e) => {
              setDiscountPrice(e.target.value);
            }}
            name="districtPrice"
            placeholder="Enter your product price with discount ..."
            className="w-full px-4  mt-4 border border-gray-300 h-[35px] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-600"
          />
          <label className="pb-4">
            Product stock <span className="text-green-500">*</span>
          </label>
          <input
            type="text"
            value={stock}
            onChange={(e) => {
              setStock(e.target.value);
            }}
            name="stock"
            placeholder="Enter your product stock ..."
            className="w-full px-4  mt-4 border border-gray-300 h-[35px] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-600"
          />
          <br />

          <div className="flex w-full items-center flex-wrap">
            <label htmlFor="upload" title="upload image">
              {" "}
              Image
              <AiOutlinePlusCircle
                size={30}
                color="#555"
                className="cursor-pointer mt-4 mr-3"
              />
            </label>
            <input
              type="file"
              name="images"
              id="upload"
              className="hidden"
              multiple
              accept=".jpeg,.jpg,.png"
              onChange={handleImageChange}
            />
            {images &&
              images.map((i, index) => (
                <img
                  src={URL.createObjectURL(i)}
                  alt=""
                  key={index}
                  className="mt-2 h-[120px] w-[120px] object-cover"
                />
              ))}
          </div>
          <button
            type="submit"
            value="create product"
            className={`${styles.button} !text-white !bg-blue-500`}
          >
            Create product
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShopCreateProduct;
