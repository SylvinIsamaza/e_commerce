import { Navigate } from "react-router-dom"
import ShopLogin from "./components/loginShop"
import { useSelector } from "react-redux"

const ShopProtectedRoute=({children})=>{
    const{isSeller,isLoading}=useSelector((state)=>state.seller)
    console.log(isSeller)
    if(isLoading===false){
        if(!isSeller){
            return <Navigate to='/' replace/>
        }
        return children
    }

}
export default ShopProtectedRoute