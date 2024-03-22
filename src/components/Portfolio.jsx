import React from 'react'
import Portfoliocard from './Portfoliocard'
import Herosection from './common/Herosection'
import Sidebar from './core/Porfolio/Sidebar'
import {Outlet, Route, Routes } from "react-router-dom";
import Fintech from "../components/core/Porfolio/Fintech"
import Health_and_Wellness from "../components/core/Porfolio/Health_and_Wellness"
import Education from "../components/core/Porfolio/Education"
import Content from "../components/core/Porfolio/Content"
import Climate from "../components/core/Porfolio/Climate"
import Other from "../components/core/Porfolio/Other"
const Portfolio = () => {

 
  return (
    <div className='w-full flex flex-col items-center justify-center'>

<Herosection data={'PORTFOLIO'}/>


<div className='flex xl:flex-col gap-[20px] w-9/12 xl:w-11/12 py-14'>

<Sidebar/>

<div>
{/* <Fintech /> */}

{/* <Routes>
      <Route path="/Portfolio/Fintech" element={<Fintech />} />
      <Route path="/Health and Wellness" element={<Health_and_Wellness />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Content " element={<Content />} />
      <Route path="/Climate " element={<Climate />} />
      <Route path="/Other  " element={<Other />} />
</Routes> */}

<Outlet/>

</div>

</div>


    </div>
  )
}

export default Portfolio