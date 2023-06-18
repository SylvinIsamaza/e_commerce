import React from 'react'
import styles from '../../styles/styles'
import { productData } from '../../static/data'
import ProductCard from '../routes/bestDeals/ProductCard/ProductCard'

function FeaturedProduct() {
  return (
    <div className='flex'>
        <div className={styles.section}>
        <div className={styles.heading}> Featured Product</div>
        <div className=' grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]'>
        {productData&&productData.map((data,index)=>(
   <ProductCard data={data} key={index}/>
))}
        </div>
        </div>
       
    </div>
  )
}

export default FeaturedProduct