import { useState } from "react";
import { AiOutlineCreditCard, AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import {HiOutlineReceiptRefund, HiOutlineShoppingBag} from "react-icons/hi";
import { MdOutlineTrackChanges } from 'react-icons/md'
import { RxPerson } from "react-icons/rx";
import { TbAddressBook }from'react-icons/tb'

import ProfileComponents from "./profileContent/ProfileComponents";
import Orders from "./profileContent/Orders";
import Refunds from "./profileContent/Refunds";
import TrackOrders from "./profileContent/TrackOrders";
import PaymentMethod from "./profileContent/PaymentMethod";
import Address from "./profileContent/Address";
import Inbox from "./profileContent/Inbox";
import Logout from "./profileContent/Logout";

export const profileSIdebarItems = [
    {
        name: 'Profile',
        icon: <RxPerson size={20}/>,
        element:<ProfileComponents />
    }
        , {
        name: 'Orders',
        icon: <HiOutlineShoppingBag size={20}/>,
        element:<Orders/>}, 
        {
        name: 'Refunds',
        icon: <HiOutlineReceiptRefund size={20}/>,
        element:<Refunds/>
    },
        {
            name: 'Inbox',
            icon: <AiOutlineMessage size={20}/>,
            element:<Inbox/>
        },
        {
            name:"Track orders",
            icon:<MdOutlineTrackChanges size={20}/>,
            element:<TrackOrders/>
        },
        {
            name:"Payment Method",
            icon:<AiOutlineCreditCard size={20}/>,
            element:<PaymentMethod/>
        },
        {
            name:"Adress",
            icon:<TbAddressBook size={20}/>,
            element:<Address/>
        },
        {
            name:"Logout",
            icon:<AiOutlineLogout size={20}/>,
            element:<Logout/>
            
        }




]
