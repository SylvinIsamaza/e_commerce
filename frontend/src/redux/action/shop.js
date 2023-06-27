import react from 'react'
import { server } from '../../server'
import axios from 'axios'

export const loadSeller=()=>async(dispatch)=>{
    try {
        dispatch({type:'loadSellerStart'})
        await axios.get(`${server}/api/v2/shop/get_seller`)
        .then(response=>{
            dispatch({type:"loadSellerSuccess",payload:response.data})
        })
        .catch(error=>{
            dispatch({type:"loadSellerFailue",payload:error.data.message})
        })
    } catch (error) {
        dispatch({type:"loadSellerFailue",payload:error.message})
    }
}

