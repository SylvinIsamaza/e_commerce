import React, { useEffect, useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import {useSelector} from 'react-redux'
import {backendUrl} from '../../../server'
import {AiOutlineCamera} from 'react-icons/ai'
import Form from './form/form'
import styles from '../../../styles/styles';


function ProfileComponents() {
    const {user} = useSelector((state) => state.user)
    
    const [name,setName]=useState(user&&user.name)
    const [email,setEmail]=useState(user&&user.email)
    const[phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
    
    
  
 const handleSubmit=(e)=>{
e.preventDefault()
 }

  
    return (
        <div className='flex items-center  w-full flex-col md:mt-0 mt-[20%]'>
            <div className='flex justify-center w-full'>
                <div className='relative'>
                    {
                    user ? <img src={
                            `${backendUrl}${
                                user && user.avatar
                            }`
                        }
                        className='md:w-[150px] md:h-[150px] rounded-full w-[90px] h-[90px]'/> : <CgProfile color='rgba(255,255,255,0.83)'
                        size={30}/>
                }
                    <label htmlFor='upload' className='absolute bottom-1 right-3 bg-[#E3E9EE] rounded-full p-1 cursor-pointer'>
                        <AiOutlineCamera 
                            size={20}/></label>
                            <input type="file" className='hidden' id='upload' />
                </div>
             

            </div>
            <form action="" className='w-full' aria-required={true} onSubmit={handleSubmit} >
<Form value1={user&&name} setValue1={user&&setName} value2={user&&email} setValue2={user&&setEmail} label1="Full name" label2="email" type1="text" type2='email'/>
<Form value1={phone} setValue1={setPhone} value2={password} setValue2={setPassword} label1="Phone Number" label2="Password" type1="text" type2='password'/>
<div className='w-full flex items-center justify-center py-4'>
<button type='submit' className={`${styles.button} !bg-blue-700 text-white hover:bg-blue-600`}>Update</button>
</div>

</form>


</div>
    )
}

export default ProfileComponents
