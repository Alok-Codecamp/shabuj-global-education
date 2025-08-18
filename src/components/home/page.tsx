import NavBar from '@/components/shared/NavBar'
import Image from 'next/image';
import React from 'react';
import artBoard from '@/assets/artboard.png';
import calender from '@/assets/calender.png';
import human from '@/assets/human.png';
import line from '@/assets/line.png'
const HomePage = () => {
  return (
    <div>
      <main>
        <header className='bg-gradient-to-r from-[#E8FBFF] to-[#86F3F8]'>
          <NavBar />
          {/* ongoing event section  */}
          <section className='mt-16'>
            <div className='flex justify-center items-center'>
              <h1 className='text-center text-4xl md:text-5xl text-gray-900 font-bold '>
                Ongoing Event </h1>
              <div className="relative flex justify-center items-center mx-4 mt-3">
                {/* Aura / ping */}
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-75 animate-ping"></span>

                {/* The main red circle */}
                <div className="bg-red-500 rounded-full h-4 w-4"></div>
              </div>

            </div>
            <h2 className='text-center text-2xl md:text-3xl text-blue-900 font-bold mt-14'>Stay tuned for your exciting events in the future!</h2>
            {/* animation and get updates about event input field container */}
            <div className=' lg:flex lg:justify-between lg:items-center mt-32'>
              {/* animation  */}
              <div className='w-fit mx-auto md:mx-8'>
                <Image src={artBoard} width={600} height={100} alt='artboard' className='object-contain relative  z-10 artboard-up-down'/>
                <Image src={calender} width={280} height={100} alt='calender' className='object-contain relative -mt-64 ml-10 z-20 '/>
                
                <Image src={human} width={150} height={100} alt='human' className='object-contain relative -mt-80 z-30 human-move'/>
                <Image src={line} width={300} height={100} alt='line' className='object-contain relative ml-10 w-[460px] h-10 '/>

              </div>
              {/* input field  */}
              <div className='mx-8'>
                <h1 className='text-4xl text-center '>Sign up to get updates about events <br /> right in your inbox</h1>
                <input type='text' placeholder='Email' className='border-2'/>
              </div>

            </div>
          </section>
        </header>
      </main>
    </div>
  )
}

export default HomePage;