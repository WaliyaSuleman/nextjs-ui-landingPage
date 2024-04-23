import Image from 'next/image'
import React from 'react'
import HeroImage from '../public/assets/Visuals.jpg'
import { Button } from "@/components/ui/button"
import { IoRocket } from "react-icons/io5";


const Hero = () => {
    return (
        <div className='pt-[166px] px-[55px] '>
            <div className='flex justify-between'>
                <div className='flex flex-col w-[648px]'>
                    <div className='text-6xl font-bold'>Create Engaging Landing Pages</div>
                    <div className='pt-20 text-2xl'>Build beautiful landing pages in record time with Anima’s Landing Page UI kit for Figma. No code required!</div>
                    <div className='flex gap-6 pt-[40px]'>
                        <Button variant="outline" className='bg-[#E5F4F2] py-[16px] px-[50px] text-[#009379] rounded-[16px] text-[10px] font-semibold'>How it works</Button>
                        <Button variant="outline" className='bg-[#009379]  py-[16px] px-[50px] text-white rounded-[16px] text-[10px] font-semibold'>
                            <IoRocket size={18} />
                            Get Started</Button>
                    </div>

                </div>
                <Image src={HeroImage} alt='' className='w-[450px]' />
            </div>
        </div>
    )
}

export default Hero