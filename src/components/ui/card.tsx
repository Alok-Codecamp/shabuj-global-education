import React from 'react'
import fallbackImage from '@/assets/calender.png'
import Link from 'next/link';
import { CalendarDays, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Button } from './button';
import { IGetEvent } from '@/types/eventType';
const Card = ({ event }: { event: IGetEvent }) => {
    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);


    const dateOption: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }
    const timeOption: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }
    const startDate = eventStart.toLocaleDateString(undefined, dateOption);
    const endDate = eventEnd.toLocaleDateString(undefined, dateOption);
    const startTime = eventStart.toLocaleTimeString(undefined, timeOption);
    const endTime = eventEnd.toLocaleTimeString(undefined, timeOption);
    return (
        <div
            className='bg-gray-200 border border-gray-300 shadow-lg max-w-xs  rounded-md'
        >
            <div>
                <Image src={event.image ?? fallbackImage} alt='event image' width={340} height={100} className='rounded-md' />
            </div>
            <div className='px-2 py-2 hover:bg-blue-700'>
                <div className=' hover:text-cyan-200 py-2 px-3'>
                    <h1 className='text-xl'>
                        {event.title}
                    </h1>
                    <h2 className='text-lg'>{event.description.slice(0, 100)}...</h2>
                    <div className='text-orange-600 mt-2 text-sm'>
                        <div className='flex'>
                            <MapPin />  <span className='mx-2'>venue:{event.location}</span>
                        </div>
                        <div className=' flex mt-2 text-sm'>
                            <CalendarDays size={16} /><span className='mx-2'>{startDate}, {startTime} - {endDate}, {endTime}</span>
                        </div>
                    </div>
                </div>
                <Button variant='outline' className='w-full hover:text-blue-700'>
                    <Link href={`/${event._id}`}>View Event Details</Link>
                </Button>
            </div>
        </div>
    )
}

export default Card