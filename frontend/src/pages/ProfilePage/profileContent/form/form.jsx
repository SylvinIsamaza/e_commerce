import React from 'react'

function Form({value1,value2,setValue2,setValue1,label1,label2,type1,type2}) {
  return (
    <div className=' 800px:flex block w-full  px-6'>
    <div className='flex 800px:w-[50%] w-full  mx-3 my-2'>
      <div className='block w-full'>
      <label htmlFor="name" className='font-[600] text-gray-500'>
            {label1}
          </label>
          <br />
          <input
          type={type1}
          value={value1}
          onChange={(e)=>setValue1(e.target.value)}
          className='w-full h-[40px] rounded px-3'/>
      </div>
      

        </div>
         <div className='flex 800px:w-[50%] w-full  mx-3 my-2'>
      <div className='block w-full'>
      <label htmlFor="name" className='font-[600] text-gray-500'>
           {label2}
          </label>
          <br />
          <input 
          type={type2}
          value={value2&&value2}
          onChange={(e)=>setValue2(e.target.value)}
          className='w-full h-[40px] rounded px-3'/>
      </div>
      

        </div>
    </div>
  )
}

export default Form