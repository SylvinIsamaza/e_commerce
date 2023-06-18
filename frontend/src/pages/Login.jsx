import React, { useEffect } from 'react'
import Login from '../components/Login.jsx';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
function LoginPage() {
  const {isAuthenticated}=useSelector((state)=>state.user)
  const navigate=useNavigate()
  useEffect(()=>{

    if(isAuthenticated){
      navigate('/')
    }
    
  },[isAuthenticated])

  return (

          <Login/>
 

  )
}

export default LoginPage