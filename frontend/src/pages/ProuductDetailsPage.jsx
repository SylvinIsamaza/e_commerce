import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/layout/Footer";
import ProductDetails from "../components/ProductDetail/ProductDetail.jsx";
import { useParams } from "react-router-dom";

import SuggestedProduct from "../components/products/SuggestedProduct";
import { useSelector } from "react-redux";
import { productData } from "../static/data";

function ProuductDetailsPage() {
  const { id } = useParams();
  const {product}=useSelector((state)=>state.products)
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const product_id = id
  console.log(product_id)
  useEffect(() => {
    const d = product&&product.find((item) => item._id === product_id);

    setData(d);
  }, [id,product]);
  
console.log(data)
  return (
    <div className="w-full">
      <Header user={user} />
      {data ? (
        <div>
          {" "}
          <ProductDetails data={data}/>
          <SuggestedProduct data={data} />
        </div>
      ) : (
        ""
      )}

      <Footer />
    </div>
  );
}

export default ProuductDetailsPage;
