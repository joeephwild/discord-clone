import React from 'react'
import flag from '../assets/images/flag.png'

const Footer = () => {
  return (
    <div className='bg-[#23272a] border-b-2 border-blue-500 text-[#fff] w-full h-[400px] justify-center items-center px-4 flex flex-col'>
      <h1 className='text-[60px] text-blue-600 font-black font-Ginto-nord'>IMAGINE A PLACE</h1>
      <div className='flex items-center space-x-4'>
        <img src={flag} alt="" className='h-5 w-5'/>
        English,USA
      </div>
    </div>
  )
}
export default Footer