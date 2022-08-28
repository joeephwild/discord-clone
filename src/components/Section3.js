import React from 'react'
import Section from '../assets/images/section3.svg';

const Section3 = () => {
  return (
    <div className='grid grid-cols-1 mx-16 md:grid-cols-2 gap-6 mt-9'>
       <img src={Section} alt="" className='max-w-full object-cover object-center mt-12' />
       <div className='flex flex-col  items-center space-y-6 p-5'>
        <h1 className='text-6xl font-extrabold text-[#000]'>From few to a fandom</h1>
        <p className='text-gray-500 text-lg w-[20rem]'>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
       </div>
    </div>
  )
}

export default Section3