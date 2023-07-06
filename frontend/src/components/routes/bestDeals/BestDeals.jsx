import React, { useEffect, useState } from "react";
import { productData } from "../../../static/data";
import styles from "../../../styles/styles";
import ProductCard from "./ProductCard/ProductCard.jsx";
import { useSelector } from "react-redux";
import { store } from "../../../redux/store";
import { getProduct } from "../../../redux/action/product";

function BestDeals() {
  const { product } = useSelector((state) => state.products);
  console.log(product);
  const [data, setData] = useState(product!=null?product:[]);
useEffect(()=>{
  const d=product&&[...product].sort((a,b)=>b.soldOut-a.soldOut)
setData(d)
},[product])
  

  return (
    <div className={`${styles.section} mb-3 md:p-6 p-0`}>
      <div className="w-full items-center justify-between">
        <div className={styles.heading}> Best Deals</div>
        <div className="grid  sm:grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[25px]">
          {data &&
            data.map((data, index) => (
              <ProductCard data={data} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BestDeals;
