import React, {  useRef } from 'react';
import heroimg from '../assets/hero@2x.webp'
import Button from './Button'
import Card from './Card'
import { useEffect, useState } from 'react'
import {useForm} from "react-hook-form"
import Form from "./common/Form"
import { Carousel } from "antd";
import Portfolio from './Portfolio'
import Portfoliocard from './Portfoliocard'
// import partner1 from "../assets/partner1.webpt"
// import partner2 from "../assets/partner2.gif"
import partner1 from "../assets/partner1.webp"
import partner2 from "../assets/partner2.gif"
import video1 from '../assets/videos/Yardly Final.mp4'
import "./homepage.css"

const Homepage = () => {

  const data_professionals=[


    {
      designation:"Founder",
      para:"As the visionary leader behind No Gravity Media, our Founder brought passion, dedication, and a forward-thinking mindset to every aspect of our collaboration. Their strategic guidance and entrepreneurial spirit paved the way for innovative solutions and long-term success",
      name:"Hashir Khan",
      bg:"https://w0.peakpx.com/wallpaper/390/39/HD-wallpaper-compulsory-abstract-abstract.jpg"
    },
    {
      designation:"Co Founder ",
      para:"Our Co-founder at No Gravity Media played a pivotal role in shaping our company culture and driving our mission forward. Their collaborative approach, industry expertise, and unwavering commitment to excellence have been instrumental in our journey towards achieving our goals",
      name:"Yuvraj Battoo",
      bg:"https://media.istockphoto.com/id/1411682102/photo/3d-abstract-colorful-background-suitable-for-magazine-covers-banners-and-brochures-3d-render.webp?b=1&s=170667a&w=0&k=20&c=uIf4qSqwxGV8aObX-1fWAx7FEQ0bs7MNUYxWPmFIwK8="
   
    },
     {   
      designation:"Manager",
      para:"Our dedicated Manager at No Gravity Media brought unparalleled organization and strategic oversight to our project. Their ability to coordinate the team and keep all moving parts aligned ensured a seamless execution and exceptional results.",
      name:"Saquib Khan",
      bg:"https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-smoke-paint-splatter-colorful-background-image_2164081.jpg"
   
    },
    {
      designation:"Senior Software Engineer",
      para:"The technical expertise of our Senior Software Engineer at No Gravity Media was instrumental in bringing our digital solutions to life. Their innovative thinking and problem-solving skills ensured that our platforms were not only robust but also scalable for future growth.",
      name:"Yasir Todarmal",
      bg:"https://img.freepik.com/free-photo/abstract-flames-exploding-multi-colored-ink-paint-generated-by-ai_188544-15568.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1709856000&semt=ais"
   
    },
    
    {
      designation:"UI/UX Designer:",
      para:"The creative brilliance of our UI/UX Designer at No Gravity Media transformed our vision into visually stunning and user-friendly experiences. Their attention to detail and intuitive design choices elevated our brand and captivated our audience.",
      name:"Muskaan Kapoor",
      bg:"https://media.istockphoto.com/id/1411682102/photo/3d-abstract-colorful-background-suitable-for-magazine-covers-banners-and-brochures-3d-render.webp?b=1&s=170667a&w=0&k=20&c=uIf4qSqwxGV8aObX-1fWAx7FEQ0bs7MNUYxWPmFIwK8="
   
    },
  
  ]
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play()
        .catch(error => {
          // Autoplay was prevented. Handle the error or provide a user interface to play the video.
          console.error('Autoplay was prevented:', error);
        });
    }
  }, []);

  return (
    <div className='w-full flex flex-col items-center justify-center '>

<div className="w-full h-screen bg-cover flex flex-col items-center justify-center gap-16 homepage_hero"  style={{
        backgroundImage: `url(${heroimg})`}}>

<div className='font-bold text-white text-7xl text-center	sm:text-4xl w-fit	'>
   <p className='text-balance'>DATA DRIVEN DEVELOPMENT</p> 
    </div>

<div className='flex items-center gap-4 xl:flex-col'>
    <Button data={'come on, touch me'}/>
    <Button data={'watch our show reel'}/>
</div>


  
  </div>

<div className='w-full flex flex-col items-center justify-center gap-14 py-24'  style={{background :"#EEF0F1"}}>

<h1 className='font-semibold text-black text-4xl text-center '>We bring you THE Digital Agency for B2B & B2C Brands.</h1>
<h1 className='font-semibold text-black text-4xl text-center  ' style={{color:'#825da8'}}>What's your challenge?
</h1>

<div className='flex w-10/12 flex-col'>

<Carousel
     className=" flex "
     slidesToShow= {2}
     autoplay
     autoplaySpeed={1500}
     responsive={[
       {
         breakpoint: 1345,
         settings: {
           slidesToShow: 2,
         },
       },
       {
         breakpoint: 1162,
         settings: {
           slidesToShow: 3,
         },
       },
       {
         breakpoint: 864,
         settings: {
           slidesToShow: 2,
         },
       },
       {
         breakpoint: 598,
         settings: {
           slidesToShow: 1,
         },
       },
     ]}
>

{
data_professionals.map((data,index)=>(

<Portfoliocard data={data} />

))
}


</Carousel>

</div>


</div>


<div className='w-10/12 py-14 xl:py-18 flex  flex-col items-center justify-center gap-10'>
<p className='font-semibold text-black text-4xl text-center'>Our Portfolio</p>
<video  className=''  muted  ref={videoRef}   loop >
        <source src={video1} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
    
</div>

<div className='w-10/12 py-14 xl:py-18 flex  flex-col items-center justify-center gap-10'>
<p className='font-semibold text-black text-4xl text-center'>Partners</p>
<div className='flex justify-center items-center xl:flex-col'>
<img src={partner1} alt="" className='w-[200px]'/>
<img src={partner2} alt="" className='w-[200px] xl:'/>
<img src="https://media.licdn.com/dms/image/D4D0BAQG-DR_ezu-pXw/company-logo_200_200/0/1702297267921/weklever_logo?e=1718236800&v=beta&t=uuoGb756DuAvmX4pKpTIvs75k4EPoR-JtKVggxq-b-8" alt="" className='w-[100px] h-[100px]'/>
</div>
</div>


<div className='xl:flex-col flex justify-center xl:items-center w-11/12 py-24 gap-24 '>

<div className='flex flex-col xl:w-9/12 sm:w-full w-6/12 gap-5'>
    <p className='text-4xl font-bold leading-snug'>You've scrolled all the way down here, why not get in touch?</p>
    <p className='font-light text-gray-400 leading-7'>We promise that if you give us your name, mail and company we won’t spam you. But you might just find the solution to your digital performance problems right at your inbox!
</p>
</div>

<Form/>



</div>

  </div>

  )
}

export default Homepage