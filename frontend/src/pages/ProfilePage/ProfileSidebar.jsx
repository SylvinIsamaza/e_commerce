import React from 'react'
import { profileSIdebarItems } from './ProfileData';

function ProfileSidebar({active,setActive}) {
  return (
    <div className='w-full bg-white rounded-[10px] p-4 pt-8 '  >
        {profileSIdebarItems&&profileSIdebarItems.map((item,index)=>
          <div className='flex items-center cursor-pointer w-full mb-8 ' onClick={()=>{
            setActive(index+1)
        }}>
        <span className={`${active==index+1?"text-green-500":''}`}>{item.icon}</span>
        <h1 className={`${active==index+1?"text-green-500":''} pl-3 hidden 800px:block`}>{item.name}</h1>
        
        </div>
        )
    }
    </div>
  )
}

export default ProfileSidebar