import React from 'react'
import styles from '../../styles/styles'
import EventCard from '../Events/EventCard.jsx'

function Events() {
  return (
    <div>
        <div className={styles.section}>
            <div className={styles.heading}>
                <h1>Popular events</h1>
            </div>
            <div className="full-grid">
                <EventCard/>
            </div>
        </div>
    </div>
  )
}

export default Events