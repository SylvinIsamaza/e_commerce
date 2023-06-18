import React from 'react'
import Header from '../components/Header'
import EventCard from '../components/Events/EventCard'
import { useSelector } from 'react-redux'

function EventPage() {
  const {user}=useSelector((state)=>state.user)
  return (
    <div>
<Header activeHeading={4} user={user}/>
<EventCard active={true}/>
<EventCard/>

    </div>
  )
}

export default EventPage