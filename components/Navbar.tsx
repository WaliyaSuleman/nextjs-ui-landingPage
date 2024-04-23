import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { IoRocket } from "react-icons/io5";



const Navbar = () => {
  return (
    <div className=' p-8 px-12 flex justify-between bg-[#F8F9FF]'>
      <div className='flex items-center'>
      <MdOutlineScreenshotMonitor size={25}/>
      <div className='text-center font-medium text-xl'>Landingpage</div>
      </div>
      <div className=' hidden sm:flex gap-4 items-center'>
        <Link href='/' className='text-[#009379] font-semibold'>contact</Link>
        <Button variant="outline" className='bg-[#E5F4F2] py-[16px] px-[50px] text-[#009379] rounded-[16px] text-[10px] font-semibold'>How it works</Button>
        <Button variant="outline" className='bg-[#009379]  py-[16px] px-[50px] text-white rounded-[16px] text-[10px] font-semibold'>
        <IoRocket size={18}/>
          Get Started</Button>

      </div>
    </div>
  )
}


export default Navbar