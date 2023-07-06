import React, { useEffect, useState } from 'react'
import styles from '../../styles/styles'
import EventCard from '../Events/EventCard.jsx'
import { useSelector } from 'react-redux'

function Events() {
  const {event}=useSelector((state)=>state.event);
  console.log(event)
  const [data,setData]=useState(null)
  useEffect(()=>{
    const d=event&&[...event].sort((a,b)=>b.soldOut-a.soldOut)
   const popularEvents=d&&d.filter((_,index)=>index==0);
setData(popularEvents)
console.log('rendering')
  },[event])
  return (
    <div>
        <div className={styles.section}>
            <div className={styles.heading}>
                <h1>Popular events</h1>
            </div>
            <div className="full-grid">
              {data&&data.map((event,i)=>
                <EventCard event={event}/>

              )}
                
            </div>
        </div>
    </div>
  )
}

export default Events