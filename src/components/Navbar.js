import React from 'react'
import logo from '../assets/images/logo.svg' 

const Navbar = () => {
  return (
    <div className='font-whitney-light w-full bg-transparent  flex justify-between py-7 px-6 font-bold items-center '>
       <img src={logo} alt='logo' className='w-32' />
        <div className=' flex pl-5 capitalize text-[#fff]  '>
        <div className='md:flex pl-6 hidden cursor-pointer space-x-9 items-center text-lg font-semibold'>
        <span className='hover:underline'>Download</span>
            <span className='hover:underline'>Nitro</span>
            <span className='hover:underline'>Discover</span>
            <span className='hover:underline'>Safety</span>
            <span className='hover:underline'>Support</span>
            <span className='hover:underline'>Blog</span>
            <span className='hover:underline'>Careers</span>
        </div>
        </div>
        <button className='bg-[#fff] text-black hover:text-blue-600 text-sm mr-6 px-5 py-3 rounded-full hidden md:block'>login</button>
    </div>
  )
}

export default Navbar