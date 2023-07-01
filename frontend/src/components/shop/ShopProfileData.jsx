import React, { useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "../routes/bestDeals/ProductCard/ProductCard";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

function ShopProfileData() {
  const [active, setActive] = useState(1);
  const profileTitle = [
    {
      name: "Shop Products",
    },
    {
      name: "Running events",
    },
    {
      name: "Shop Reviews",
    },
  ];
  return (
    <div className="full">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center">
          {profileTitle.map((item, index) => (
            <div
              className={`${
                active === index + 1 ? "text-green-500" : ""
              } flex items-center pr-[20px] text-[25px] font-[600] cursor-pointer`}
              onClick={() => {
                setActive(index + 1);
              }}
            >
              <h5>{item.name}</h5>
            </div>
          ))}
        </div>
        <Link to="/dashboard">
          <div
            className={`${styles.button} !bg-blue-600 text-white font-[600] !rounded-md`}
          >
            {" "}
            Go dashboard
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px]  xl:grid-cols-3 xl:gap-[35px]">
        {productData.map((item, index) => (
          <ProductCard data={item} key={index} isShop={true} />
        ))}
      </div>
    </div>
  );
}

export default ShopProfileData;
