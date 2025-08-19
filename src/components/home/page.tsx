import NavBar from '@/components/shared/NavBar'
import Image from 'next/image';
import React from 'react';
import artBoard from '@/assets/artboard.png';
import calender from '@/assets/calender.png';
import human from '@/assets/human.png';
import line from '@/assets/line.png'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CircleCheck } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <main>
        <header className='bg-gradient-to-r from-[#E8FBFF] to-[#86F3F8]'>
          <NavBar />
          {/* ongoing event section  */}
          <section className='mt-16'>
            <div className='flex justify-center items-center'>
              <h1 className='text-center text-3xl md:text-5xl text-gray-900 font-bold '>
                Ongoing Event </h1>
              <div className="relative flex justify-center items-center mx-2 mt-3">
                {/* Aura / ping */}
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-75 animate-ping"></span>

                {/* The main red circle */}
                <div className="bg-red-500 rounded-full h-4 w-4"></div>
              </div>

            </div>
            <h2 className='text-center text-2xl md:text-3xl text-blue-900 font-bold mt-14'>Stay tuned for your exciting events in the future!</h2>
            {/* animation and get updates about event input field container */}
            <div className=' lg:flex lg:justify-between lg:items-center mt-52 md:mt-32'>
              {/* animation  */}
              <div className='w-fit mx-auto md:mx-8'>
                <Image src={artBoard} width={600} height={100} alt='artboard' className='object-contain relative  z-10 artboard-up-down' />
                <Image src={calender} width={280} height={100} alt='calender' className='object-contain w-64 relative -mt-64 ml-10 z-20 ' />

                <Image src={human} width={150} height={100} alt='human' className='object-contain relative -mt-80 z-30 human' />
                <Image src={line} width={300} height={100} alt='line' className='object-contain relative ml-10 w-[280px] lg:w-[460px] h-10 ' />

              </div>
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
        <section className='mt-14'>
    <h1 className='text-center text-3xl md:text-5xl text-gray-900 font-bold '>
                Upcoming Events </h1>
        </section>
      </main>
    </div>
  )
}

export default HomePage;