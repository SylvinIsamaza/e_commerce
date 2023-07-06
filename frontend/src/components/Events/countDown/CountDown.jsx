import React, { useEffect, useState } from 'react'

function CountDown({start,end}) {
    const [timeLeft,setTimeLeft]=useState(calculateTimeLeft());
  
    useEffect(()=>{
       const timer=setTimeout(()=>{
        setTimeLeft(calculateTimeLeft())
        },1000)
        return ()=> clearTimeout(timer)
    })
    function calculateTimeLeft(){
        
        const difference= new Date(end.slice(0,10))-new Date();
    
        const timeLeft={
            days:Math.floor((difference/(1000*60*60*24))),
            hours:Math.floor(((difference/(1000*60*60))%24)),
            minutes:Math.floor(((difference/(1000*60))%60)),
            seconds:Math.floor((difference/(1000)%60))
        }
        if(difference>0){
        return timeLeft
        }
   

   
    }
const timeComponent=Object.keys(timeLeft).map((interval,index)=>{
if(!timeLeft[interval]){
    return 0
}
return <span className=' text-[25px] text-[#475ad2]' key={index}>
    {timeLeft[interval]}{interval} {" "}
</span>
})
  return (
    <div className='w-full'>
     {timeComponent?(timeComponent):<span className='text-[red] text-[25px]'>Time is up</span>}
    </div>
  )
}

export default CountDown