import React from 'react'
import heroimg from '../../assets/hero@2x.webp'
const Herosection = ({data}) => {
  return (
    <div className="w-full h-[40vh]  bg-top bg-cover flex flex-col items-center justify-center gap-16"  style={{
        backgroundImage: `url(${heroimg})`}}>

<div className='font-bold text-white text-7xl text-center	sm:text-4xl w-fit	'>
   <p className='relative top-[40px] text-balance'>{data}</p> 
    </div>
  </div>
  )
}

export default Herosection