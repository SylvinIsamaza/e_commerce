import React, { useState } from "react";
import styles from "../styles/styles";
import { Link } from "react-router-dom";
import { productData } from ".././static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown.jsx";
import { categoriesData } from "../static/data";
import Navbar from "./Navbar.jsx";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { backendUrl, server } from "../server";
import Cart from "../components/cart/Cart.jsx";
import Wishlist from "../components/wishlist/Wishlist.jsx";
import MobileHeader from "../components/layout/MobileHeader";
function Header({ activeHeading, user }) {
  const {product}=useSelector((state)=>state.products)

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");
  const [openWishlist, setOpenWishlist] = useState(false);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredProduct = product!=null?product.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    ):'';
    setSearchData(filteredProduct);

  };

  const [active, setActive] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.screenY > 70) {
      setActive(true);
    }
  });
  const [dropDown, setDropdown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      {/* // mobile header  */}
      <div className="top-0 w-full 800px:hidden sticky  z-30  flex items-center bg-white h-[50px] justify-between  ">
        <BiMenuAltLeft
          size={40}
          className="ml-4 cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        />
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt="logo"
            />
          </Link>
        </div>

        <div className="mr-4">
          <AiOutlineShoppingCart
            color="rgba(0,0,0,0.83)"
            className="cursor-pointer"
            size={40}
          />
          <span className="h-4 w-4 absolute bg-[#3bc177] rounded-full top-1 right-3 text-[12px] text-center p-0 text-[white] leading-relaxed">
            1
          </span>
        </div>
      </div>
      <div
        className={`${styles.section}   
                `}
      >
        <div className=" hidden 800px:flex h-[50px] 800px:my-[20px]  items-center justify-between ">
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          {/* search box */}

          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search product ..."
              onChange={handleSearchChange}
              value={searchTerm}
              className="h-[40px] w-full border-blue-500 border-[2px] rounded-md px-2"
            />
            <AiOutlineSearch
              size={30}
              className="absolute top-1  right-1 cursor-pointer"
            ></AiOutlineSearch>
            <div className="w-full">
              {searchData && searchData.length !== 0 ? (
                <div className="absolute min-h[30vh] bg-slate-50 z-10 shadow-sm p-4">
                  {searchData.map((product, index) => {
                    const productData = product.name;
                    const productName = productData.replace(/\s+/g, "-");
                    return (
                      <Link to={`/products/${productName}`}>
                        <div className="flex w-full items-start py-3">
                          <img
                            src={product.images[0]}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{product.name}</h1>
                        </div>
                      </Link>
                    );
                  })}{" "}
                </div>
              ) : (
                ""
              )}{" "}
            </div>
          </div>

          <div className={`${styles.button} `}>
            <Link to="/shop-creation">
              <h1 className="text-[#fff] items-center flex">
                Become seller
                <IoIosArrowForward></IoIosArrowForward>
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "fixed top-0 left-0 right-0 z-10 shadow-sm " : ""
        }  w-full 800px:block hidden bg-[#3321c8] h-[70px] justify-between`}
      >
        <div
          className={`${styles.section}  ${styles.normalFlex}  h-[60px] relative justify-between `}
        >
          <div>
            <div className="relative h-[60px] bg-white w-[240px] mt-[19.5px] rounded-t-md ">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button className="h-[100%] w-full flex justify-between items-center   font-sans text-lg font-[500] select-none pl-10">
                All categories
              </button>
              {dropDown ? (
                <IoIosArrowUp
                  size={30}
                  className="absolute top-4 right-2 cursor-pointer"
                  onClick={() => setDropdown(!dropDown)}
                />
              ) : (
                <IoIosArrowDown
                  size={30}
                  className="absolute top-4 right-2 cursor-pointer"
                  onClick={() => setDropdown(!dropDown)}
                />
              )}
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropdown={setDropdown}
                />
              ) : (
                ""
              )}{" "}
            </div>
          </div>
          <div className={`${styles.normalFlex}`}>
            <Navbar active={activeHeading} user={user} />
          </div>
          <div className="flex">
            <div
              className={`800px:${styles.normalFlex} relative mr-[15px] hidden`}
            >
              <AiOutlineHeart
                color="rgba(255,255,255,0.83)"
                size={30}
                className="cursor-pointer"
                onClick={() => {
                  setOpenWishlist(true);
                }}
              />
              <span className="h-4 w-4 absolute bg-[#3bc177] rounded-full top-0 right-0 text-[12px] text-center p-0 text-[white] leading-relaxed">
                0
              </span>
            </div>
            <div
              className={`800px:${styles.normalFlex} relative mr-[15px] hidden`}
            >
              <AiOutlineShoppingCart
                color="rgba(255,255,255,0.83)"
                className="cursor-pointer"
                size={30}
                onClick={() => {
                  setOpenCart(true);
                }}
              />
              <span className="h-4 w-4 absolute bg-[#3bc177] rounded-full top-0 right-0 text-[12px] text-center p-0 text-[white] leading-relaxed">
                1
              </span>
            </div>
            {user ? (
              <Link
                to="/profile"
                className={`800px:${styles.normalFlex} relative mr-[15px] hidden`}
              >
                <img
                  src={`${backendUrl}${user && user.avatar}`}
                  className="w-[45px] h-[45px] rounded-full"
                />
              </Link>
            ) : (
              <Link
                to="/login"
                className={`800px:${styles.normalFlex} relative mr-[15px] hidden`}
              >
                <CgProfile color="rgba(255,255,255,0.83)" size={30} />
              </Link>
            )}{" "}
          </div>
        </div>
      </div>
      {openCart ? <Cart setOpen={setOpenCart} /> : ""}
      {openWishlist ? <Wishlist setOpen={setOpenWishlist} /> : ""}
      {open ? (
        <MobileHeader
          setOpen={setOpen}
          handleSearchChange={handleSearchChange}
          searchTerm={searchTerm}
          searchData={searchData}
          activeHeading={activeHeading}
          user={user}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
