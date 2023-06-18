import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import styles from '../../styles/styles'
import ProfileContent from './ProfileContent.jsx'
import ProfileSidebar from './ProfileSidebar.jsx'
import { useSelector } from 'react-redux'
function Profile() {
    const [active,setActive]=useState(1)
    const {user}=useSelector((state)=>state.user)

  return (
    <div>
        <Header user={user}/>
        <div className={`${styles.section} flex py-10 bg-[#f5f5f5]`}>
        <div className=' 800px:w-[265px] w-[50px] mt-[18%] 800px:mt-0  '>
            <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} setActive={setActive} user={user}/>
        </div>
    </div>
  )
}

export default Profile