import React, { useEffect } from 'react'
import styles from '../../styles/styles'
import { productData } from '../../static/data'
import ProductCard from '../routes/bestDeals/ProductCard/ProductCard'
import { useSelector } from 'react-redux'
import { store } from '../../redux/store'
import { getAllProducts } from '../../redux/action/product'

function FeaturedProduct() {
  const {product}=useSelector((state)=>state.products)

  return (
    <div className='flex'>
        <div className={styles.section}>
        <div className={styles.heading}> Featured Product</div>
        <div className=' grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]'>
        {product&&product.map((data,index)=>(
   <ProductCard data={data} key={index}/>
))}
        </div>
        </div>
       
    </div>
  )
}

export default FeaturedProduct