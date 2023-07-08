import React, { useState } from 'react'
import styles from '../../../styles/styles'
import { AiOutlineDelete } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

function Address() {
  const [open,setOpen]=useState(false)
  return (
    <>
        <div className='w-full py-3 px-5'>
    <div className='flex items-center w-full justify-between'>
        <h1 className='text-[25px] font-[600] text-[#000000f4] pb-2 '>
            Addresses
        </h1>
        <div className={
            `${
                styles.button
            } text-white !rounded-md`
        } onClick={()=>setOpen(!open)}>
            Add new
        </div>

    </div>
    <div className='w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between'>
      <div className='flex items-center'>

<h1 className='pl-5 font-[600]'>Default</h1>
      </div>
      <div className=' pl-8 flex items-center'>
<h6 className='pl-6'> k255 Kigali Rwanda</h6>

      </div>
      <div className=' pl-8 flex items-center'>
<h6 className='pl-6'>(+250) 769-6445</h6>

      </div>
      <div className='min-w-[10%] flex items-center pl-8'>
        <AiOutlineDelete size={23} className='cursor-pointer'/>
      </div>

</div>
</div>
{open?<div className='w-[100vw] bg-[#0000001b] h-screen top-0 fixed left-0 flex justify-center items-center'>
<div className="800px:w-[35%] 600px:w-[50%] w-[90%] bg-white rounded-md shadow-sm h-[89vh] overflow-y-scroll ">
<div className='flex w-full px-4 justify-end py-4'>
  <RxCross1 size={20} className='cursor-pointer'onClick={()=>setOpen(false)}/>
</div>
<h1 className='text-center text-[25px] font-[700] font-Poppins'>
  Add new Address
</h1>
<div className="w-full px-3 font-[500] font-Poppins text-[17px]">
  <label htmlFor="country" className='mx-[5%]  text-[#000000ab] font-[600]'>
    Country
  </label>
  <br />
  <select name="country" id="country" className='w-[90%] h-[35px] rounded-md bg-transparent border border-gray-200 mx-[5%] my-2'>
    <option value="">
      Choose your country
    </option>
  </select>
  <label htmlFor="city" className='mx-[5%]  text-[#000000ab] font-[600]'>
    City
  </label>
  <br />
  <select name="city" id="city" className='w-[90%] h-[35px] rounded-md bg-transparent border border-gray-200 mx-[5%] my-2'>
    <option value="">
      Choose your City
    </option>
  </select>
  <label htmlFor="address1" className='mx-[5%]  text-[#000000ab] font-[600]'>
    Address 1
  </label>
  <br />
  <input name="address1" id="address1" className='w-[90%] h-[35px] rounded-md bg-transparent border border-gray-200 mx-[5%] my-2'/>
  <label htmlFor="address2" className='mx-[5%] text-[#000000ab] font-[600]'>
    Address 2
  </label>
  <br />
  <input name="address2" id="address2" className='w-[90%] h-[35px] rounded-md bg-transparent border border-gray-200 mx-[5%] my-2'/>
  <label htmlFor="address2" className='mx-[5%] text-[#000000ab] font-[600]'>
    zip Code
  </label>
  <br />
  <input name="address2" id="address2" className='w-[90%] h-[35px] rounded-md bg-transparent border border-gray-200 mx-[5%] my-2'/>

  
</div>
</div>


</div>:''}
</>

  )
}

export default Address