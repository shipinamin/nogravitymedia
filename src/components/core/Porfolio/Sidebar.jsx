import React from 'react'

const Sidebar = () => {

    const data =[
        "Fintech",
        "Health and Wellness ",
        "Education ",
        "Content ",
        "Climate ",
        "Other"
    ]

  return (
    <div className='pt-[10px] flex flex-col gap-[10px] '>

{
   data.map((data,index)=>(
    <div className='font text-[18px] whitespace-nowrap' key={index}> 
        {data}
    </div>
   ))
}

    </div>
  )
}

export default Sidebar