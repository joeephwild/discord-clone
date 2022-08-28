import React from 'react'
import logo from '../assets/images/logo.svg' 

const Navbar = () => {
  return (
    <div className='font-whitney-light w-full bg-transparent  flex justify-between py-7 px-6 font-bold items-center '>
       
        <div className=' flex pl-5 capitalize text-[#fff]  '>
        <img src={logo} alt='logo' className='w-[12.4rem] mr-3' />
        <div className='md:flex pl-6 hidden cursor-pointer space-x-12 items-center text-[1.6rem] font-bold'>
        <span className='hover:underline'>Download</span>
            <span className='hover:underline'>Nitro</span>
            <span className='hover:underline'>Discover</span>
            <span className='hover:underline'>Safety</span>
            <span className='hover:underline'>Support</span>
            <span className='hover:underline'>Blog</span>
            <span className='hover:underline'>Careers</span>
        </div>
        </div>
        <button className='bg-[#fff] text-black hover:text-blue-600 text-[1.4rem] mr-6 px-[1.7rem] py-[.6rem] rounded-full hidden md:block'>login</button>
    </div>
  )
}

export default Navbar