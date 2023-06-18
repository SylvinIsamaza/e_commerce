import React from 'react'
import styles from '../styles/styles'
import { navItems } from '../static/data'
import { Link } from 'react-router-dom'

function Navbar({active}) {
  return (
    <div className={`800px:${styles.normalFlex} 800px:px-0 px-3 flex-col 800px:flex-row 800px:items-center  `}>
        {navItems&&navItems.map((item,index)=> (
        <div className='flex sm:justify-start sm:items-start 800px:justify-evenly' key={index}>
       <Link to={item.url} className={`${active===index+1 ? 'text-[#17dd1f]':'800px:text-[#fff] text-[#000000]'} 800px:px-4 800px:py-0 py-2 cursor-pointer font-[600] items-start flex justify-start w-full`}>
{item.title}
        </Link>
        </div>))}
    </div>
  )
}

export default Navbar