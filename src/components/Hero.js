import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='relative bg-herocover  bg-cover bg-center bg-no-repeat w-full h-[700px]'>
       <Navbar />
        <div className='justify-center items-center flex flex-col  mt-[58px] text-[#fff]'>
            <h1 className='text-9xl text-center leading-[94px] font-extrabold max-w-[30rem]  uppercase  font-Ginto-nord'>IMAGINE A PLACE...</h1>
            <p className=' text-[#fff] font-whitney-light text-center leading-loose max-w-[40rem] text-lg md:text-xl mt-[2.4rem]'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        </div>
        <div className='md:flex  flex-col md:space-x-6 space-y-6 my-6 items-center'>
          <button className='flex items-center text-lg font-bold rounded-full space-x-6 bg-white text-black px-5 py-3 hover:text-blue-600'><AiOutlineDownload size={15}/> Download for Windows</button>
          <button className='text-lg font-bold rounded-full space-x-6 bg-[#312b2b] text-[#ffff] px-5 py-3'> Open Discord in your browser</button>
        </div>
    </div>
  )
}

export default Hero