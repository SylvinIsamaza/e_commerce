import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { server } from "../../server";
import { store } from "../../redux/store";
import { removeToCart } from "../../redux/reducer/cart";
import { addProductToCart, removeProductToCart } from "../../redux/action/cart";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { addProductToWishlist, removeProductToWishlist } from "../../redux/action/wishlist";

function Cart({ setOpen, data }) {
  const { cart } = useSelector((state) => state.cart);
  const [itemsCount, setItemsCount] = useState();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.Qty * item.discountPrice,
    0
  );

  return (
    <div className="w-full h-screen bg-[#0000004b] top-0 fixed z-[40] flex justify-center items-center">
      <div className="fixed w-[90%] 600px:w-[50%] bg-white right-0 800px:w-[25%] h-screen  shadow-sm 800px:min-w-[300px]  ">
        <div className="w-full justify-start flex flex-col h-screen">
          <div className="flex justify-end w-full">
            <RxCross1
              size={25}
              className="mt-2 mr-1 cursor-pointer"
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
          {data.length > 0 ? (
            <>
              {/* {item length} */}
              <div className={`${styles.normalFlex} p-4`}>
                <IoBagHandleOutline size={25} />
                <h1 className="px-3 text-xl font-[600]">{data.length} items</h1>
              </div>

              <div className="w-full">
                {data &&
                  data.map((data, i) => {
                    return <SingleCart data={data} key={i} />;
                  })}{" "}
              </div>
              <div className=" flex flex-grow justify-end flex-col items-center">
                {totalPrice > 0 ? (
                  <button className="w-[80%] bg-red-500 text-white mb-2 rounded-md h-[40px] text-[18px] font-[700]">
                    checkout now {totalPrice > 0 ? totalPrice : ""}$
                  </button>
                ) : (
                  ""
                )}{" "}
              </div>
            </>
          ) : (
            <div className="w-full flex items-center justify-center h-[100%]">
              <IoBagHandleOutline
                size={20}
                className="mx-1"
                color="#0000002d"
              />
              <h3 className="text-[18px] font-[500] text-[#000000ad]">
                Cart is empty!
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
function SingleCart({ data, totalPrice }) {
  const { wishlist } = useSelector((state) => state.wishlist);
  const itemToWishlist = wishlist.find((i) => i._id == data._id);
  const addToWishlistHandler = (data) => {
    const itemsExist = wishlist.find((i) => i._id === data._id);
    if (itemsExist) {
      toast.error("Item already exists");
    } else {
      try {
        const wishlistData = { ...data };
        store.dispatch(addProductToWishlist(wishlistData));
        toast.success("Item added to wishlist successfully");
      } catch (error) {
        toast.error(error);
      }
    }
  };
  const [count, setCount] = useState(data.Qty);

  const handleRemoveFromCart = (data) => {
    store
      .dispatch(removeProductToCart(data))
      .then(() => toast.success("items removed successfully"))
      .catch((err) => toast.error(err));
  };
  const incrementCount = (data) => {
    if (data.stock <= count) {
      return toast.error("product amount available exceeded");
    }
    setCount(count + 1);
    const updatedData = { ...data, Qty: count + 1 };
    updateProductAmount(updatedData);
    return data;
  };

  const decrementCount = (data) => {
    if (count > 1) {
      setCount(count - 1);
      const updatedData = { ...data, Qty: count - 1 };
      updateProductAmount(updatedData);
    }
  };
  function updateProductAmount(data) {
    const cartData = data;
    store.dispatch(addProductToCart(cartData));
  }
  const handleRemoveFromWishlist=(data)=>{
    try {
      const wishlistData={...data}
      store.dispatch(removeProductToWishlist(wishlistData))
      toast.success("items removed successfully")
    } catch (error) {
      toast.error(error)
    }
   
   
  }

  return (
    <div className="w-full  border border-[#0000001b] py-6 flex items-center gap-[5px] pr-3">
      <div className="flex flex-col gap-1 px-4 py-4 ">
        <button className=" bg-red-500 rounded-full  text-center flex items-center justify-center text-white">
          <HiPlus
            size={25}
            onClick={() => {
              incrementCount(data);
            }}
            className="cursor-pointer"
          />
        </button>
        <p className="text-center w-full">{data.Qty}</p>
        <button className=" bg-gray-300 rounded-full text-center flex items-center justify-center text-gray-900">
          <HiOutlineMinus
            size={25}
            onClick={() => {
              decrementCount(data);
            }}
            className="cursor-pointer"
          />
        </button>
      </div>
      <img src={`${server}/${data.images[0]}`} className="h-[90%] w-[100px]" />
      <div className="h-[100%] flex items-start flex-col w-full">
        <h1>{data.name}</h1>
        <p className="text-gray-500 text-[12px] ">
          $ {data.discountPrice}*{data.Qty}
        </p>
        <p className="text-red-600 font-[700]">
          US$ {data.discountPrice * data.Qty}$
        </p>
      </div>
      <div>
        <RxCross1
          size={20}
          onClick={() => {
            handleRemoveFromCart(data);
          }}
          className="cursor-pointer"
        />
      </div>
      <div>
        {itemToWishlist ? (
          <AiFillHeart
            size={30}
            className="cursor-pointer"
            color="red"
            onClick={() => handleRemoveFromWishlist(data)}
          />
        ) : (
          <AiOutlineHeart
            size={30}
            className="cursor-pointer"
            onClick={() => addToWishlistHandler(data)}
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
