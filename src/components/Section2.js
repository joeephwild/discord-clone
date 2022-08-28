import React from 'react'
import Section from '../assets/images/section.svg';

const Section2 = () => {
  return (
    <div className='grid grid-cols-1 mx-8 md:mx-16 md:grid-cols-2 md:gap-6 mt-9'>
       <img src={Section} alt="" className='max-w-full mt-12 object-cover md:order-last' />
       <div className='flex flex-col justify-start items-center space-y-6 md:p-5'>
        <h1 className='md:text-6xl pr-[25%] md:pr-0 text-xl font-extrabold text-[#000]'>Where hanging out is easy</h1>
        <p className='text-gray-500 text-lg w-[20rem]'>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
       </div>
    </div>
  )
}

export default Section2