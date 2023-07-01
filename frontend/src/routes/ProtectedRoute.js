import { Navigate } from "react-router-dom"

const ProtectedRoutes=({isAuthenticated,children})=>{
if(!isAuthenticated){
    return <Navigate to={'/login'}/>
}
return children
}
export default ProtectedRoutes