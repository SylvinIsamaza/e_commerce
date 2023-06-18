import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { productData } from '../static/data'
import styles from '../styles/styles'
import ProductCard from '../components/routes/bestDeals/ProductCard/ProductCard'
import { useSelector } from 'react-redux'

function BestSellingPage() {
    const [data,setData]=useState([])
    const {user}=useSelector((state)=>state.user)
    useEffect(()=>{
        const d=productData.sort((a,b)=>b.total_sell-a.total_sell)
        setData(d)
    },[])
     
  return (
<>
        <Header activeHeading={2} user={user}/>
        
            <h1 className='w-full text-center text-gray-700 text-[30px] font-[700] font-[Poppins] px-3'>Best selling</h1>
      
        <div className={`${styles.section} `}>
            <div className='grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[15px] xl:grid-cols-5 xl:gap-[25px] mt-3'> 
            {data&&data.map((product,index)=><ProductCard data={product} key={index}/>)}
            </div>
        
    </div>
    </>
  )
}

export default BestSellingPage