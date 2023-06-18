import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/styles';


function DropDown({categoriesData,setDropdown}) {
    const navigate=useNavigate();
    const handleSubmit=(i)=>{
        navigate(`/products?category=${i.title}`)
        setDropdown(false);
        window.location.reload()
    }
  return (
    <div className='bg-[#fff] absolute w-[270px] pb-4 shadow-sm z-30 rounded-b-md'>
        {
            categoriesData&&categoriesData.map((category,index)=>(
                <div key={index} className={`${styles.normalFlex}`} onClick={()=>handleSubmit(category)}>
            <img src={category.image_Url} style={{
                width:'40px',
                height:'40px',
                objectFit:'contain',
                marginLeft:'10px',
                userSelect:'none'

            }} alt=''/>
<h3 className='cursor-pointer m-3 select-none'>{category.title}</h3>
                </div>
            ))
        }

    </div>
  )
}

export default DropDown