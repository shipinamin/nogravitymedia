import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Education = () => {

  const data =[
  //   {
  //     title:"",
  //     link:"",
  //     para:""
  // },
  ]
  return (
    <div className='flex flex-col gap-[20px]'>
   <h1 className='font-semibold text-[34px]'>Education</h1>

   <div className='border-r-4 border'>

      {
        data.map((data,index)=>(
          <div className='p-[40px] hover:bg-[#F9F9F9]' key={index}>
           {/* <a href="https://pramaniknivesh.com/"> */}
           <NavLink to={data.link}>
            <h1 className='font-semibold text-[18px]'>{data.title}</h1>
           </NavLink>

            {/* </a>  */}
            
            <p className='text-[#666666] '>{data.para}</p>
          </div>
        ))
      }




   </div>

 
    </div>
  )
}

export default Education