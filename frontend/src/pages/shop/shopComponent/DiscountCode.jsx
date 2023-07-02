import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/routes/bestDeals/ProductCard/ProductCard";
import { productData } from "../../../static/data";
import { useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../../server";
import { deleteProduct, getAllProducts } from "../../../redux/action/product";
import { store } from "../../../redux/store";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import styles from "../../../styles/styles";
import { RxCross1 } from "react-icons/rx";

function DiscountCode() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [discountPercentage, setdiscountPerce] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const { seller } = useSelector((state) => state.seller);
  const { message } = useSelector((state) => state.products);
  const handleDelete = (id) => {
    store.dispatch(deleteProduct(id)).then(() => {
      toast.success(message);
      seller && store.dispatch(getAllProducts(seller.id));
    });
  };
  const { product } = useSelector((state) => state.products);

  console.log(product);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  const columns = [
    {
      field: "id",
      headerName: "coupon Id",
      flex: 0.7,
      minWidth: 150,
    },
    {
      field: "name",
      headerName: "name",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "minAmount",
      headerName: "Min amount",
      flex: 0.6,
      type: "number",
      minWidth: 150,
    },
    {
      field: "maxAmount",
      headerName: "Max Amount",
      flex: 0.5,
      type: "number",
      minWidth: 180,
    },
    {
      field: "delete",
      headerName: " delete",
      flex: 0.7,
      minWidth: 100,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const id = params.id;

        return (
          <>
            <Link to={""}>
              <Button
                onClick={() => {
                  handleDelete(id);
                }}
              >
                <AiOutlineDelete size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];
  product &&
    product.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        minAmount: item.minAmount,
        maxAmount: item.maxAmount,
      });
    });
  useEffect(() => {
    seller && store.dispatch(getAllProducts(seller.id));
  }, [seller]);
  console.log(product);
  return (
    <>
      <div className="overflow-y-scroll  w-full py-7 px-4">
        <h1 className="text-center font-[600] lg:text-[30px] text-[20px]">
          Discount code
        </h1>
        <div className="w-full items-center flex justify-end">
          <div
            className={`${styles.button} text-white !rounded-md !bg-blue-500`}
            onClick={() => {
              setOpen(true);
            }}
          >
            Create coupon
          </div>
        </div>
        <DataGrid
          rows={row}
          columns={columns}
          className="bg-white"
          pageSizeOptions={[5, 10]}
          rowSelection={false}
          disableRowSelectionOnClick
          autoHeight
        />
      </div>
      {open ? (
        <div className="w-full bg-[#0000003a] z-[2000] fixed bottom-0 top-0 flex items-center justify-center left-0">
          <div className="w-[90%] 800px:w-[40%] bg-white shadow-md rounded-md h-[80vh] p-4 ">
            <div className="w-full flex justify-end">
              <RxCross1
                size={30}
                className="cursor-pointer"
                onClick={() => {
                  setOpen(false);
                }}
              />
            </div>
            <br />
            <h1 className="text-[25px] font-[500] text-center">
              Create coupon code
            </h1>
            <form action="" onSubmit={handleSubmit}>
              <label className="pb-2" htmlFor="name">
                Name <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
                className="w-full border border-gray-300 focus:border-green-500 h-[35px] rounded-md px-2 my-3"
                placeholder="enter your coupon code name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label className="pb-2" htmlFor="name">
                Discount percentage <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                name="discountPercentage"
                value={discountPercentage}
                className="w-full border border-gray-300 focus:border-green-500 h-[35px] rounded-md px-2 my-3"
                placeholder="enter your discount percentage"
                onChange={(e) => {
                  setdiscountPerce(e.target.value);
                }}
              />
              <label className="pb-2" htmlFor="name">
                Min amount
              </label>
              <input
                type="text"
                name="minAmount"
                value={minAmount}
                className="w-full border border-gray-300 focus:border-green-500 h-[35px] rounded-md px-2 my-3"
                placeholder="enter your coupon code min amount"
                onChange={(e) => {
                  setMinAmount(e.target.value);
                }}
              />
              <label className="pb-2" htmlFor="name">
                Max amount
              </label>
              <input
                type="text"
                name="maxAmount"
                value={minAmount}
                className="w-full border border-gray-300 focus:border-green-500 h-[35px] rounded-md px-2 my-3"
                placeholder="enter your coupon code  max amount"
                onChange={(e) => {
                  setMaxAmount(e.target.value);
                }}
              />
              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  className={`${styles.button} !bg-blue-500 !text-white`}
                >
                  Create coupon
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default DiscountCode;
