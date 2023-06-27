import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { server } from '../server';

function ShopActivationPage() {
    const {activationToken}=useParams()
    console.log(activationToken)
    const[error,setError]=useState(false)
    useEffect(()=>{
     
   if(activationToken){
    const activationEmail=()=>{
      try {
        const response=axios.post(`${server}/api/v2/shop/activation`,{activationToken:activationToken})
        .then(()=>{
         setError(false)
         return response.data.message
        })
        .catch(()=>{
          setError(true)
        })
        // console.log(response)
     
      
       
        
      } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
       
      }
  
    }
    activationEmail()
   }
    },[activationToken])
  return (
    <div className='flex justify-center items-center w-full h-screen '>
      {error?
    <p>your token expired</p>  :
    <p>Account successfully created</p>
    }
    </div>
  )
}

export default ShopActivationPage