import React from 'react'
import styles from '../../styles/styles'

function Hero() {
    return (
        <div className={
                `relative min-h-[70vh] max-[800]:min-h-[80vh] w-full bg-no-repeat ${
                    styles.normalFlex
                }`
            }
            style={
                {background: "url('https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg')"}
        }>
            <div className={
                `${
                    styles.section
                } w-[90%] 800px:w-[60%]`
            }>
                <h1 className='text-[35px] leading-[1.2] 800px:text-[63px] text-[#3d3a3a] capitalize '>
                    Best collection for
                    <br/>
                    home decoration
                </h1>
                <p className='pt-5 font-[Poppins] text-[15px] font-[400]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum voluptatem reiciendis
                , aut maiores atque animi quidem nemo, explicabo eius
                 ad quasi, vitae harum suscipit debitis praesentium. Eveniet tempora rem obcaecati.</p>
                 <button className={`${styles.button} text-[#fff] font-[600]`}>Shop now </button>
            </div>

        </div>
    )
}

export default Hero
