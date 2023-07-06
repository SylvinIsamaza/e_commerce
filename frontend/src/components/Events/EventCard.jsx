import React from 'react'
import styles from '../../styles/styles'
import CountDown from './countDown/CountDown.jsx'
import { server } from '../../server'

function EventCard({active,event}) {
    return (
        <div>
            <div className={`lg:flex p-2 bg-white shadow-sm ${active?'unset':'mb-3' } rounded-lg w-full block `}>
                <div className='w-full lg:w-[50%]'>
                    <img src={`${server}/${event.images[0]}`} />
                </div>

                <div className='w-full lg:w-[50%] flex justify-center flex-col'>
                    <h1 className={
                        styles.productTitle
                    }>{event.name}</h1>
{event.description}
                    <div className='flex py-2 justify-between'>
                        <div className='flex gap-2'>

                            <h1 className={
                                styles.productDiscountPrice
                            }>{event.discountPrice}$</h1>
                                                        <h1 className={
                                styles.price
                            }>{event.originalPrice}$</h1>
                        </div>
                        <h1 className='mr-2 text-[#44a55e] font-[400]'>{event.soldOut} sold</h1>


                    </div>
                    <CountDown start={event.startDate} end={event.finishDate}/>
                </div>

            </div>
        </div>
    )
}

export default EventCard
