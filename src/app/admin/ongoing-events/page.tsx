"use client"
import { Button } from '@/components/ui/button';
import fallbackImage from '@/assets/calender.png'
import getEvents from '@/lib/getEvents';
import { CalendarDays, MapPin } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import deleteEvent from '@/lib/deleteEvent';
import { toast } from 'sonner';
import { IGetEvent } from '@/types/eventType';
import Link from 'next/link';

const Page = () => {
      const [events,setEvents] = useState<IGetEvent[]>([])
       useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await getEvents();
      const now = new Date();
      const past = allEvents.filter((event: IGetEvent) => new Date(event.startDate).getTime()< now.getTime() && new Date(event.endDate).getTime()>now.getTime());
      setEvents(past);
    };
    fetchEvents();
  }, []);

    const handleDelete = async (id: string) => {
  const res = await deleteEvent(id);
  console.log(res);
  if (res.deletedCount === 1 || res.success) {
    toast('Event deleted')
    setEvents(prev => prev.filter(e => e._id !== id));
  } else {
    toast('Failed to delete.');
  }
};

  return (
    <div className='mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          !events.length?<div className='text-5xl w-full'>No up coming event now. stay connected...</div>:  events?.map((event:IGetEvent,idx:number)=>{
                 const eventStart = new Date(event.startDate);
                const eventEnd = new Date(event.endDate);
                console.log('console',eventStart.toLocaleTimeString())

                const dateOption:Intl.DateTimeFormatOptions={
                    day:'numeric',
                    month:'long',
                    year:'numeric'
                }
                const timeOption:Intl.DateTimeFormatOptions={
                    hour:'numeric',
                    minute:'numeric',
                    hour12:true
                }
                const startDate = eventStart.toLocaleDateString(undefined,dateOption);
                const endDate = eventStart.toLocaleDateString(undefined,dateOption);
                const startTime = eventStart.toLocaleTimeString(undefined,timeOption);
                const endTime = eventEnd.toLocaleTimeString(undefined,timeOption);
              return(
                    <div key={idx}>
                        <div
                className='bg-gray-200 border border-gray-300 shadow-lg max-w-xs  rounded-md'
                >
                    <div>
                        <Image src={event.image??fallbackImage} alt='event image' width={340} height={100} className='rounded-md'/>
                    </div>
                    <div className='px-2 py-2 hover:bg-blue-700'>
<div className=' hover:text-cyan-200 py-2 px-3'>
                        <h1 className='text-xl'>
                            {event.title}
                        </h1>
                        <h2 className='text-lg'>{event.description.slice(0,100)}...</h2>
                        <div className='text-orange-600 mt-2 text-sm'>
                            <div className='flex'>
                          <MapPin />  <span className='mx-2'>venue:{event.location}</span>
                        </div>
                        <div className=' flex mt-2 text-sm'>
                            <CalendarDays size={16}/><span className='mx-2'>{startDate}, {startTime} - {endDate}, {endTime}</span>
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
<Link href={`/admin/update-event/${event._id}`}>
<Button variant='outline' className=' hover:text-blue-700'>
                        Update Event
                    </Button>
</Link>
<Button onClick={()=>handleDelete(event._id)} variant='outline' className=' hover:text-blue-700'>
                        Delete Event
                    </Button>
                    </div>
                    </div>
                </div>
                    </div>
            )})
        }
    </div>
  )
}

export default Page