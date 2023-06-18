import React from 'react'
import { profileSIdebarItems } from './ProfileData'

function ProfileContent({active,setActive,user}) {
  return (
    <div className='w-full '>
{/* profile */}
{profileSIdebarItems&&profileSIdebarItems.map((item,index)=>{
//  index===active-1?item.element:''
if(index==active-1){
  return item.element
}

})}

    </div>
  )
}

export default ProfileContent