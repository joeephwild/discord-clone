import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import section from '../assets/images/section4.svg'
import sparkle from '../assets/images/sparkles.svg'

const Section4 = () => {
  return (
    <div className='justify-center items-center flex-col mt-16 flex px-4'>
        <h1 className='text-[80px] max-w-[50rem] leading-[60px] text-center text-[#23272a] font-Ginto-nord mb-6'>RELIABLE TECH FOR STAYING CLOSE</h1>
        <p className='text-gray-500 text-lg align-baseline leading-loose font-whitney-light max-w-[44rem]'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
        <img src={section} alt='' className='w-full object-cover object-center mt-12' />

        <div className='flex flex-col justify-center relative items-center my-12 space-y-4'>
            <img src={sparkle} alt='' className='' />
            <h1 className='text-[36px] absolute top-0 text-center text-[#23272a] font-Ginto-nord mb-6'>Ready to start your journey?</h1>
            
        </div>
        <button className='flex items-center text-lg font-bold rounded-full space-x-6 bg-blue-600  text-[#fff] px-5 py-3 mt-6 mb-6  hover:shadow-gray-300 hover:shadow-xl'><AiOutlineDownload size={25}/> Download for Windows</button>
    </div>
  )
}

export default Section4