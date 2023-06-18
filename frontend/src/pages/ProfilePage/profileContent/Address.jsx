import React from 'react'
import styles from '../../../styles/styles'
import { AiOutlineDelete } from 'react-icons/ai'

function Address() {
  return (
    <div className='w-full py-3 px-5'>
    <div className='flex items-center w-full justify-between'>
        <h1 className='text-[25px] font-[600] text-[#000000f4] pb-2 '>
            Addresses
        </h1>
        <div className={
            `${
                styles.button
            } text-white !rounded-md`
        }>
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
  )
}

export default Address