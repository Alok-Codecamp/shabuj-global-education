import getEvents from '@/lib/getEvents'
import { IEvent } from '@/lib/postEvent';
import React from 'react'
import Card from '../ui/card';
import { IGetEvent } from '@/types/eventType';
const UpcomingEvents = async() => {
    const events = await getEvents()

     const now = new Date();
       const upcomingEvent = events.filter((event:IEvent)=>{ 
           const start = new Date(event.startDate);
         return start>= now;
       })

  return (
    <div className='mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            upcomingEvent?.map((event:IGetEvent,idx:number)=>(
                <div key={idx}>
                    <Card event={event}/>
                </div>
            ))
        }
    </div>
  )
}

export default UpcomingEvents