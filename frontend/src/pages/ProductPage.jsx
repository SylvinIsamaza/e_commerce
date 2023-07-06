import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { productData } from "../static/data";
import styles from "../styles/styles";
import ProductCard from "../components/routes/bestDeals/ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductPage() {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
const {product}=useSelector((state)=>state.products)
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!categoryData) {
      const d =
       product&&[...product].sort((a, b) => a.soldOut - b.soldOut);
      //console.log(d);
      setData(d);
    } else {
      const d =
        product && [...product].filter((i) => i.category === categoryData);
      setData(d);
    }
  }, [product,categoryData]);
  const { user } = useSelector((state) => state.user);
  return (
    <div className="w-full">
      <Header activeHeading={3} user={user} />
      {data && data.length === 0 ? (
        <h1 className="text-center w-full text-[30px] text-gray-800 py-6">
          Product not found
        </h1>
      ) : (
        <h1 className="w-full text-center text-gray-900 text-[30px] font-[Poppins] font-[700]">
          Products
        </h1>
      )}
      <div
        className={` ${styles.section} grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[10px] md:gap-[15px] lg:gap-[20px] xl:gap-[25px] mt-3  `}
      >
        {data &&
          data.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default ProductPage;
