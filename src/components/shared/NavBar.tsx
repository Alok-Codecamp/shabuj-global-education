"use client";
import Image from "next/image";
import Link from "next/link";
import {useState } from "react";

import { AlignJustify } from "lucide-react";




const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className={`md:shadow-xs sticky z-50 top-0 bg-[#F0F8FF] pt-4 pb-4`}>

            {/* desktop menu  */}
            <section className={` container mx-auto pl-2 pr-4  flex justify-between items-center h-20`}>
                {/* nav Items  */}

                <div className="flex justify-center items-center">
                    <Link className="" href="/">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={350}
                            height={300}
                            unoptimized
                            className="w-52 md:w-80"
                            />
                    </Link>

                    
</div>
                    <ul className="hidden lg:flex space-x-4 text-gray-800 font-bold">
                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        <li>
                            <Link href='/study-destination'>Study Destination</Link>
                        </li>
                        <li>
                            <Link href={"/services"}>Services</Link>
                        </li>
                        <li>
                            <Link href={"/test-prep"}>Test Prep.</Link>
                        </li>
                        <li>
                            <Link href={"/about"}>About Us</Link>
                        </li>

                        <li>
                            <Link href={"/about"}>Admin</Link>
                        </li>
                        
                    </ul>
                


                {/* search and Login  */}
                

                <button
                    className="lg:hidden cursor-pointer hover:bg-gray-300 rounded-md"
                    onClick={() => setOpen(!open)}
                >
                    <AlignJustify color="black" size={26} />
                </button>

            </section>
            

            {/* mobile menu  */}
            {open && (
                <section
                    className={`lg:hidden bg-gray-200 shadow-sm text-left w-80 px-4 py-16 h-full fixed right-0 z-10
                 
          ${open
                            ? "animate-in slide-in-from-right"
                            : "animate-out slide-out-to-right"
                        }`}
                >
                    
                   <ul className=" space-x-4 text-gray-800 font-bold">
                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        <li>
                            <Link href='/study-destination'>Study Destination</Link>
                        </li>
                        <li>
                            <Link href={"/services"}>Services</Link>
                        </li>
                        <li>
                            <Link href={"/test-prep"}>Test Prep.</Link>
                        </li>
                        <li>
                            <Link href={"/about"}>About Us</Link>
                        </li>

                        <li>
                            <Link href={"/about"}>Admin</Link>
                        </li>
                        
                    </ul>
                </section>
            )}
            
        </nav>
    );
};

export default NavBar;
