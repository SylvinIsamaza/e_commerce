import React from 'react'
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import { CgProfile } from 'react-icons/cg'
import styles from '../../styles/styles'
import { backendUrl } from '../../server'
import { IoIosArrowForward } from 'react-icons/io'
import { useSelector } from 'react-redux'

function MobileHeader({setOpen,handleSearchChange,searchData,searchTerm,activeHeading,user,setOpenWishlist}) {
    const {wishlist}=useSelector((state)=>state.wishlist)
  return (
    <div className='w-full fixed bg-[#0000004a]  z-40 h-screen 800px:hidden'>
<div className='bg-white h-full w-[60%] max-w-[300px] px-2 flex flex-col justify-start'>
    <div className='flex px-2 items-center justify-between pt-3'>
        <div className='relative  '>
        <AiOutlineHeart color='black' size={30} className='cursor-pointer ' onClick={()=>setOpenWishlist(true)}/> 
        <div className='bg-green-700 h-[15px] w-[15px] rounded-full absolute top-0 right-0 text-white flex items-center text-[12px] justify-center '>
            {wishlist&&wishlist.length}
        </div>
        </div>
        
        <RxCross1 color='black' size={20}  onClick={()=>{setOpen(false)}}/>

    </div>
    <div className='w-full relative my-8'>
                        <input type="text" placeholder='Search product ...'
                            onChange={handleSearchChange}
                            value={searchTerm}

                            className='h-[40px] w-full border-blue-500 border-[2px] rounded-md px-2'/>
                        <AiOutlineSearch size={30}
                            className='absolute top-1  right-1 cursor-pointer'></AiOutlineSearch>
                        <div className='w-full'>
                            {
                            searchData && searchData.length !== 0 ? (
                                <div className='absolute min-h[30vh] bg-slate-50 z-10 shadow-sm p-4'>
                                    {
                                    searchData.map((product, index) => {
                                        const productData = product.name
                                        const productName = productData.replace(/\s+/g, "-")
                                        return (
                                            <Link to={
                                                `/products/${productName}`
                                            }>
                                                <div className="flex w-full items-start py-3">
                                                    <img src={
                                                            product.image_Url[0]
                                                        }
                                                        alt=''
                                                        className='w-[40px] h-[40px] mr-[10px]'/>
                                                    <h1>{
                                                        product.name
                                                    }</h1>
                                                </div>
                                            </Link>
                                        )


                                    })
                                } </div>
                            ) : ''
                        } </div>
                    </div>
                    <Navbar active={activeHeading} user={user}/>
                    <div className={
                        `${
                            styles.button
                        } my-5 !rounded !w-[90%] max-w-[140px]`
                    }>
                        <Link to='/shop-creation'>
                            <h1 className='text-[#fff] items-center flex'>
                                Become seller
                                <IoIosArrowForward></IoIosArrowForward>
                            </h1>

                        </Link>
                    </div>
                    {
                        user ? <Link to='/profile'
                            className={
                                `800px:${
                                    styles.normalFlex
                                } relative mr-[15px] justify-center flex 800px:py-0  py-[10%]`
                        }><img src={
                                    `${backendUrl}${
                                        user && user.avatar
                                    }`
                                }
                                className='w-[45px] h-[45px] rounded-full'/></Link> : <Link to='/login'
                            className={
                                `800px:${
                                    styles.normalFlex
                                } relative mr-[15px] justify-center flex `
                        }><CgProfile color='rgba(0,0,0,0.83)'
                                size={30}/></Link>
                    }
</div>
    </div>
  )
}

export default MobileHeader