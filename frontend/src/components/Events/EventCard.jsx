import React from 'react'
import styles from '../../styles/styles'
import CountDown from './countDown/CountDown.jsx'

function EventCard({active}) {
    return (
        <div>
            <div className={`lg:flex p-2 bg-white shadow-sm ${active?'unset':'mb-3' }rounded-lg w-full block `}>
                <div className='w-full lg:w-[50%]'>
                    <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="iphone"/>
                </div>

                <div className='w-full lg:w-[50%] flex justify-center flex-col'>
                    <h1 className={
                        styles.productTitle
                    }>Iphone 14 pro max 8/256gb</h1>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sed ducimus odio velit mollitia dicta animi est officiis non vitae, esse nemo incidunt fuga doloremque commodi, voluptatum iure explicabo autem?
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste ut tenetur nulla ipsum, nesciunt quae optio. Quisquam saepe minus, architecto facere animi dolorum sint, autem, vitae reiciendis ipsam inventore.
                    <div className='flex py-2 justify-between'>
                        <div className='flex gap-2'>
                            <h1 className={
                                styles.price
                            }>1099$</h1>
                            <h1 className={
                                styles.productDiscountPrice
                            }>999$</h1>
                        </div>
                        <h1 className='mr-2 text-[#44a55e] font-[400]'>120 sold</h1>


                    </div>
                    <CountDown/>
                </div>

            </div>
        </div>
    )
}

export default EventCard
