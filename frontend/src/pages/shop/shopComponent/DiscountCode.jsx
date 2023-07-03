import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import {
  deleteCouponCode,
  getAllCouponCodes,
} from "../../../redux/action/couponCode";
import { store } from "../../../redux/store";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import styles from "../../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import { getAllProducts } from "../../../redux/action/product";
import axios from "axios";
import { server } from "../../../server";

function DiscountCode() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("");

  const { seller } = useSelector((state) => state.seller);
  const { message } = useSelector((state) => state.products);
  const { couponCode } = useSelector((state) => state.couponCode);
  console.log(couponCode);
  const handleDelete = (id) => {
    store.dispatch(deleteCouponCode(id)).then(() => {
      toast.success(message);
      seller && store.dispatch(getAllCouponCodes(seller.id));
    });
  };
  const { product } = useSelector((state) => state.products);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${server}/api/v2/couponCode/create-coupon-code`, {
        name,
        maxAmount,
        minAmount,
        selectedProduct,
        shop: seller,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
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
    seller && store.dispatch(getAllCouponCodes(seller.id));
    seller && store.dispatch(getAllProducts(seller.id));
  }, []);

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
          <div className="w-[90%] 800px:w-[40%] bg-white shadow-md rounded-md h-[80vh] p-4 overflow-y-scroll">
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
            <form onSubmit={handleSubmit} action="" aria-required={true}>
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
                  console.log(name);
                  setName(e.target.value);
                }}
              />
              <label className="pb-2" htmlFor="name">
                Discount percentage <span className="text-green-500">*</span>
              </label>
              <input
                type="number"
                name="discountPercentage"
                required
                value={discountPercentage}
                className="w-full border border-gray-300 focus:border-green-500 h-[35px] rounded-md px-2 my-3"
                placeholder="enter your discount percentage"
                onChange={(e) => {
                  setDiscountPercentage(e.target.value);
                }}
              />
              <label className="pb-2" htmlFor="name">
                Min amount
              </label>
              <input
                type="text"
                name="minAmount"
                value={minAmount}
                required
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
                type="number"
                name="maxAmount"
                value={maxAmount}
                required
                className="w-full border border-gray-300 focus:border-green-500 h-[35px] rounded-md px-2 my-3"
                placeholder="enter your coupon code  max amount"
                onChange={(e) => {
                  setMaxAmount(e.target.value);
                }}
              />
              <label htmlFor=" selectProduct">Selectproduct</label>
              <br />
              <select
                name="selectedProduct"
                id="selectedProduct"
                className="w-full h-[35px] rounded-md bg-white border "
                value={selectedProduct}
                onChange={(e) => {
                  setSelectedProduct(e.target.value);
                }}
              >
                <option value=""> Choose product</option>
                {product &&
                  product.map((product, index) => (
                    <option value={product.id} key={index}>
                      {product.name}
                    </option>
                  ))}
              </select>

              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  className={`${styles.button} !bg-blue-500 !text-white`}
                  onClick={handleSubmit}
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
