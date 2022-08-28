import React from 'react'
import herobg from '../assets/images/hero-bg.jpg'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='relative bg-herocover  bg-cover bg-center bg-no-repeat w-full h-[700px]' >
       <Navbar />
        <div className='justify-center items-center flex flex-col  mt-[78px] text-[#fff]'>
            <h1 className='text-[10.8rem] font-extrabold  uppercase leading-[120%] font-Ginto-nord'>IMAGINE A PLACE...</h1>
            <p className='text-lg leading-8 text-[#fff] max-w-4xl mt-[2.4rem]'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        </div>
    </div>
  )
}

export default Hero