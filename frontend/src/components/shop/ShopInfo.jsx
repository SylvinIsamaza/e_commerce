import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { backendUrl, server } from "../../server";
import styles from "../../styles/styles";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function ShopInfo({ isOwner }) {
  const {id}=useParams()
  const { isSeller,seller } = useSelector((state) => state.seller);
  const handleLogout = async () => {
    axios
      .get(`${server}/api/v2/shop/logout`, { withCredentials: true })
      .then((response) => {
        toast.success(response.data.message);
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  console.log(seller);
  return (
    <div className="w-full py-7 px-2 overflow-y-scroll  h-[100%]">
      <div className="flex items-center justify-center">
        <img
          src={`${backendUrl}/${seller?.avatar}`}
          alt=""
          className="w-[130px] h-[130px] object-cover rounded-full"
        />
      </div>
      <h3 className="text-center py-2 text-[20px] font-[400]">
        {seller?.name}
      </h3>
      <h3 className="text-[16px] text-[#00000076] py-4">
        {seller?.description}
      </h3>
      <div className="p-3">
        <h3 className="text-[#000000] font-[600]">Address</h3>
        <h4 className="text-[#000000b0]">{seller?.address}</h4>
      </div>
      <div className="p-3">
        <h3 className="text-[#000000] font-[600]">Phone number</h3>
        <h4 className="text-[#000000b0]">{seller?.phoneNumber}</h4>
      </div>
      <div className="p-3">
        <h3 className="text-[#000000] font-[600]">Total products</h3>
        <h4 className="text-[#000000b0]">10</h4>
      </div>
      <div className="p-3">
        <h3 className="text-[#000000] font-[600]">Shop rating</h3>
        <h4 className="text-[#000000b0]">4/5</h4>
      </div>
      <div className="p-3">
        <h3 className="text-[#000000] font-[600]">Joined on </h3>
        <h4 className="text-[#000000b0]">{seller?.createdAt.slice(0, 10)}</h4>
      </div>
      {isOwner && (
        <div className="flex flex-col w-full items-center justify-center px-1">
          <div className={`${styles.button} text-white w-full  !rounded-md`}>
            Edit shop
          </div>
          <div
            className={`${styles.button} text-white w-full !rounded-md`}
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopInfo;
