import React, {useState} from 'react'
import {RxCross1} from 'react-icons/rx'
import styles from '../../styles/styles'
import {IoBagHandleOutline} from 'react-icons/io5'
import {HiOutlineMinus, HiPlus} from 'react-icons/hi'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'


function Cart({setOpen}) {
    const [itemsCount, setItemsCount] = useState()
    const [totalAmountInCart, setTotalAmountInCart] = useState(0)

    const cartData = [
        {
            name: "Iphone 14 pro max  ",
            desription: 'test',
            price: 999,
            count: 40
        }, {
            name: "Iphone 14 pro max",
            desription: 'test',
            price: 657,
            count: 45
        }, {
            name: "Iphone 14 pro max",
            desription: 'test',
            price: 646,
            count: 50
        }
    ]

    return (
        <div className='w-full h-screen bg-[#0000004b] top-0 fixed z-10 flex justify-center items-center'>
            <div className='fixed bg-white right-0 w-[25%] h-screen  shadow-sm '>
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
                {/* {item length} */}
                <div className={
                    `${
                        styles.normalFlex
                    } p-4`
                }>

                    <IoBagHandleOutline size={25}/>
                    <h1 className='px-3 text-xl font-[600]'>
                        3 items</h1>
                </div>

                <div className='w-full'>
                    {
                    cartData && cartData.map((data, i) => {

                        return(< SingleCart data = {
                            data
                        }  totalAmountInCart={totalAmountInCart}
                        key = {
                            i
                        } />)

                    })
                } </div>
                <div className=' flex flex-grow justify-end flex-col items-center'>

                    {
                    totalAmountInCart > 0 ? <button className='w-[80%] bg-red-500 text-white mb-2 rounded-md h-[40px] text-[20px] font-[700]'>
                        checkout now {
                        totalAmountInCart > 0 ? {
                            totalAmountInCart
                        } : ''
                    }</button> : ''
                } </div>

            </div>

        </div>
    </div>
    )
}
function SingleCart({data}) {
    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;
    return (
        <div className='w-full  border border-[#0000001b] py-6 flex items-center gap-[5px] pr-3'>
            <div className='flex flex-col gap-1 px-4 py-4 '>
                <button className=' bg-red-500 rounded-full  text-center flex items-center justify-center text-white'>
                    <HiPlus size={25}
                        onClick={
                            () =>  value < data.count ? setValue(value + 1) : value
                               

                            
                        }/>
                </button>
            <p className='text-center w-full'>
                {value}</p>
            <button className=' bg-gray-300 rounded-full text-center flex items-center justify-center text-gray-900'>
                <HiOutlineMinus size={25}
                    onClick={
                        () => value > 1 ? setValue(value - 1) : value
                    }/>
            </button>
        </div>
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-womens-shoes-b19lqD.png" className='h-[90%] w-[100px]'/>
        <div className='h-[100%] flex items-start flex-col w-full'>
            <h1>{
                data.name
            }</h1>
            <p className='text-gray-500 text-[12px] '>
                $ {
                data.price
            }
                *{value}</p>
            <p className='text-red-600 font-[700]'>
                US$ {
                data.price * value
            }
                $</p>
        </div>
        <div>
            <AiOutlineHeart size={30}/>
        </div>

    </div>
    )

}

export default Cart
