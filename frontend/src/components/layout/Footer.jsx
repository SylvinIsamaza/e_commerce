import React from 'react'
import styles from '../../styles/styles';
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai';
import {footerProductLinks, footerSupportLinks, footercompanyLinks} from '../../static/data';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="flex flex-col">
            <div className='w-full bg-blue-700 py-6'>
                <div className={
                    `800px:flex justify-between ${
                        styles.section
                    } items-center block  `
                }>
                    <h1 className='text-[30px] font-[700] text-white'>
                        <span className='text-[#44ec55]  '>
                            Subscribe
                        </span>
                        us for get news
                        <br/>
                        events and offer
                    </h1>
                    <div className='block 800px:flex'>
                        <input type="email" placeholder=' Enter your email ...' className='md:w-[300px] h-[40px] rounded-sm px-3 sm:w-[200px]'/>
                        <button type='submit' className='text-[#fff] bg-[#4ca75e] px-5 rounded-sm ml-4 sm:mt-2'>
                            Submit</button>
                    </div>
                </div>

            </div>
            <div className=' bg-[#000]'>
                            <div className={` ${styles.section} grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:py-14 sm:py-8   items-center justify-center w-full px-10 `}>
                <div>
                    <div>
                        <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="logo" 
                            style={
                                {filter: 'brightness(0) invert(1)'}
                            }/>
                        <p className=' text-[#fff] mt-[10px]'>The home and elements needed
                            <br/>
                            to create beautiful product</p>
                    </div>
                    <div className="flex py-4">
                        <AiFillFacebook className='ml-[15px] cursor-pointer' color='#fff'
                            size={30}/>
                        <AiOutlineTwitter className='ml-[15px] cursor-pointer' color='#fff'
                            size={30}/>
                        <AiFillInstagram className='ml-[15px] cursor-pointer' color='#fff'
                            size={30}/>
                        <AiFillYoutube className='ml-[15px] cursor-pointer' color='#fff'
                            size={30}/>

                    </div>

                </div>
                <div>
                    <ul className='flex sm:items-start items-center flex-col'>
                        <h1 className='text-white text-[20px] mb-2'>Company</h1>
                        {
                        footerProductLinks && footerProductLinks.map((footer,i) => {

                            return (
                                <Link to={
                                        footer.link
                                    }
                                    className='mb-1' key={i}>
                                    <p style={
                                        {color: '#fff'}
                                    }>
                                        {
                                        footer.name
                                    }</p>
                                </Link>
                            )
                        })
                    } </ul>
                </div>
                <div>
                    <ul className='flex sm:block sm:items-start items-center flex-col'>
                        <h1 className='text-white text-[20px] mb-2'>Shop</h1>
                        {
                        footercompanyLinks && footercompanyLinks.map((footer,i) => {

                            return (
                                <Link to={
                                        footer.link
                                    }
                                    className='mb-1' key={i}>
                                    <p style={
                                        {color: '#fff'}
                                    }>
                                        {
                                        footer.name
                                    }</p>
                                </Link>
                            )
                        })
                    } </ul>
                </div>
                <div>
                    <ul className='flex sm:items-start items-center flex-col'>
                        <h1 className='text-white text-[20px] mb-2 '>Support</h1>

                        {
                        footerSupportLinks && footerSupportLinks.map((footer,i) => {

                            return (
                                <Link to={
                                        footer.link
                                    }
                                    className='mb-1' key={i}>
                                    <p style={
                                        {color: '#fff'}
                                    }>
                                        {
                                        footer.name
                                    }</p>
                                </Link>
                            )
                        })
                    } </ul>
                </div>



            </div>
                            <div className={` ${styles.section} grid grid-cols-1 sm:grid-cols-2 py-3 lg:grid-cols-3 `}>
                    <span className='text-gray-500 font-[400]'>
                        &copy; ISAMAZA 2023</span>
                    <span className='text-gray-500'>Terms .Privacy-policy</span>
                  
                </div>
            </div>



        </div>

    )
}

export default Footer
