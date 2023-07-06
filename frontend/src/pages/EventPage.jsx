import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import EventCard from '../components/Events/EventCard'
import { useSelector } from 'react-redux'
import { store } from '../redux/store'
import { getEvents } from '../redux/action/event'


function EventPage() {
  const {user}=useSelector((state)=>state.user)
  const {event}=useSelector((state)=>state.event)
  const [data,setData]=useState([])
  useEffect(()=>{
    async function fetch(){
      await store.dispatch(getEvents())
      const d=event&&[...event].sort((a,b)=>b.soldOut-a.soldOut)
    setData(data)
    console.log(d)
    }
    fetch()
    
    
   
  },[])
console.log(data)
  return (
    <div>
<Header activeHeading={4} user={user}/>
{data.map((data,i)=>{
  <div>
  <EventCard active={true} data={data}/>
<EventCard/>
  </div>
})}


    </div>
  )
}

export default EventPage