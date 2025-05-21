'use client';
import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";



const navItems = ["/paternal", "/maternal", "/family"]

export const NavMobile = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();


  const handleNext = () => {

    if (count == navItems.length - 1) {
      setCount(0);
      router.push(navItems[0]);
      return;
    }
    setCount((prev) => prev + 1);
    router.push(navItems[count + 1]);




  };

  const handlePrev = () => {
    if (count == 0) {
      setCount(2);
      router.push(navItems[2]);
      return;
     
    }
     setCount((prev) => prev - 1);
      router.push(navItems[count - 1]);
  };
  return (
    <nav className='flex flex-col sm:block md:hidden bg-blue-600 h-40 '>
      <Link href='/'>
        <span className='flex hover:text-purple-600 text-4xl mt-3'><HomeIcon className='mr-1' size={40} />Home</span>
      </Link>
      <div className='flex flex-row h-25 justify-around w-full'>

        <button onClick={handlePrev} className=" text-white hover:underline btn-nav  cursor-pointer ">
          <HiOutlineArrowNarrowLeft />
        </button>

        <button onClick={handleNext} className=" text-white hover:underline btn-nav cursor-pointer  ">
          <HiOutlineArrowNarrowRight />
        </button>

      </div>



    </nav>
  )
}