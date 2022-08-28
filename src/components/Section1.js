import React from 'react'
import Section from '../assets/images/section1.svg';

const Section1 = () => {
  return (
    <div className='grid grid-cols-1 mx-8 md:mx-16 md:grid-cols-2 md:gap-6 mt-9'>
       <img src={Section} alt="" className='max-w-full object-cover mt-12' />
       <div className='flex flex-col  items-center space-y-6 md:p-5'>
        <h1 className='md:text-6xl text-xl font-extrabold text-[#000]'>Create an invite-only place where you belong</h1>
        <p className='text-gray-500 text-lg w-[20rem]'>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
       </div>
    </div>
  )
}

export default Section1