import React from 'react'
import styles from '../../../styles/styles'
import { AiOutlineDelete } from 'react-icons/ai'

function PaymentMethod() {
    return (
        <div className='w-full py-3 px-5'>
            <div className='flex items-center w-full justify-between'>
                <h1 className='text-[25px] font-[600] text-[#000000f4] pb-2 '>
                    Payment Method
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
<img src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg" alt="" />
<h1 className='pl-5 font-[600]'>Isamaza</h1>
              </div>
              <div className=' pl-8 flex items-center'>
<h6 className='pl-6'>12356 **** **** ****</h6>
<h1 className='pl-5'>08/2022</h1>
              </div>
              <div className='min-w-[10%] flex items-center pl-8'>
                <AiOutlineDelete size={23} className='cursor-pointer'/>
              </div>

</div>
        </div>
    )
}

export default PaymentMethod
