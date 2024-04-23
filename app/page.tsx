import Hero from '@/components/Hero'
import Logobar from '@/components/Logobar'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import Features from '@/components/Features'
import Team from '@/components/Team'

const Home = () => {
  return (
    <div className=' bg-[#F8F9FF]'>
      <Navbar/>
      <Hero/>
      <Separator />
      <Logobar/>
      <Separator />
      <Features/>
      <Team/>
    </div>
  )
}

export default Home