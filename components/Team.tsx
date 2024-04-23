import React from 'react'
import team1 from '../public/assets/Profile Image Placeholder 1.jpg'
import team2 from '../public/assets/Profile Image Placeholder 1 (1).jpg'
import team3 from '../public/assets/Profile Image Placeholder 1 (2).jpg'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import { FaTwitter } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const Team = () => {
    const team = [
        {
            teamNO: 1,
            image: team1,
            name: "SarahK",
            role: "Ux designer",

        },
        {
            teamNO: 2,
            image: team2,
            name: "Michel L",
            role: "Lead designer",

        },
        {
            teamNO: 3,
            image: team3,
            name: "Lauren M",
            role: "Product designer",

        },
    ]
    return (
        <div className='h-[852px]'>
            <div className='flex flex-col items-center '>
                <div className='pt-[120px] text-3xl font-bold'>Meet our team</div>
                <div className='pt-[20px]'>Get to know the faces behind the scenes and learn about the values that drive us.</div>
            </div>
            <div className='flex justify-between px-[55px] mt-[60px] gap-6 '>
                {team.map((team) => {
                    return (
                        <div key={team.teamNO} className='bg-white rounded-[20px]'>
                            <Image src={team.image} alt='' />
                            <div className='text-center mt-[20px]'>
                                <div className='font-bold'>{team.name}</div>
                                <div className='mb-[20px]'>{team.role}</div>
                            </div>
                            <Separator />
                            <div className='flex items-center justify-center gap-4 pt-[20px] pb-[30px]'>
                            <FaTwitter />
                            <FaInstagramSquare />
                            <BiWorld />
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Team