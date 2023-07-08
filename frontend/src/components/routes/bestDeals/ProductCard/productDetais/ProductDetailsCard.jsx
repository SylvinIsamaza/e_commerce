import React, {useState} from 'react'
import {RxCross1} from 'react-icons/rx'
import styles from '../../../../../styles/styles'
import {AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart} from 'react-icons/ai'
import { server } from '../../../../../server'
import { addProductToCart } from '../../../../../redux/action/cart'
import { store } from '../../../../../redux/store'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { addProductToWishlist, removeProductToWishlist } from '../../../../../redux/action/wishlist'

function ProductDetailsCard({data, open, setOpen}) {
    const [count, setCount] = useState(1)
    const [select, setSelect] = useState(false)
    const [click, setClick] = useState("")

    const {cart}=useSelector((state)=>state.cart)
    function incrementCount(data){
        setCount(count+1);
        const updatedData={...data,Qty:count+1}
     updateProductAmount(updatedData)


    }
    const decrementCount=(data)=>{
  
        if(count>1){
         setCount(count-1);
         const updatedData={...data,Qty:count-1}
         updateProductAmount(updatedData)
        }
      
        
       }
       function updateProductAmount(data){
       
     
         
           const cartData=data;
           store.dispatch(addProductToCart(cartData))
          
       }
    const addToCartHandler=(data)=>{
        const itemsExist=cart.find((i)=>i._id===data._id)
        if(itemsExist){
            return toast.error("Items already exist in cart");
        }
        else{
            const cartData={...data,Qty:count}
            store.dispatch(addProductToCart(cartData)).then(()=>toast.success("Items added to cart successfull")).catch((err)=>toast.error(err))
        }
       
    }
    return (
        <div className='bg-[#fff]'>
            {
            data ? (
                <div className='h-screen w-full fixed top-0 left-0  bg-[#00000030] flex justify-center items-center z-10'>
                    <div className='relative w-[90%] h-[90vh] 800px:[75%] bg-white 800px:w-[60%] shadow-sm  p-4 rounded-md overflow-scroll flex justify-center '>
                        <RxCross1 size={30}
                            onClick={
                                () => {
                                    setOpen(false)
                                }
                            }
                            className='absolute top-3 right-3 '/>
                        <div className="block 800px:flex w-full">
                            <div className="w-full 800px:w-[50%]">
                                <img src={`${server}/${data.images[0]}`
                                        
                                    }
                                    alt="image"/>
                                                            <div className="flex">
                            <img src={
                                `${server}/${data.shop.avatar}`
                                }
                                alt=""
                                className='w-[50px] h-[50px] rounded-full mr-2'/>
                            <div>
                                <h4 className={
                                    styles.shop_name
                                }>
                                    {
                                    data.shop.name
                                }</h4>
                                <h5 className='pb-3 text-[15px]'>
                                    ({
                                    4.5
                                }) Ratings
                                </h5>

                            </div>


                        </div>
                        <button className={
                            `${
                                styles.button
                            } text-white rounded h-[11]`
                        }>
                            Send message<span ><AiOutlineMessage size={20} className='ml-1'/></span>
                        </button>
                        <h5 className='text-[16px] text-red-500 mt-5'>{data.soldOut} sold out</h5>

                            </div>
                            <div className='w-full 800px:w-[50%] pr-[5px] pl-[5px]'>
                                <h1 className={`${styles.productTitle} text-[20px]`}>{data.name}</h1>
                                <p className='py-3'>{data.description}</p>
                                <div className="flex">
                                    
                                <h3 className={`${styles.productDiscountPrice} py-2`}>{data.discountPrice} $ </h3>
                                <h4 className={styles.price}>{data.originalPrice?data.originalPrice:null} $ </h4>
                                </div>
                                <div className="flex py-5 justify-between w-full ">
                                    <div className='flex'>
                                    <button className='px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-500 flex items-center justify-center text-white rounded-tl-md rounded-bl-md'  onClick={()=>{decrementCount(data)}}>-</button>
                                    <span className='text-center font-[500] py-2 px-4 bg-gray-100 text-gray-800'>{count}</span>
                                    <button className='px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-500 flex items-center justify-center text-white rounded-tr-md rounded-br-md' onClick={()=>{incrementCount(data)}}>+</button>
                                   
                                    </div>
                                    {click?(
                                        <AiFillHeart size={30}               onClick={()=>{setClick(!click);
                                            store.dispatch(removeProductToWishlist(data))
                                            }} color='red'/>
                                    ):(<AiOutlineHeart size={30}               onClick={()=>{setClick(!click);
                                        store.dispatch(addProductToWishlist(data))
                                        }} />)}
                                    </div>
                                   
                                <button className={`${styles.button} text-white`} onClick={()=>addToCartHandler(data)}>Add to cart <AiOutlineShoppingCart size={20} className='ml-2'/></button>
                                 
                            </div>
                        </div>
                        

              
                    </div>


                </div>
            ) : ''
        } </div>
    )
}

export default ProductDetailsCard
