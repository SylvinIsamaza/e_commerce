import React from 'react'
import {DataGrid} from '@mui/x-data-grid'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import styles from '../../../styles/styles'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineLeft } from 'react-icons/ai'
function Orders() {
    const allOrders = [{
            _id: "77444357o3478458387589377497377389",
            orderItems: {
                name: "Iphone 14 pro max",
                length:20
            },
            totalPrice: 120,
            orderStatus: "Processing"

        },
        {
          _id: "77444357o3478458387589377497377389",
          orderItems: {
              name: "Iphone 14 pro max",
              length:20
          },
          totalPrice: 120,
          orderStatus: "Processing"

      }]
    const columns = [
        {
            field: "id",
            headerName: "Order ID",
            minWidth: 150,
            flex: 0.7
        }, {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassname:(params)=>{
              return params.getValue(params.id,"status")==="Delivered"
              ?"greenColor":"redColor"
            }
        },
        {
          field:"itemQty",
          headerName:"Item Qty",
          type:"number",
          minWidth: 130,
          flex:0.7
        },
        {
          field:"total",
          headerName:"Total",
          type:"number",
          minWidth:130
        },
        {
          field:" ",
          headerName:" ",
          minWidth:150,
          
          type:'number',
          flex:1,
       
          renderCell:(params)=>{
            return(
              <>
              <Link to={`/orders/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} color='black'/>
              </Button>
              </Link>
              </>
            )
          }
        }

    ]
    const row=[];
  allOrders&&allOrders.forEach((item)=>{
    row.push({
      id:item._id,
      itemQty:item.orderItems.length,
      total:"US$"+item.totalPrice,
      status:item.orderStatus,
      " ":""
    })
  })
    return (
        <div className={`${styles.section}`}>
          <DataGrid rows={row} columns={columns} initialState={{
            pagination:{
              paginationModel:{
                page:0,pageSize:5
              }
            }
          }}
          pageSizeOptions={[5,10,30]}
         rowSelection={false}
          autoHeight
          />
        </div>
    )
}

export default Orders
