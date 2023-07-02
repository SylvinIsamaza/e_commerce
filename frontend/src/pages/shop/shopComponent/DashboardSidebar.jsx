import React, { useState } from "react";
import { dashboardSidebarItem } from "./data";
import { Link } from "react-router-dom";
function DashboardSidebar({ active, changeActive }) {
  return (
    <div className="w-full flex">
      <div className="800px:w-[280px]  w-[80px] bg-white h-[89vh] overflow-y-auto z-10 py-7 px-2">
        {dashboardSidebarItem.map((item, index) => (
          <Link
            to={
              item.link !== "dashboard"
                ? `/dashboard/${item.link}`
                : "/dashboard"
            }
            key={index}
            className={`w-full flex items-center p-4 ${
              active === index + 1 ? "text-green-500" : "#555"
            }`}
            onClick={() => {
              changeActive(index + 1);
            }}
          >
            {item.icon}
            <h5
              className={`text-[18px] 800px:block hidden ${
                active === index + 1 ? "text-green-500" : ""
              }`}
            >
              {item.name}
            </h5>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashboardSidebar;
