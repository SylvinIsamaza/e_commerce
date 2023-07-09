import React, { useState } from 'react'
import styles from '../../../styles/styles'
import { AiOutlineDelete } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import {City, Country} from 'country-state-city'
import {store} from '../../../redux/store';
import { updateAddress } from '../../../redux/action/user'
import { useSelector } from "react-redux";
function Address() {
  const {user}=useSelector((state)=>state.user)
  const [open,setOpen]=useState(false)
  const [address1,setAddress1]=useState('');
  const [address2,setAddress2]=useState("")
  const [country,setCountry]=useState('');
  const[city,setCity]=useState("");
  const [addressType,setAddressType]=useState("");
  const [zipCode,selectZipCode]=useState("")
  const addressTypeData=[
    {
      name:"Default"
    },
    {
      name:"Home"
    },
    {
      name:"Office"
    },

  ]
  const handleSubmit=(e)=>{
    e.preventDefault();
    
store.dispatch(updateAddress({
  address1,
  address2,
  zipCode,
  addressType,
  city,
  country
}))

  }
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
    {user&&user.addressess.map((address)=>
    <div className='w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between my-2'>
    <div className='flex items-center'>

<h1 className='pl-5 font-[600]'>{address&&address.addressType}</h1>
    </div>
    <div className=' pl-8 flex items-center'>
<h6 className='pl-6'> {address&&address.address1} {address.address2}</h6>

    </div>
    <div className=' pl-8 flex items-center'>
<h6 className='pl-6'>{user.phoneNumber}</h6>

    </div>
    <div className='min-w-[10%] flex items-center pl-8'>
      <AiOutlineDelete size={23} className='cursor-pointer'/>
    </div>

</div>
  )}

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
  <form aria-aria-required onSubmit={handleSubmit}>
  <label htmlFor="country" className='mx-[5%]  text-[#000000ab] font-[600]'>
    Country
  </label>
  <br />
  <select name="country" id="country" className='w-[90%] h-[35px] rounded-md bg-transparent border border-gray-200 mx-[5%] my-2 ' value={country} onChange={(e)=>{setCountry(e.target.value)}}>
    <option value="" className='pb-2'>
      Choose your country
    </option>
    {Country.getAllCountries().map((item)=>(<option value={item.isoCode} key={item.isoCode} className='pb-2 '>{item.name}
      </option>))}
  </select>
  <label htmlFor="city" className='mx-[5%]  text-[#000000ab] font-[600]'>
    City
  </label>
  <br />
  <select name="city" id="city" className='w-[90%] h-[35px] rounded-md bg-transparent border border-gray-200 mx-[5%] my-2' value={city} onChange={(e)=>setCity(e.target.value)}>
    <option value="">
      Choose your City
    </option>
    {City.getCitiesOfCountry(country).map((item)=>(<option value={item.isoCode} key={item}>{item.name}</option>))}
  </select>
  <label htmlFor="address1" className='mx-[5%]  text-[#000000ab] font-[600]'>
    Address 1
  </label>
  <br />
  <input type='address' name="address1" id="address1" className='w-[90%] h-[35px] rounded-md bg-transparent border border-gray-200 mx-[5%] my-2 px-2' placeholder='Address 1'value={address1} onChange={(e)=>setAddress1(e.target.value)}/>
  <label htmlFor="address2" className='mx-[5%] text-[#000000ab] font-[600]'>
    Address 2
  </label>
  <br />
  <input  type='address' name="address2" id="address2" className='w-[90%] h-[35px] rounded-md bg-transparent border border-gray-200 mx-[5%] my-2 px-2 'placeholder='Address 2'value={address2} onChange={(e)=>setAddress2(e.target.value)}/>
  <label htmlFor="zipCode" className='mx-[5%] text-[#000000ab] font-[600]'>
    zip Code
  </label>
  <br />
  <input name="zipCode" id="zipCode" className='w-[90%] h-[35px] rounded-md bg-transparent border border-gray-200 mx-[5%] my-2 px-2'placeholder='zip code'value={zipCode} onChange={(e)=>selectZipCode(e.target.value)}/>
  <label htmlFor="addressType" className='mx-[5%] text-[#000000ab] font-[600]'>
    Address type
  </label>
  <select name="addressType" id="city" className='w-[90%] h-[35px] rounded-md bg-transparent border border-gray-200 mx-[5%] my-2'onChange={(e)=>setAddressType(e.target.value)}>
    <option value="">
      Choose address type
    </option>
    {addressTypeData.map((item)=>(<option value={item.name} key={item.name} className='pb-2 '>{item.name}
      </option>))}
  </select>
  <input type="submit" value="Add address" />
  </form>
 
</div>
</div>


</div>:''}
</>

  )
}

export default Address