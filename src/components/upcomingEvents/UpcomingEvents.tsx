import getEvents from '@/lib/getEvents'
import { IEvent } from '@/lib/postEvent';
import React from 'react'
import Card from '../ui/card';
const UpcomingEvents = async() => {
    const events = await getEvents()

     const now = new Date();
       const upcomingEvent = events.filter((event:IEvent)=>{ 
           const start = new Date(event.startDate);
         return start.getTime()>= now.getTime()
       })
    
    console.log(now.getTime());
  return (
    <div className='mx-12'>
        {
            upcomingEvent?.map((event:IEvent,idx:number)=>(
                <div key={idx}>
                    <Card event={event}/>
                </div>
            ))
        }
    </div>
  )
}

export default UpcomingEvents