import React, { useEffect } from "react";
import styles from "../styles/styles";
import ShopInfo from "../components/shop/ShopInfo.jsx";
import ShopProfileData from "../components/shop/ShopProfileData.jsx";
import { useSelector } from "react-redux";
import { store } from "../redux/store";
import { getAllProducts } from "../redux/action/product";
import { useParams } from "react-router-dom";
import { loadShop } from "../redux/action/shop";
function ShopHomepage() {
  const {seller,isSeller}=useSelector((state)=>state.seller);
  const {id}=useParams();
  useEffect(()=>{
  
      store.dispatch(loadShop(id))
    
  },[id])
console.log(seller)
  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
      <div className="w-full flex justify-between py-10">
        <div className=" w-[25%] bg-[#fff] h-[95vh] top-2 left-0 z-10 rounded-[4px]">
          <ShopInfo isOwner={isSeller?seller.id==id?true:false:false} />
        </div>
        <div className=" w-[72%] overflow-y-scroll h-[90vh] ">
          <ShopProfileData isOwner={seller?seller.id===id?true:false:false} />
        </div>
      </div>
    </div>
  );
}

export default ShopHomepage;
