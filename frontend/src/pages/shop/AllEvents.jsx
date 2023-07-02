import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { server } from "../../server";
import { deleteEvent, getAllEvents } from "../../redux/action/event";
import { store } from "../../redux/store";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "react-toastify";

function AllEvents() {
  const { seller } = useSelector((state) => state.seller);
  const { message } = useSelector((state) => state.event);
  const handleDelete = (id) => {
    store.dispatch(deleteEvent(id)).then(() => {
      toast.success(message);
      seller && store.dispatch(getAllEvents(seller.id));
    });
  };
  const { event } = useSelector((state) => state.event);

  console.log(event);

  const columns = [
    {
      field: "id",
      headerName: "event Id",
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
      maxWidth: 130,
    },
    {
      field: "sold",
      headerName: "Sold Out",
      flex: 0.7,
      type: "number",
      maxWidth: 160,
    },
    {
      field: "startDate",
      headerName: "start Date",
      flex: 0.7,
      maxWidth: 150,
    },
    {
      field: "endDate",
      headerName: "end Date",
      flex: 0.7,
      maxWidth: 150,
    },
    {
      field: " ",
      headerName: "Preview",
      flex: 0.8,
      maxWidth: 140,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const d = params.row.name;
        const event_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/event/${event_name}`}>
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
  event &&
    event.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "US$ " + item.originalPrice,
        stock: item.stock,
        sold: item.soldOut,
        startDate: item.startDate.slice(0, 10),
        endDate: item.finishDate.slice(0, 10),
      });
    });
  useEffect(() => {
    seller && store.dispatch(getAllEvents(seller.id));
  }, [seller]);
  console.log(event);
  return (
    <div className="overflow-y-scroll  w-full py-7 px-4">
      <h1 className="text-center font-[600] lg:text-[30px] text-[20px]">
        All events
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

export default AllEvents;
