import React, {useState} from 'react'
import styles from '../../styles/styles'
import {categoriesData} from '../../static/data';
import {
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineMessage,
    AiOutlineShopping,
    AiOutlineShoppingCart
} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';

function ProductDetails({data}) {
    const [count, setCount] = useState(1)
    const [click, setClick] = useState(false)
    const navigate = useNavigate()
    function incrementCount() {
        setCount(count + 1)
    }
    function decrementCount(value) {
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(count)
        }

    }
    const handleMessageSubmit = () => {
        navigate('/inbox?conversation=435465763874')
    }

    const [select, setSelect] = useState(0)
    console.log(data)
    return (
        <div className='bg-white w-full'>
            <div className={
                `${
                    styles.section
                } w-[90%] 800px:w-[80%]`
            }>
                <div className='w-full py-5  '>
                    <div className='block w-full 800px:flex bg-white rounded-lg px-5 py-5 overflow-auto'>
                        <div className='w-full 800px:w-[50%] overflow-auto'>
                            <img src={
                                    data && data.image_Url
                                    [select].url
                                }
                                alt=""
                                className='w-[80%]'/>
                            <div className='flex sm:w-full'>
                                <div className={
                                        `${
                                            select === 0 ? "border" : ''
                                        } border-gray-300`
                                    }
                                    onClick={
                                        () => setSelect(0)
                                }>
                                    <img src={
                                            data?.image_Url
                                            [0].url
                                        }
                                        alt=""
                                        className='max-h-[200px]'/>

                                </div>
                                <div className={
                                        `${
                                            select === 1 ? "border" : ''
                                        } border-gray-300`
                                    }
                                    onClick={
                                        () => setSelect(1)
                                }>
                                    <img src={
                                             data?.image_Url
                                            [1].url
                                        }
                                        alt=""
                                        className='max-h-[200px]'/>

                                </div>

                            </div>


                        </div>
                        <div className='w-full 800px:w-[50%] '>
                            <h1 className={
                                `${
                                    styles.productTitle
                                }`
                            }>
                                {
                                data.name
                            }</h1>
                            <h1>{
                                data.description
                            }</h1>
                            <div className='flex pt-3'>
                                <h1 className={
                                    `${
                                        styles.productDiscountPrice
                                    }`
                                }>
                                    {
                                    data.discount_price
                                }
                                    $</h1>
                                {
                                data.price ? <h1 className={
                                    `${
                                        styles.price
                                    }`
                                }>
                                    {
                                    data.price
                                }
                                    $</h1> : ''
                            } </div>
                            <div className="flex py-5 justify-between w-full ">
                                <div className='flex'>
                                    <button className='px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-500 flex items-center justify-center text-white rounded-tl-md rounded-bl-md'
                                        onClick={decrementCount}>-</button>
                                    <span className='text-center font-[500] py-2 px-4 bg-gray-100 text-gray-800'>
                                        {count}</span>
                                    <button className='px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-500 flex items-center justify-center text-white rounded-tr-md rounded-br-md'
                                        onClick={incrementCount}>+</button>

                                </div>
                                {
                                click ? (
                                    <AiFillHeart size={30}/>
                                ) : (
                                    <AiOutlineHeart size={30}/>
                                )
                            } </div>
                            <div className={
                                `${
                                    styles.button
                                } text-center flex`
                            }>
                                <span className='text-white font-[700] '>
                                    Add to cart
                                </span>
                                <AiOutlineShoppingCart color='white'
                                    size={20}
                                    className='ml-2'/>
                            </div>
                            <div className='flex items-center py-4  '>
                                <div>
                                    <img src={
                                            data && data.shop.shop_avatar.url
                                        }
                                        alt=""
                                        className='rounded-full w-[50px] h-[50px]'/>
                                </div>
                                <div className='ml-2'>
                                    <h1 className={
                                        `${
                                            styles.shop_name
                                        }`
                                    }>
                                        {
                                        data && data.shop.name
                                    } </h1>
                                    <p>({
                                        data && data.rating
                                    }) Ratings</p>
                                </div>
                                <div className='text-white font-[600] w-[150px] bg-blue-600 h-[50px] my-3 flex items-center justify-center rounded-md cursor-pointer mx-4'
                                    onClick={handleMessageSubmit}>
                                    Send message
                                    <AiOutlineMessage className='ml-1'
                                        size={20}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <ProductDetailsInfo data={data}/>
                <br/>
                <br/>
            </div>
        </div>
    )
}
const ProductDetailsInfo = ({data}) => {
    const [active, setActive] = useState(1);
    return (
        <div className=' bg-[#f5f6fb] px-10 py-4 rounded '>
            <div className='w-full flex items-center justify-between border-b border-gray-300 py-2 '>
                <div className='relative'
                    onClick={
                        () => setActive(1)
                }>
                    <h5 className='cursor-pointer text-[18px] text-gray-800 font-[600]'>Product details</h5>
                    {
                    active == 1 ? <div className={
                        styles.active_indicator
                    }></div> : ""
                } </div>
                <div className='relative'
                    onClick={
                        () => setActive(2)
                }>
                    <h5 className='cursor-pointer text-[18px] text-gray-800 font-[600]'>Product Review</h5>
                    {
                    active == 2 ? <div className={
                        styles.active_indicator
                    }></div> : ""
                } </div>
                <div className='relative'
                    onClick={
                        () => setActive(3)
                }>
                    <h5 className='cursor-pointer text-[18px] text-gray-800 font-[600]'>Seller informations</h5>
                    {
                    active == 3 ? <div className={
                        styles.active_indicator
                    }></div> : ""
                } </div>
            </div>
            {
            active === 1 ? (
                <>
                <p className='text-[18px] leading-5 whitespace-pre-line py-2 mx-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis

                </p>
                                <p className='text-[18px] leading-5 whitespace-pre-line py-2 mx-3'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis iure.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptates sint cupiditate atque quis quidem omnis delectus fugiat accusamus modi qui nostrum nam ducimus eum blanditiis, labore adipisci perspiciatis
            
                            </p>
                            </>

            ) : ''
        } 
        
        {
            active===2?(
                <div className='flex justify-center items-center py-5'>
                  No reviews yet
                </div>
            ):""
        }
        {
            active===3?(
             <div className='block 800px:flex justify-between  mt-4 800px:mt-0'>

                <div className='w-full 800px:w-[50%]'>
                <div className='flex items-center py-4 w-full 800px:w-[50%] '>
                                <div>
                                    <img src={
                                            data && data.shop.shop_avatar.url
                                        }
                                        alt=""
                                        className='rounded-full w-[50px] h-[50px]'/>
                                </div>
                                <div className='ml-2'>
                                    <h1 className={
                                        `${
                                            styles.shop_name
                                        }`
                                    }>
                                        {
                                        data && data.shop.name
                                    } </h1>
                                    <p>({
                                        data && data.rating
                                    }) Ratings</p>
                                </div>

                           
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita architecto odio dicta laborum cupiditate? Aut dolorem maxime sit nemo? Quae molestias aut saepe eum fugiat numquam illum, tempore sapiente quos!</p>
                </div>
                <div className='flex justify-end py-2'>
<div>
    <h1 className='font-[600] py-1'>Joined on  <span className='font-[500]'>17 Jun 20232</span></h1>
    <h1 className='font-[600] py-1'>Total products  <span className='font-[500]'>4534</span></h1>
    <h1 className='font-[600] py-1'>Total reviews  <span className='font-[500]'>8000</span></h1>
    <div className={`${styles.button} text-white`}>Visit shop</div>
</div>

             </div>
             </div>
            ):''
        }
        </div>
    )

}

export default ProductDetails
