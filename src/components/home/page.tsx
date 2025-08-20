
import NavBar from '@/components/shared/NavBar'
import Image from 'next/image';
import React from 'react';
import artBoard from '@/assets/artboard.png';
import calender from '@/assets/calender.png';
import human from '@/assets/human.png';
import line from '@/assets/line.png'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CalendarDays, CircleCheck, MapPin } from 'lucide-react';
import UpcomingEvents from '../upcomingEvents/UpcomingEvents';
import PastEvents from '../pastEvents/PastEvents';
import getEvents from '@/lib/getEvents';
import { IGetEvent } from '@/types/eventType';
import fallbackImage from '@/assets/calender.png'
import Link from 'next/link';
const HomePage = async() => {
      const allEvents = await getEvents();
      const now = new Date();
      const allonGoing = allEvents?.filter((event: IGetEvent) => new Date(event?.startDate)< now && new Date(event?.endDate)>now);
      const onGoing = allonGoing[0];
      const eventStart = new Date(onGoing?.startDate);
      const eventEnd = new Date(onGoing?.endDate);


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
    <div>
      <main>
        <header className='bg-gradient-to-r from-[#E8FBFF] to-[#86F3F8]'>
          <NavBar />
          {/* ongoing event section  */}
          <section className=''>
           { onGoing?<div className='text-center'>
                <div
            className='bg-gray-200 border border-gray-300 shadow-lg  rounded-md flex flex-col md:flex-row justify-center items-center'
        >
            <div>
                <Image src={onGoing?.image ?? fallbackImage} alt='event image' width={600} height={100} className='rounded-md' />
            </div>
            <div className='px-2 py-2 hover:bg-blue-700'>
                <div className=' hover:text-cyan-200 py-2 px-3'>
                    <h1 className='text-xl'>
                        {onGoing?.title}
                    </h1>
                    <h2 className='text-lg'>{onGoing?.description?.slice(0, 100)}...</h2>
                    <div className='text-orange-600 mt-2 text-sm'>
                        <div className='flex'>
                            <MapPin />  <span className='mx-2'>venue:{onGoing.location}</span>
                        </div>
                        <div className=' flex mt-2 text-sm'>
                            <CalendarDays size={16} /><span className='mx-2'>{startDate}, {startTime} - {endDate}, {endTime}</span>
                        </div>
                    </div>
                </div>
                <Button variant='outline' className='w-full hover:text-blue-700'>
                    <Link href="#">View Event Details</Link>
                </Button>
            </div>
        </div>
              </div>:<div className='flex justify-center items-center'>
              <h1 className='text-center text-3xl md:text-5xl text-gray-900 font-bold '>
                Ongoing Event </h1>
              <div className="relative flex justify-center items-center mx-2 mt-3">
                {/* Aura / ping */}
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-75 animate-ping"></span>

                {/* The main red circle */}
                <div className="bg-red-500 rounded-full h-4 w-4"></div>
              </div>
<h2 className='text-center text-2xl md:text-3xl text-blue-900 font-bold mt-14'>Stay tuned for your exciting events in the future!</h2>
            </div>}
            
            {/* animation and get updates about event input field container */}
            <div className=' lg:flex lg:justify-between lg:items-center mt-52 md:mt-32'>
              {/* animation  */}
              {<div className='w-fit mx-auto md:mx-8'>
                <Image src={artBoard} width={600} height={100} alt='artboard' className='object-contain relative  z-10 artboard-up-down' />
                <Image src={calender} width={280} height={100} alt='calender' className='object-contain w-64 relative -mt-64 ml-10 z-20 ' />

                <Image src={human} width={150} height={100} alt='human' className='object-contain relative -mt-80 z-30 human' />
                <Image src={line} width={300} height={100} alt='line' className='object-contain relative ml-10 w-[280px] lg:w-[460px] h-10 ' />

              </div>}
              {/* input field  */}
              <div className='mx-8'>
                <h1 className='text-4xl text-center my-6'>Sign up to get updates about events right in your inbox</h1>
                <div className="flex flex-col md:flex-row justify-center items-center text-center">
                  <Input className='border-2 border-black h-11' />

                  <Button type="submit" variant="outline" className='text-white mt-6 md:mt-0 bg-[#0D47A1] h-11 mx-2 w-44'>
                    <CircleCheck />Get Updates
                  </Button>
                </div>

              </div>

            </div>
          </section>
        </header>
        {/* Upcoming Events */}
        <section className='mt-14 mb-14'>
          <h1 className='text-center text-3xl md:text-5xl text-gray-900 font-bold '>
            Upcoming Events 
          </h1>

          <UpcomingEvents />
        </section>
        {/* past events  */}
        <section>
          <h1 className='text-center text-3xl md:text-5xl text-gray-900 font-bold '>
            Past Events 
          </h1>
          <h4 className='text-center w-fit max-w-3xl mx-auto my-12'>
            Our core belief is to ensure that our students receive comprehensive education and guidance at every stage of their study abroad journey. Presented below are a few of our previous international educational events.
          </h4>
<PastEvents/>
        </section>
      </main>
    </div>
  )
}

export default HomePage;