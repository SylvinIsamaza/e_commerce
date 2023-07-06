import React, {useState} from 'react'
import {RxCross1} from 'react-icons/rx'
import styles from '../../../../../styles/styles'
import {AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart} from 'react-icons/ai'

function ProductDetailsCard({data, open, setOpen}) {
    const [count, setCount] = useState(0)
    const [select, setSelect] = useState(false)
    const [click, setClick] = useState("")
    function incrementCount(){
        setCount((prevCount)=>prevCount+1)
    }
    function decrementCount(){
    
       setCount((prevCount)=>count>0?prevCount-1:count)
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
                                <img src={
                                        data.images[select]
                                    }
                                    alt="image"/>
                                                            <div className="flex">
                            <img src={
                                    data.shop.avatar
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
                        <h5 className='text-[16px] text-red-500 mt-5'>{data.total_sell} sold out</h5>

                            </div>
                            <div className='w-full 800px:w-[50%] pr-[5px] pl-[5px]'>
                                <h1 className={`${styles.productTitle} text-[20px]`}>{data.name}</h1>
                                <p className='py-3'>{data.description}</p>
                                <div className="flex">
                                    
                                <h3 className={`${styles.productDiscountPrice} py-2`}>{data.discount_price} $ </h3>
                                <h4 className={styles.price}>{data.price?data.price:null} $ </h4>
                                </div>
                                <div className="flex py-5 justify-between w-full ">
                                    <div className='flex'>
                                    <button className='px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-500 flex items-center justify-center text-white rounded-tl-md rounded-bl-md'  onClick={decrementCount}>-</button>
                                    <span className='text-center font-[500] py-2 px-4 bg-gray-100 text-gray-800'>{count}</span>
                                    <button className='px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-500 flex items-center justify-center text-white rounded-tr-md rounded-br-md' onClick={incrementCount}>+</button>
                                   
                                    </div>
                                    {click?(
                                        <AiFillHeart size={30}  />
                                    ):(<AiOutlineHeart size={30} />)}
                                    </div>
                                   
                                <button className={`${styles.button} text-white`}>Add to cart <AiOutlineShoppingCart size={20} className='ml-2'/></button>
                                 
                            </div>
                        </div>
                        

              
                    </div>


                </div>
            ) : ''
        } </div>
    )
}

export default ProductDetailsCard
