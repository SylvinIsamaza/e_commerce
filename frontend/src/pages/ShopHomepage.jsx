import React from "react";
import styles from "../styles/styles";
import ShopInfo from "../components/shop/ShopInfo.jsx";
import ShopProfileData from "../components/shop/ShopProfileData.jsx";
function ShopHomepage() {
  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
      <div className="w-full flex justify-between py-10">
        <div className=" w-[25%] bg-[#fff] h-[95vh] top-2 left-0 z-10 rounded-[4px]">
          <ShopInfo isOwner={true} />
        </div>
        <div className=" w-[72%] overflow-y-scroll h-[90vh] ">
          <ShopProfileData isOwner={true} />
        </div>
      </div>
    </div>
  );
}

export default ShopHomepage;
