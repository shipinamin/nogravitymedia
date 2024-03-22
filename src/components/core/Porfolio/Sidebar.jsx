import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const data =[
        "Fintech",
        "Health and Wellness ",
        "Education ",
        "E-commerce",
        "Content",
        // "Other"
    ]



  return (
    <div className='pt-[10px] flex flex-col gap-[10px]'>
    {data.map((item, index) => (
        <NavLink to={`/Portfolio/${item}`} key={index}>
            <div className='font text-[18px] whitespace-nowrap'>
                {item}
            </div>
        </NavLink>
    ))}
</div>
  )
}

export default Sidebar