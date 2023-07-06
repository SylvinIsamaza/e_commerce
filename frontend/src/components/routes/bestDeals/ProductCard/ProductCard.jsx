import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import styles from '../../../../styles/styles';
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import ProductDetailsCard from './productDetais/ProductDetailsCard'
import { server } from '../../../../server';


function ProductCard({data}) {
    const [open, setOpen] = useState(false)
    const [click,setCLick]=useState(false)
    const d = data.name;
    const product_name = d.replace(/\s+/g, "-")
    return (
        <div className='bg-white rounded-lg shadow-sm cursor-pointer h-[370px] p-3 relative z-1 '>
            <div className="flex justify-end"></div>
            <Link to={`/products/${product_name}`}>
                <img src={`${server}/${data.images[0]}`
                      
                    }
                    alt=""
                    className='w-full object-contain h-[170px]'/>
            
            </Link>
            <Link to='/' >
                <h5  className={styles.shop_name} >{data.shop.name}</h5>
            </Link>

            <Link to={`products/${product_name}`}>
            <h5 className='pb-5 font-[500]'>
                {data.name.length>40?data.name.slice(0,40)+'...':data.name}</h5>
            
            </Link>
            <div className="flex">
                <AiFillStar className='pointer-cursor mr-2' size={20} color='#F6BA00'/>
                <AiFillStar className='pointer-cursor mr-2' size={20} color='#F6BA00'/>
                <AiFillStar className='pointer-cursor mr-2' size={20} color='#F6BA00'/>
                <AiFillStar className='pointer-cursor mr-2' size={20} color='#F6BA00'/>
                <AiFillStar className='pointer-cursor mr-2' size={20} color='#F6BA00'/>
               
            </div>
            <div className="flex py-2 items-center justify-between">
                <div className="flex">
                    <h5 className={styles.productDiscountPrice}>{data.originalPrice===0 ?'':data.discountPrice}$</h5>
                    <h4 className={styles.price}>{data.originalPrice?data.originalPrice+'$':''}</h4>
                </div>
                <span className='text-[#63d284] text-[16px] font-[400]'>
                    {data.soldOut} sold
                </span>
            </div>
            {/* side oprtions like add to wishlist */}
            <div>
            {click?(
                <AiFillHeart
                className='absolute top-5 right-2 '
                size={22}
                title='Remove from wishlist'
                color={click?"red":'#333'}
                onClick={()=>{setCLick(!click)}}/>
            ):(
                <AiOutlineHeart
                className='absolute top-5 right-2 '
                size={22}
                title='Add to wishlist'
                color={click?"red":'#333'}
                onClick={()=>{setCLick(!click)}}/>
            )
            }
            <AiOutlineEye
             className='absolute top-14 right-2 '
             size={22}
             onClick={()=>{setOpen(!open)}}
            />
            <AiOutlineShoppingCart
            className='absolute top-24 right-2'
            color='#444'
            size={22}
            />
            {
                open?(<ProductDetailsCard data={data} setOpen={setOpen} open={open}/> ):''
            }
            </div>
         

        </div>
    )
}

export default ProductCard
