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

function AllProducts() {
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
  // const allOrders = [
  //   {
  //     _id: "77444357o3478458387589377497377389",
  //     orderItems: {
  //       name: "Iphone 14 pro max",
  //       length: 20,
  //     },
  //     totalPrice: 120,
  //     orderStatus: "Processing",
  //   },
  //   {
  //     _id: "77444357o3478458387589377497377389",
  //     orderItems: {
  //       name: "Iphone 14 pro max",
  //       length: 20,
  //     },
  //     totalPrice: 120,
  //     orderStatus: "Processing",
  //   },
  // ];
  const columns = [
    {
      field: "id",
      headerName: "product Id",
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
      field: "price",
      headerName: "Price ",
      flex: 0.5,
      minWidth: 100,
    },
    {
      field: "stock",
      headerName: "stock",
      type: "number",
      flex: 0.5,
      minWidth: 80,
    },
    {
      field: "sold",
      headerName: "Sold Out",
      flex: 0.6,
      type: "number",
      minWidth: 130,
    },
    {
      field: " ",
      headerName: "Preview",
      flex: 0.8,
      minWidth: 100,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const d = params.row.name;
        const product_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/product/${product_name}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: " delete",
      flex: 0.3,
      minWidth: 80,
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
        price: "US$ " + item.originalPrice,
        stock: item.stock,
        sold: item.soldOut,
      });
    });
  useEffect(() => {
    seller && store.dispatch(getAllProducts(seller.id));
  }, [seller]);
  console.log(product);
  return (
    <div className="overflow-y-scroll  w-full py-7 px-4">
      <h1 className="text-center font-[600] lg:text-[30px] text-[20px]">
        All products
      </h1>
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
  );
}

export default AllProducts;
