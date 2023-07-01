import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/layout/Footer";
import ProductDetails from "../components/ProductDetail/ProductDetail.jsx";
import { useParams } from "react-router-dom";

import SuggestedProduct from "../components/products/SuggestedProduct";
import { useSelector } from "react-redux";
import { productData } from "../static/data";

function ProuductDetailsPage() {
  const { name } = useParams();
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const product_name = name.replace(/-/g, " ");
  useEffect(() => {
    const d = productData.find((item) => item.name === product_name);

    setData(d);
  }, [product_name]);

  return (
    <div className="w-full">
      <Header user={user} />
      {data ? (
        <div>
          {" "}
          <ProductDetails data={data} />
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
