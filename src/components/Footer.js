import React from 'react'
import flag from '../assets/images/flag.png'

const Footer = () => {
  return (
    <div className='bg-[#23272a] grid border-b-2 border-blue-500 w-full h-[400px] justify-center items-center grid-cols-5 gap-11'>
      <div className='flex flex-col px-10  pt-12 '>
         <span className='text-[#ffff] font-Ginto-nord text-[30px]'>IMAGINE A PLACE</span>
         <div>
         <select className='bg-transparent border-none'>
            <option>
                <img src={flag} alt='' className='w-28' />
                EngLish,USA
            </option>
         </select>
         </div>
         
      </div>
    </div>
  )
}
export default Footer