import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund, HiReceiptRefund } from "react-icons/hi";
import ShopCreateProduct from "../ShopCreateProduct";
import AllEvents from "../AllEvents.jsx";
import AllProducts from "./AllProducts";
import CreateEvent from "./CreateEvent.jsx";
import DiscountCode from "./DiscountCode.jsx";
export const dashboardSidebarItem = [
  {
    name: "Dashboard",
    icon: <RxDashboard size={30} />,
    link: "dashboard",
  },
  {
    name: "All orders",
    icon: <FiShoppingBag size={30} />,
    link: "all-orders",
  },
  {
    name: "All products",
    icon: <FiPackage size={30} />,
    link: "all-products",
    element: <AllProducts />,
  },
  {
    name: "Create products",
    icon: <AiOutlineFolderAdd size={30} />,
    link: "create-products",
    element: <ShopCreateProduct />,
  },
  {
    name: " All events",
    icon: <MdOutlineLocalOffer size={30} />,
    link: "all-events",

    element: <AllEvents />,
  },
  {
    name: "Create events",
    icon: <VscNewFile size={30} />,
    link: "create-event",
    element: <CreateEvent />,
  },
  {
    name: "withdraw money",
    icon: <CiMoneyBill size={30} />,
    link: "withdraw-money",
  },
  {
    name: "Shop inbox",
    icon: <BiMessageSquareDetail size={30} />,
    link: "shop-inbox",
  },
  {
    name: "Discount Codes",
    icon: <AiOutlineGift size={30} />,
    link: "discount-codes",
    element: <DiscountCode />,
  },
  {
    name: "Refund",
    icon: <HiOutlineReceiptRefund size={30} />,
    link: "refund",
  },
  {
    name: "settings",
    icon: <CiSettings size={30} />,
    link: "settings",
  },
];
