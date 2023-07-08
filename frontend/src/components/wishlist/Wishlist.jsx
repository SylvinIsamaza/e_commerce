import React, { useState } from 'react'
import {RxCross1} from 'react-icons/rx'
import styles from '../../styles/styles'
import {IoBagHandleOutline} from 'react-icons/io5'
import {HiOutlineMinus, HiPlus} from 'react-icons/hi'
import { AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import {BsCartPlus} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { server } from '../../server'
import { store } from '../../redux/store'
import { removeProductToWishlist } from '../../redux/action/wishlist'
import { toast } from 'react-toastify'

function Cart({setOpen}) {
    const {wishlist}=useSelector((state)=>state.wishlist)
    const [itemsCount,setItemsCount]=useState()
    const [totalAmountInCart,setTotalAmountInCart]=useState(0)
    // const cartData = [
    //     {
    //         name: "Iphone 14 pro max  ",
    //         desription: 'test',
    //         price: 999,
    //         count:40
    //     }, {
    //         name: "Iphone 14 pro max",
    //         desription: 'test',
    //         price: 657,
    //         count:45
    //     }, {
    //         name: "Iphone 14 pro max",
    //         desription: 'test',
    //         price: 646,
    //         count:50
    //     }
    // ]
    

    return (
        <div className='w-full h-screen bg-[#0000004b] top-0 fixed z-[40] flex justify-center items-center'>
            <div className='fixed bg-white right-0 w-[80%] 600px:w-[25%] h-screen  shadow-sm  '>
                <div className='w-full justify-start flex flex-col h-screen'>
                    <div className='flex justify-end w-full'>
                        <RxCross1 size={25}
                            className='mt-2 mr-1 cursor-pointer'
                            onClick={
                                () => {
                                    setOpen(false)
                                }
                            }/>
                    </div>
                    {wishlist.length>0?<><div className={
                    `${
                        styles.normalFlex
                    } p-4`
                }>

                    <AiOutlineHeart size={25}/>
                    <h1 className='px-3 text-xl font-[600]'>
                        {wishlist&&wishlist.length}</h1>
                </div>
              
                    <div  className='w-full'>
                    {
                wishlist && wishlist.map((data, i) =>{
                    
                return(  < WishlistCard data = {
                    data
                }  key={i}/>)
              
            })
            } 
                    </div></>        
    :<div className='w-full h-[100%] flex items-center justify-center'>
       <AiFillHeart color='red' size={20}/> Your wishlist is empty
        </div>}
 

               
         </div>

        </div>
    </div>
    )
}
function WishlistCard({data}) {
  
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
        <div className='w-full  border border-[#0000001b] py-6 flex items-center gap-[5px] pr-3'>
            <div className='flex flex-col gap-1 px-4 py-4 '>
           <RxCross1 size={15} onClick={()=>handleRemoveFromWishlist(data)} className='cursor-pointer'/>
            </div>
            <img src={`${server}/${data.images[0]}`} className='h-[90%] w-[100px]' />
            <div className='h-[100%] flex items-start flex-col w-full'>
                <h1 >{data.name}</h1>
               
                <p className='text-red-600 font-[700]'> US$ {data.originalPrice} $</p>
            </div>
            <div>
                <BsCartPlus size={30} className='cursor-pointer'/>
            </div>

        </div>
    )

}

export default Cart
