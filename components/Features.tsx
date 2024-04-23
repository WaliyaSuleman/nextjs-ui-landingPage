import React from 'react'
import { Button } from "@/components/ui/button"
import mokeup from '../public/assets/Mockup.jpg'
import Image from 'next/image'

const Features = () => {
  return (
    <div className=' h-[554px]'>
      <div className='h-[434px] my-[60px] mx-[55px] rounded-[20px] bg-[#f2bfaf] flex justify justify-between'>
        <div className=' px-[60px]'>
          <div className='font-bold text-6xl pt-[60px]'>Get Landing Page UI Kit Today!</div>
          <div className=' pt-[36px] text-2xl'>Break the Figma limits and explore the endless possibilities with Anima.</div>
          <Button variant="outline" className=' mt-[40px] bg-[#009379]  py-[16px] px-[50px] text-white rounded-[16px] text-[10px] font-semibold'>
            Get Started</Button>
        </div>
        <Image className='h-[434px] w-[584px]' src={mokeup} alt=''/>
      </div>
    </div>
  )
}

export default Features