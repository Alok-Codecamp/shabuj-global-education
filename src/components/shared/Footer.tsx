import React from 'react'
import footerImg from '@/assets/logo2.e7144194.svg'
import Image from 'next/image'
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shabuj Global Education',
  description: 'Shabuj Global Education provides expert guidance for world university admissions.',
};


const Footer = () => {
  const countries = ["Australia", "Switzerland", "UK", "Germany", "USA", "Canada"];
  const services = [
  "Personalized University Selection",
  "Application Assistance",
  "Scholarship and Financial Aid Guidance",
  "Visa and Immigration Support",
  "Pre-Departure and Post-Arrival Assistance",
  "Post-Graduation Support",
];
const menuItems = ["About Us", "Careers", "Events", "Blog", "Contact Us"];
const features = [
  "Seamless Admissions Process",
  "Expert Student Guidance",
  "Access to a Global Network of Universities",
  "Enhanced Student Success",
  "Marketing and Recruitment Support",
  "Long-Term Collaboration",
];
  return (
    <footer className="relative bg-[#081831] mt-16">
   <svg
    className="absolute -top-6 md:-top-8 lg:-top-10 left-0 w-full"
    viewBox="0 0 1440 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#081831"
      d="M0,40 C360,0 1080,0 1440,40 L1440,100 L0,100 Z"
    ></path>
  </svg>
  <div className="relative z-10 p-8 text-white">
     <div className='flex flex-col justify-center items-center'>
            <h1 className=' text-white'>
Our Students are Our Reference
            
        </h1>
        <Image src={footerImg} alt='footer img' width={100} height={100}/>
        <h1 className='text-xl font-bold'>Shabuj Global Education</h1>
        <h2 className='text-sm'>World University Admission</h2>
        </div>
        <hr className='my-10' />

        <div className='grid grid-cols-2 md:grid-3 lg:grid-cols-4 gap-20 my-12'>
          <div>
            <h1 className=' text-xl font-bold'>
              About Shabuj Global Education
            </h1>
            <p>
              Shabuj Global Education (also known as SG Education) is one of the BRITISH COUNCIL accredited education service providers in the UK. The company has been working since 2010 with great pride and service excellence. At Shabuj Global we provide services to local and international students for UK University admission.
            </p>
          </div>
          <div>
            <h1 className='text-xl font-bold'>
              Study Destinations
            </h1>
            {countries.map((country) => (
        <Link key={country} href={`#`} className="text-white hover:underline block">
          {country}
        </Link>
      ))}
          </div>
          <div>
            <h1 className='text-xl font-bold'>
              Services for students
            </h1>
             <div className="">
      {services.map((service) => (
        <Link
          key={service}
          href="#"
          className="text-white hover:underline block "
        >
          {service}
        </Link>
      ))}
    </div>
    <h1 className='text-xl font-bold my-2'>Services for partners</h1>
     <div className="flex flex-wrap gap-4">
      {features.map((feature) => (
        <Link
          key={feature}
          href="#"
          className="text-white hover:underline"
        >
          {feature}
        </Link>
      ))}
    </div>
          </div>
          <div>
            <h1 className='text-xl font-bold'>
              Company
            </h1>
              <div className="">
      {menuItems.map((item) => (
        <Link
          key={item}
          href="#"
          className="text-white hover:underline block"
        >
          {item}
        </Link>
      ))}
    </div>
          </div>
        </div>
        <hr className='my-6'/>
        <div className='flex flex-col md:flex-row justify-around items-center'>
          <div className='bg-[#A9A8A8] h-40 w-36 rounded-xl'>

          </div>
          <div className='bg-[#A9A8A8] h-40 w-xs md:w-md lg:w-lg rounded-xl'>

          </div>
        </div>
        <hr className='my-6' />
        <div>
          <h1 className='text-xl font-bold text-center'>Our offices</h1>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            
            <div>
              <h1>
                United Kingdom
              </h1>
            </div>
            <div>
              <h1>
                Bangladesh
              </h1>
            </div>
            <div>
              <h1>
                Inidia
              </h1>
            </div>
            <div>
              <h1>
                Nigeria
              </h1>
            </div>
            <div>
              <h1>
                Nepal
              </h1>
            </div>
            <div>
              <h1>Middle East</h1>
            </div>
            <div>
<h1>African Region</h1>
            </div>
            <div>
<h1>Pakistan</h1>
            </div>
          </div>
        </div>
        <hr className='my-6' />
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex justify-around items-center'>
            <Facebook size={32}  className='mx-6'/>
            <Instagram size={32}  className='mx-6'/>
            <Linkedin size={32}  className='mx-6'/>
            <Youtube size={32}  className='mx-6'/>
          </div>
          <div className='max-w-lg'>
            <p>
              Copyright © 2025, All Right Reserved Shabuj Global Education

Privacy Policy

The information on this website may not be accurate or complete
            </p>
          </div>
        </div>
  </div>
</footer>
    // <div className='bg-[#081831] text-white px-20 mt-10 py-6 rounded-t-3xl'>
       
    // </div>
  )
}

export default Footer