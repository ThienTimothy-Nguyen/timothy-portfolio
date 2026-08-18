import React from 'react'
import Overview from './Overview'
import ContactBoard from './ContactBoard'
import { RiArrowDownWideLine } from 'react-icons/ri'

function AboutMe() {
  return (
    <div className="row flex flex-col justify-center items-center gap-6 h-screen panel absolute inset-0 z-1">
      <div className="flex flex-col md:flex-row text-start justify-between gap-8 md:gap-4">
        <Overview />
        <ContactBoard />
      </div>
      <RiArrowDownWideLine size={56} className="w-full" />
    </div>
  )
}

export default AboutMe