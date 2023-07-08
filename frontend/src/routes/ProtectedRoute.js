import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

const ProtectedRoutes=({isAuthenticated,children})=>{
    const {loading}=useSelector((state)=>state.user)
    const navigate=useNavigate()
if(!loading&&!isAuthenticated){
    return navigate('/login')
}
return children
}
export default ProtectedRoutes