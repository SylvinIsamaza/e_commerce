import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { BiMessage, BiMessageSquareDetail } from "react-icons/bi";
import { useSelector } from "react-redux";
import { backendUrl } from "../../../server";

function DashboardHeader() {
  const { seller } = useSelector((state) => state.seller);

  return (
    <div className="w-full bg-white h-[80px] shadow-sm  sticky top-0 left-0 right-0 px-4 flex items-center">
      <div className="w-full flex items-center justify-between">
        <div>
          <Link to="/dashboard">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center ">
          <Link to="/coupon-code">
            <div className="flex items-center mr-2">
              <AiOutlineGift
                color="#555"
                size={30}
                className="mx-4 cursor-pointer"
              />
            </div>
          </Link>
          <Link to="/dashboard/events">
            <div className="flex items-center mr-2">
              <MdOutlineLocalOffer
                color="#555"
                size={30}
                className="mx-4 cursor-pointer"
              />
            </div>
          </Link>
          <Link to="/dashboard-all-products">
            <div className="flex items-center mr-2">
              <FiShoppingBag
                color="#555"
                size={30}
                className="mx-4 cursor-pointer"
              />
            </div>
          </Link>
          <Link to="/dashboard/orders">
            <div className="flex items-center mr-2">
              <FiPackage
                color="#555"
                size={30}
                className="mx-4 cursor-pointer"
              />
            </div>
          </Link>
          <Link to="dashboard/message">
            <div className="flex items-center mr-2">
              <BiMessageSquareDetail
                color="#555"
                size={30}
                className="mx-4 cursor-pointer"
              />
            </div>
          </Link>

          {seller != null ? (
            <Link to={`/shop/${seller.id}`}>
              <div className="flex items-center mr-2">
                <img
                  src={`${backendUrl}/${seller.avatar}`}
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
              </div>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
