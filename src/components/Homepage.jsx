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
import { GiCube } from "react-icons/gi";
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

  const data = [
    
    {
img:'https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png',
title:'Node js'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png',
title:'React Js'
  },
    {
img:'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
title:'Angular js'
  },
    {
img:'https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png',
title:'Vue Js'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
title:'Type Script'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
title:'javascript'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png',
title:'php'
  },
    {
img:'data:image/png;base64,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',
title:'python'
  },
    {
img:'https://logowik.com/content/uploads/images/731_java.jpg',
title:'java'
  },
    {
img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAD4CAMAAACXF/l7AAAAtFBMVEX///9nt/dCpfUNR6Fhtffn8/5bs/eo1Prb4+8ANpvN5vwARKDr9f6Mx/kwn/QKRqEUSJkVSJZKqPUXRpBwu/gQSJ/v9/7J5PwXRIkAQJ+TyvkUSJfi6PIXQH8/jtDQ5/wWPXkCGTy6xuAUOHAAMZoUM2QAPJ5JmN0QLl0WN2oMJ1AACiwIIUan0/qIwvje7v0UOXgALnkAP48QLFcPNG4NO4MHHT8JJ1YFKF0AEWcAKYUAJpcmVNy+AAAEvklEQVR4nO3ciXrSQBQFYDbpgi1RTMG2ppbF0E2RzVrf/73MKiQEMpOZhDPXe17A7//OPUy3z1qNw+FwOBwOh8Op1a7eacixEVHu2hoCgrlr15XTYov2sIWw5f2xFWG4F7aUHd4L4V7Yoj28F7KWVp2OBWYv54RujC1JCiFLvc570R62kLXAvJVsSWHoWFqtq2MrwvCNkbXwXkoIpRvrs4WqBWb7OnpB2T7fGFkL76WE8I2xpezwXuhaCN1YnZKF0FtZp7QXQr3AbJ/Sz2F4+0kKJQvKXijdGG8/ZSH0VlLaC4qF90LWwm9lCaF0Y5T+3pLS5xil31dq+Vs4EAvvhawF5q2ktH3eC1vKDqW98FuZDKEbg/k5DL+VqYBYeC9sKTv8VmL2wttPWQi9lZT2gmLhvSQppPZCyULoxihZKO2FkoXSjaFYdPw/JP/ZW3nycqKal34VFoG38rrdUk37ohJL/o1dq/8zlCytSiwCezHGIrQXUyyEbgzFUtHfXFVi0YCB2X5N/cxgtq9BA7MXDRo0i4oGaS+qGqy9qGnwbqy4BtVSRIO4lziy3zYjW2S7wdx+MQ3uXuQ1+BZxDfZe5DQ4X/Ora0y4MXGNKRYBjciNtTAsea+nyPYvLj9+wrAc7kZkLxeXjYaiRpvlkEbUoqjRaDmgEdhLaFHSaLXs3Y3QXhoNRY1mS3Y34jempNFuydLIWgpqSrBkaCT2oqApxbKjKWApoCnJkvwUEHsr0xZpTWmW7W7k91JIU6JlW1PUIqUp1fJPU2gv0pqSLdFuCu5FUlO6xe+m+F6kNBVYPI3SjQlrKrGIJM8ioDHIkqsxypKjMcxyUGOc5YDGQMteDYzlu4RljwbGItPLHk3+349VFFlLhgbGIndjmRqjLSkNjEX+xnY0xlu2NDCWYjeW0JCwRBoilkBDxuJp6tfHRkT5oWxpNNzTYyvi3Clr3NnP22Mr4qhq3NlsQEXjLmdfBr05iUtzR1+/DAa9DzYBTWgZ9G6sjvGX5lnCYm4s+7PhGncUHZmHQdKcF9C4D54lxFgexu4arPEtQTFRM3YTZzeyGncyioqJm7E7OJcmtxt3GhWzacar5huMRqYb3xIXs8E0OziX1hfWuNNJtP4QY0UYEzWBJXwvk814GpzdiF2as5g+xItJNWOcxnmMislqBkqTf2mBJSgmG2PSbpzHRVxM5pmZ1I3zvClmTzNNU94b5z4uZhfT3MSIbnzLYrKLsbYlhuzGuX/2i/G+KtvG7FJM0PiW6Mo2mBu72d21QF1a1m6cp2e/mG1Mz+5mSuA1zlNUTIwZWN39FOxL8yxrr5hoMqOB1TwoCTQ433smNYElvLLJZDZvZg/FjG58y9q/ssV0ucrvBHo3ocVr5nUlVAmiJu4msKzXv1Z2V84CeGmB5XEpOBRsjW9ZruyMZ15Mg3Np55fO0+sq8TWxwZr+7/l8bilYfA3M7wiGb4oWqN0M3xQtUJc2PFO0QH3vORyra4C6GRd4YVKaDs6ngAYNrW6QdsOapAbo9TzT8ClAqxtSGmK7wdHo2A3OpwCtzzTeTVpDqhugS9PwKQCk4d2kNbS6wdHwbnC7GZ+pZvwHRnN7qiHHRnA4HA6Hw+FwsvMXDX7ldQ7FwwoAAAAASUVORK5CYII=',
title:'flutter'
  },
    {
img:'https://cms-assets.tutsplus.com/uploads/users/362/posts/29304/preview_image/picKotlin.jpg',
title:'kotlin'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png',
title:'wordpress'
  },
    {
img:'https://avatars.githubusercontent.com/u/8085?s=280&v=4',
title:'shopify'
  },
    {
img:'https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png',
title:'AWS'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/1200px-WooCommerce_logo.svg.png',
title:'woocommerce'
  },
    {
img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOv-8ULHwGd9aXOXRrXCBPOnMAs75k87LN_s9oSfWJe_cVwoTGizwRS3s2miesfR2jEiY&usqp=CAU',
title:'.NET'
  },
    {
img:'https://developer.apple.com/swift/images/swift-og.png',
title:'swift'
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
    <div className='w-full flex flex-col items-center justify-center gap-[80px] pb-[80px]'>

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

<div className='w-[100vw]  shadow-lg px-[0px] py-[60px] grid grid-cols-4 relative  xl:grid-cols-2 gap-[20px] bg-[#F0F0F0] '>

<div className='flex flex-col items-center justify-center gap-[10px]'>
  <p className='text-3xl xl:text-2xl text-[40px]  font-bold '>10+</p>
  <p className='text-[#8C8C8C] font-[300]'> Countries Covered</p>
</div>
<div className='flex flex-col items-center justify-center gap-[10px]'>
  <p className='text-3xl  xl:text-2xl text-[40px]  font-bold '>Top 1% firm</p>
  <p className='text-[#8C8C8C] font-[300]'> Countries Covered</p>
</div>
<div className='flex flex-col items-center justify-center gap-[10px]'>
  <p className='text-3xl xl:text-2xl text-[40px]  font-bold '>2.5x</p>
  <p className='text-[#8C8C8C] font-[300] text-center'> Growth in the last 2 years</p>
</div>
<div className='flex flex-col items-center justify-center gap-[10px]'>
  <p className='text-3xl xl:text-2xl text-[40px]  font-bold '>5-star</p>
  <p className='text-[#8C8C8C] font-[300]'> Verified rating</p>
</div>

</div>


<div className='w-[90vw] flex flex-col gap-[30px]'>
{/* <h1 className='text-5xl xl:text-4xl font-[550] text-[#3D3D3D] md:text-3xl'>Transform and Enrich eCommerce Experiences for Your Customers</h1> */}
<div className='flex xl:flex-col min-xl:gap-[100px] xl:gap-[20px]'>
  <div className='flex flex-col gap-[20px]  leading-[30px]'>
  <h1 className='text-4xl xl:text-4xl  text-[#3D3D3D] md:text-3xl font-[700]'>Transform and Enrich eCommerce Experiences for Your Customers</h1>
  <p className='font-[300]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus quo, quam earum illum laboriosam voluptatem! Odit sed, quia voluptate similique optio sint fuga eum soluta modi sit non, aliquam quis at! Quas et eveniet at autem id, consectetur enim.
  </p>
  <p className='font-[300]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus quo, quam earum illum laboriosam voluptatem! Odit sed, quia voluptate similique optio sint fuga eum soluta modi sit non, aliquam quis at! Quas et eveniet at autem id, consectetur enim.
  </p>

  </div>

  <img src={heroimg} className='h-[288px] object-cover' alt="" />
</div>
</div>

<div className=' flex flex-col gap-[40px] items-center'>
<h1 className='font-bold text-4xl'> Our Workflow</h1>
<div className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-[40px] place-items-center xl:w-full'>

  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px]  p-[20px] flex flex-col items-start justify-start gap-[10px]'>
  <div className='bg-blue-200 p-[10px] rounded-full text-blue-400'>
  <GiCube className='h-[35px] w-[35px]'/> 
  </div>

<h3 className='text-[] text-xl font-bold flex gap-[10px] items-center'>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
 
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px]  p-[20px] flex flex-col items-start justify-start gap-[10px]'>
  <div className='bg-blue-200 p-[10px] rounded-full text-blue-400'>
  <GiCube className='h-[35px] w-[35px]'/> 
  </div>

<h3 className='text-[] text-xl font-bold flex gap-[10px] items-center'>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
 
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px]  p-[20px] flex flex-col items-start justify-start gap-[10px]'>
  <div className='bg-blue-200 p-[10px] rounded-full text-blue-400'>
  <GiCube className='h-[35px] w-[35px]'/> 
  </div>

<h3 className='text-[] text-xl font-bold flex gap-[10px] items-center'>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
 
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px]  p-[20px] flex flex-col items-start justify-start gap-[10px]'>
  <div className='bg-blue-200 p-[10px] rounded-full text-blue-400'>
  <GiCube className='h-[35px] w-[35px]'/> 
  </div>

<h3 className='text-[] text-xl font-bold flex gap-[10px] items-center'>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
 
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px]  p-[20px] flex flex-col items-start justify-start gap-[10px]'>
  <div className='bg-blue-200 p-[10px] rounded-full text-blue-400'>
  <GiCube className='h-[35px] w-[35px]'/> 
  </div>

<h3 className='text-[] text-xl font-bold flex gap-[10px] items-center'>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
 
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px]  p-[20px] flex flex-col items-start justify-start gap-[10px]'>
  <div className='bg-blue-200 p-[10px] rounded-full text-blue-400'>
  <GiCube className='h-[35px] w-[35px]'/> 
  </div>

<h3 className='text-[] text-xl font-bold flex gap-[10px] items-center'>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
 

 

</div>
</div>

<div className='w-full  flex flex-col items-center justify-center'>

<div className='w-[70%] xl:w-10/12 flex justify-center items-center  flex-col gap-10 p- pb-14 '>
<h1 className='font-bold text-4xl'> Our tech Stack</h1>

<div className='grid w-full grid-cols-3 items-cente gap-10 sm:grid-cols-2 '>
{
  data.map((data,index)=>(


<div key={index}>
    <div  className='flex flex-col items-center justify-center'>

    <img src={data.img} alt="" class='h-[100px]  ' loading='lazy'/>


<p className='capitalize'>{data.title}</p>
</div>

</div>
  ))}

</div>

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


<div className='w-10/12 flex  flex-col items-center justify-center gap-10'>
<p className='font-semibold text-black text-4xl text-center'>Our Portfolio</p>
<video  className=''  muted  ref={videoRef}   loop >
        <source src={video1} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
    
</div>

<div className='w-10/12  flex  flex-col items-center justify-center gap-10'>
<p className='font-semibold text-black text-4xl text-center'>Partners</p>
<div className='flex justify-center items-center gap-[40px] sm:flex-col'>
<img src={partner1} alt="" className='w-[300px] xl:w-[150px]'/>
<img src="https://media.licdn.com/dms/image/D4D0BAQG-DR_ezu-pXw/company-logo_200_200/0/1702297267921/weklever_logo?e=1718236800&v=beta&t=uuoGb756DuAvmX4pKpTIvs75k4EPoR-JtKVggxq-b-8" alt="" className='w-[100px] h-[100px] xl:w-[50px] xl:h-[50px]'/>
<img src={partner2} alt="" className='w-[300px] xl: xl:w-[100px]'/>
</div>
</div>


<div className='xl:flex-col flex justify-center xl:items-center w-11/12  gap-24 '>

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