import React, { useEffect, useState } from 'react'
import styles from '../../styles/styles'

import { productData } from '../../static/data';
import ProductCard from '../routes/bestDeals/ProductCard/ProductCard';

function SuggestedProduct({data}) {
    const [product,setProduct]=useState("");
    useEffect(()=>{
        const d=productData&&productData.filter((i)=>i.category===data.category);
        setProduct(d)
    },[data])
    console.log(product)
    return (

        <div> {
            data ? <div className={
                `${
                    styles.section
                } py-4`
            }>
                <h1 className={`${styles.heading} text-3xl font-[700] border-b mb-5`}>Related Products</h1>
                <div className="grid  sm:grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[25px]">
{product&&product.map((data,index)=>(
   <ProductCard data={data} key={index}/>
))}
            </div>
            </div>:''
        } </div>
    )
}

export default SuggestedProduct
