import React, { useEffect, useState } from "react";
import DashboardHeader from "./shopComponent/DashboardHeader.jsx";
import DashboardSidebar from "./shopComponent/DashboardSidebar.jsx";

import { dashboardSidebarItem } from "./shopComponent/data.js";
import { useParams } from "react-router-dom";
function ShopDashboard() {
  const { component } = useParams();

  const [active, setActive] = useState(1);
  useEffect(() => {
    dashboardSidebarItem.map((item, index) => {
      if (item.link === component) {
        setActive(dashboardSidebarItem.indexOf(item) + 1);
      }
    });
  }, []);
  console.log(active);
  const changeActive = (num) => {
    setActive(num);
  };

  return (
    <div>
      <DashboardHeader changeActive={changeActive} />
      <div className="flex w-full ">
        <div className=" ">
          <DashboardSidebar active={active} changeActive={changeActive} />
        </div>
        {dashboardSidebarItem[active - 1].element}
      </div>
    </div>
  );
}

export default ShopDashboard;
