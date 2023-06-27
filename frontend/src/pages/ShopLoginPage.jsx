import React, { useEffect } from 'react'
import LoginShop from '../components/loginShop.jsx'
import { useNavigate } from 'react-router-dom'
function ShopLoginPage({isSeller}) {
  const navigate=useNavigate()
  useEffect(()=>{
    if(isSeller){
      navigate('/')
    }
  },[])
  return (
    <div><LoginShop/></div>
  )
}

export default ShopLoginPage