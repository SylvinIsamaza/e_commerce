import React from 'react'
import styles from '../../../styles/styles'
import { brandingData, categoriesData } from '../../../static/data'
import { useNavigate } from 'react-router-dom';

function Categories() {
  console.log(brandingData)
  const navigate=useNavigate()
  return (
    <>
    <div className={`${styles.section}  lg:block`}>
      <div className="branding my-12 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 justify-between w-full shadow-sm bg-white rounded-sm">

      {/* </div> */}
        {brandingData&&brandingData.map((data,index)=>(
          <div className="flex item-start mx-12 p-5 " key={index}>
           {data.icon}
         <div className="px-3">
         
          <h3 className="font-bold text-sm md:text-base">
           {data.title}
          </h3>
          <p className='text-xs md:text-sm'>{data.Description}</p>

         </div>
         </div>
        ))}
      </div>


    </div>
    <div className={`${styles.section}  mb-3 rounded-lg  `}>
<div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px] bg-white  px-6 rounded-md">
  {categoriesData&&categoriesData.map((item)=>{

    return (
      <div className="w-full flex items-center justify-between cursor-pointer overflow-hidden" onClick={()=>{
       
          navigate( `/products?category=${item.title}`)
          
      }}>
        <h5 className='text-[18px] leading-[1.3]'>{item.title}</h5>
        <img src={item.image_Url} alt="" className='w-[120px]' />
      </div>
    )
  })}
</div>

    </div>
    </>
  )
}

export default Categories