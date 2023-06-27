import React, { useEffect } from 'react'
import ShopCreate from '../ShopCreation/ShopCreate'
import { useNavigate } from 'react-router-dom'
function ShopCreation({isSeller}) {
  const navigate=useNavigate()
  useEffect(()=>{
    if(isSeller){
      navigate('/')
    }
  },[])
  return (
   <ShopCreate/>
  )
}

export default ShopCreation