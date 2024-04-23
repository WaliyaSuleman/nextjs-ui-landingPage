import Image from 'next/image'
import React from 'react'
import airbnb from '../public/assets/_Client logo.svg'
import Google from '../public/assets/_Client logo (1).svg'
import microsoft from '../public/assets/_Client logo (2).svg'
import Fedx from '../public/assets/_Client logo (3).svg'
import hubspot from '../public/assets/_Client logo (4).svg'
import  amazon from '../public/assets/amazon.svg'


const Logobar = () => {
  return (
    <div className=' bg-[#F8F9FF]'>
   
        <div className='py-[60px] px-[55px] flex gap-20 items-center justify-center'>
            <Image src={airbnb} alt=''/>
            <Image src={Google} alt=''/>
            <Image src={amazon} alt=''/>
            <Image src={microsoft} alt=''/>
            <Image src={Fedx} alt=''/>
            <Image src={hubspot} alt=''/>

        </div>
        
    </div>
  )
}

export default Logobar