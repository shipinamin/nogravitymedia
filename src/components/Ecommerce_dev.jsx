import React, { useState } from "react";
import TestimonialCard from "./core/Ecommerce/TestimonialCard";
import { Carousel, Button } from "antd";
import Form_blackbg from "./common/Form_blackbg";
import { IoIosContact } from "react-icons/io";


const Ecomerce_dev = () => {
  const datawhy_whoose=[
    {
title:"Shopify Online Store Setup",
para:"Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration."
  },
    {
title:"Shopify Online Store Setup",
para:"Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration."
  },
    {
title:"Shopify Online Store Setup",
para:"Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration."
  },
    {
title:"Shopify Online Store Setup",
para:"Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration."
  },
    {
title:"Shopify Online Store Setup",
para:"Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration."
  },
    {
title:"Shopify Online Store Setup",
para:"Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration."
  },


]

const ourservices=[
  {
    title:"Mobile Development",
    toppara:"Developing robust and high-performance e-commerce mobile applications tailored for the Android platform, ensuring a seamless user experience across all Android devices.",
    para1:"Providing expertise in e-commerce mobile app development.",
    para2:"Providing expertise in e-commerce mobile app development.",
  },
  {
    title:"web Development",
    toppara:"Creating feature-rich e-commerce mobile applications with a single codebase, ensuring a consistent user experience across both Android and iOS platforms..",
    para1:"Providing expertise in e-commerce mobile app development.",
    para2:"Providing expertise in e-commerce mobile app development.",
  },
  {
    title:"Shopify Development",
    toppara:"Designing intuitive and visually appealing UI/UX for your e-commerce mobile app to ensure a delightful shopping experience and enhance brand loyalty.",
    para1:"Providing expertise in e-commerce mobile app development.",
    para2:"Providing expertise in e-commerce mobile app development.",
  },
]
const [category, setcategory] =useState(ourservices[0])

const ourtech=[
  {
    title:"Mobile Development",
    toppara:"We leverage cutting-edge mobile technologies to create seamless and engaging e-commerce applications that provide a superior user experience across both Android and iOS platforms.",
    para1:"Providing expertise in e-commerce mobile app development.",
    para2:"Providing expertise in e-commerce mobile app development.",
    para3:"Providing expertise in e-commerce mobile app development.",
    para4:"Providing expertise in e-commerce mobile app development.",
  },
  {
    title:"BACKEND TECHNOLOGIES",
    toppara:"Our backend technologies form the backbone of your e-commerce mobile app, ensuring it can handle high traffic loads, process transactions securely, and scale as your business grows.",
    para1:"Providing expertise in e-commerce mobile app development.",
    para2:"Providing expertise in e-commerce mobile app development.",
    para3:"Providing expertise in e-commerce mobile app development.",
    para4:"Providing expertise in e-commerce mobile app development.",
  },
  {
    title:"CLOUD PLATFORMS",
    toppara:"Designing intuitive and visually appealing UI/UX for your e-commerce mobile app to ensure a delightful shopping experience and enhance brand loyalty.",
    para1:"Providing expertise in e-commerce mobile app development.",
    para2:"Providing expertise in e-commerce mobile app development.",
    para3:"Providing expertise in e-commerce mobile app development.",
    para4:"Providing expertise in e-commerce mobile app development.",
  },
]
const [techcategory, settechcategory] =useState(ourtech[0])


  const data = [
    
    {
img:'https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png',
title:'Node js',

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

  const ECOMMERCE_APPS = [
    {
      title: "RETAIL APPS",
      para: "Direct-to-consumer mobile apps offering a seamless shopping experience, enabling customers to browse products, make purchases, and track orders on the go."
    },
    {
      title: "MARKETPLACE APPS",
      para: "Platforms that connect buyers and sellers, offering a wide range of products from multiple vendors, all in one place."
    },
    {
      title: "B2B E-COMMERCE APPS",
      para: "Mobile apps designed for wholesale distributors and manufacturers to streamline bulk ordering, inventory management, and customer relationship management."
    },
    // Add more objects as needed
  ];

  const testimonials = [
    {
      name: "Arthur Darde",
      position: "CTO at Otoqi",
      videoUrl: "https://www.youtube.com/embed/BYOCSftWNYE?si=4iXr0tynEfNm4GqT",
      quote: "They're committed and have the ability to scale up in order to deliver fast."
    },
    {
      name: "Ian deQueiroz",
      position: "CEO at SENDY",
      videoUrl: "https://www.example.com/video2",
      quote: "It is clear that they very carefully vet the people they hire."
    },
    // Add more testimonials as needed
  ];
  
  const testimonialRatings = [
    {
      testimonial: "Rasim Aliyev",
      position: "Co-founder and CEO at Raters",
      rating: 5,
      quote: "I desperately needed quality developers that would stick with me, and I'm certain Digis will do just that."
    },
    {
      testimonial: "John Wright",
      position: "Chief Technology Officer at Connectbase",
      rating: 5,
      quote: "The team has been innovative and reliable. Their experience and professionalism were admirable."
    },
    {
      testimonial: "William Chu",
      position: "Founder & CEO at Picup Media",
      rating: 4.5,
      quote: "Priorities of each task were delivered with a strong balance between business and development goals."
    },
    // Add more testimonial ratings as needed
  ];

  const custom_reviews = [
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "4",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "5",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "4",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "5",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "5",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "5",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center pt-[150px] w-[85vw] gap-[80px]">
      <div className="flex xl:flex-col gap-[100px] ">

        <div className="min-xl:w-[35vw] flex items-center min-xl:items-start flex-col gap-[20px]" >
          <p className="font-[700] text-5xl leading-[60px] xl:text-center">E-COMMERCE  MOBILE APP  DEVELOPMENT  SERVICES</p>

          <p className="font-[300] leading-[30px] xl:text-center">
            We offer specialized mobile app development services  to advance your
            e-commerce business, ensuring a captivating  and user-friendly mobile
            shopping experience.
          </p>
          <div className="bg-[#F6AE3A] hover:bg-[#FACE87] text-white font-bold  rounded-md px-[15px] text-nowrap py-[15px] cursor-pointer flex items-center">SCHEDULE A CALL</div>
        </div>


<div className="flex flex-col gap-[20px] text-yellow-400">

<div className="flex gap-[20px] ">

<div className="py-[20px] pl-[10px] xl:w-full w-[250px] h-[150px] text-[#F6AE3A] flex  flex-col bg-[#031339] rounded-[15px]">
    <p className="text-[28px] font-[700] ">30 +</p>
    <p className="text-[22px] text-white font-[200]">mobile development experts</p>
</div>
<div className="py-[20px] xl:w-full pl-[10px] w-[250px] h-[150px] text-[#F6AE3A] flex min-xl:relative top-[20px] flex-col bg-[#031339] rounded-[15px]">
    <p className="text-[28px] font-[700] ">30 +</p>
    <p className="text-[22px] text-white font-[200]">mobile development experts</p>
</div>



</div>

<div className="flex gap-[20px]">

<div className="py-[20px] pl-[10px] xl:w-full w-[250px] h-[150px] text-[#F6AE3A] min-xl:relative right-[20px] flex  flex-col bg-[#031339] rounded-[15px]">
    <p className="text-[28px] font-[700] ">30 +</p>
    <p className="text-[22px] text-white font-[200]">mobile development experts</p>
</div>
<div className="py-[20px] xl:w-full pl-[10px] w-[250px] h-[150px] text-[#F6AE3A] min-xl:relative top-[20px]  right-[20px]  flex  flex-col bg-[#031339] rounded-[15px]">
    <p className="text-[28px] font-[700] ">30 +</p>
    <p className="text-[22px] text-white font-[200]">mobile development experts</p>
</div>



</div>



</div>


</div>


<div className="flex flex-col gap-[50px]">

<h2 className="font-[600] text-[35px] xl:text-center">WHY CHOOSE US</h2>
<div className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-[40px] place-items-center xl:w-full'>


{
  datawhy_whoose.map((data,index)=>(

  <div className='hover:shadow-2xl text-[#031339] rounded-[15px] xl:w-full w-[376px] bg-[#F4F6FE]   border p-[20px] flex flex-col items-start justify-start gap-[10px] ' key={index}>
<IoIosContact className="text-[#031339]  h-[30px] w-[30px]"/>
<h3 className=' text-xl font-bold '>{data.title}</h3>
<p className='leading-[25px] font-[200] text-[20px]'>{data.para}</p>
  </div>
     
     ))
    }
    


</div>

</div>

<div className="flex xl:flex-col gap-[30px] w-[80vw]"> 

<div className="flex flex-col gap-[20px]">

{
  ourservices.map((data,index)=>(

<div className={`w-[40vw] xl:text-[22px] xl:w-full  cursor-pointer px-[10px] py-[30px] text-[30px] font-[600]  rounded-[10px] tracking-widest  ${(data.title === category.title) ? "bg-[#031339] hover:bg-[#031339] text-[white]" : "hover:bg-[#D0DCFA] bg-[#F4F6FE]"}`} onClick={() => setcategory(ourservices[index])}>
{
  data.title
}
</div>

  ))
}
</div>


<div>
<p className="font-[200] text-[20px]">{category.toppara}</p>
<p className="border-b border-gray-300 py-[20px] px-[10px] font-[600] text-[22px]">{category.para1}</p>
<p className="py-[20px] px-[10px] font-[600] text-[22px]">{category.para2}</p>


</div>


</div>



<div className="flex flex-col gap-[30px] w-[80vw]"> 

<div className="flex xl:flex-col  gap-[20px]">

{
  ourtech.map((data,index)=>(

<div className={` cursor-pointer px-[px] py-[px] font-[700]   tracking-widest  ${(data.title === techcategory.title) ? "border-b-[5px] border-blue-700 text-blue-700 " : "hover:text-blue-700"}`} onClick={() => settechcategory(ourtech[index])}>
{
  data.title
}
</div>

  ))
}
</div>


<div>

  <div className="bg-[#F4F6FE] py-[10px] px-[20px] rounded-[10px] w-[40vw] xl:w-full">

<p className=" font-[600] text-[#243763]  text-[22px] leading-[50px] ">{techcategory.title}</p>
<p className="font-[200] text-[#243763]  text-[20px] leading-[30px] pb-[10px]">{techcategory.toppara}</p>
<p className="text-[18px] text-[#243763]  font-[200]  leading-[30px] ">  {techcategory.para1}</p>
<p className="text-[18px] text-[#243763]  font-[200]  leading-[30px] ">  {techcategory.para2}</p>
<p className="text-[18px] text-[#243763]  font-[200]  leading-[30px] ">  {techcategory.para3}</p>
<p className="text-[18px]  text-[#243763] font-[200]  leading-[30px] ">  {techcategory.para4}</p>
</div>

<div>

</div>


</div>


</div>

<div class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-semibold mb-6">OUR E-COMMERCE APP SOLUTIONS</h2>
    <div className="grid grid-cols-2 xl:grid-cols-1 gap-2">

    <div class="bg-white  border-b  border-[#D0DCFA]  p-6 mb-6">
      <h3 class="text-lg font-semibold mb-4">CUSTOM E-COMMERCE MOBILE APPS</h3>
      <ul class="list-disc pl-6">
        <li class="mb-2">Tailored mobile apps that reflect your brand identity and cater to your specific business requirements.</li>
        <li class="mb-2">Features like easy navigation, secure payment gateways, and real-time inventory management to provide a seamless shopping experience.</li>
      </ul>
    </div>
    <div class="bg-white  border-b  border-[#D0DCFA]  p-6 mb-6">
      <h3 class="text-lg font-semibold mb-4">SHOPPING CART INTEGRATION</h3>
      <ul class="list-disc pl-6">
        <li class="mb-2">Smooth and secure shopping cart solutions that simplify the checkout process and reduce cart abandonment rates.</li>
        <li class="mb-2">Integration with various payment gateways for a hassle-free transaction experience.</li>
      </ul>
    </div>
    <div class="bg-white  border-b  border-[#D0DCFA] p-6 mb-6">
      <h3 class="text-lg font-semibold mb-4">PAYMENT GATEWAY INTEGRATION</h3>
      <ul class="list-disc pl-6">
        <li class="mb-2">Secure and reliable payment gateway solutions to ensure safe transactions.</li>
        <li class="mb-2">Support for multiple payment options including credit cards, digital wallets, and more.</li>
      </ul>
    </div>
    <div class="bg-white  border-b  border-[#D0DCFA] p-6 mb-6">
      <h3 class="text-lg font-semibold mb-4">ANALYTICS AND REPORTING</h3>
      <ul class="list-disc pl-6">
        <li class="mb-2">In-depth analytics to track user behavior, sales trends, and app performance.</li>
        <li class="mb-2">Customizable reporting tools to make data-driven decisions for your business.</li>
      </ul>
    </div>
  </div>
  </div>


  <div className=" w-screen  text-white bg-[#031339]">
      <div className="w-[90vw] container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8">E-COMMERCE APPS WE CAN DEVELOP</h2>
        <div className="grid grid-cols-3 xl:grid-cols-1 gap-8">
          {ECOMMERCE_APPS.map((app, index) => (
         <div className="border-[#243663] border rounded-[15px] p-6 shadow-md" key={index}>
         <h3 className="text-lg font-semibold mb-4">{app.title}</h3>
         <p className="">{app.para}</p>
       </div>
          ))}
        </div>
      </div>
    </div>

  <div className=" w-screen  text-black bg-[#FAFBFF]">
      <div className="w-[90vw] container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8">TECH INNOVATIONS FOR YOUR E-COMMERCE APP</h2>
        <div className="grid grid-cols-2 gap-8 xl:grid-cols-1">
          {ECOMMERCE_APPS.map((app, index) => (
         <div className="border-grey border rounded-[15px] p-6 cursor-pointer hover:bg-[#F4F6FE]" key={index}>
         <h3 className="text-lg font-semibold mb-4">{app.title}</h3>
         <p className="">{app.para}</p>
       </div>
          ))}
        </div>
      </div>



    </div>

<div className="bg-[#FAFBFF] w-screen flex items-center flex-col">

       <div className=" flex xl:flex-col items-center xl:jusitfy-center xl:w-[90vw] min-xl:gap-[100px]">
      <div className="container mx-auto xl:flex flex-col justify-center py-12">
        <h2 className="text-3xl font-bold mb-8 xl:text-center">READY TO ELEVATE YOUR E-COMMERCE EXPERIENCE?</h2>
          <p className="text-gray-700 min-xl:w-[50vw] mb-4 md:mb-0 xl:text-center">Our mobile app experts are just a call away. Discuss your project with us and discover how we can <span className="font-bold">transform your e-commerce vision</span> into a user-friendly mobile app.</p>
      </div>
          <div className="bg-[#F6AE3A] hover:bg-[#FACE87] text-white font-bold  rounded-md px-[15px] text-nowrap py-[15px] cursor-pointer flex items-center">SCHEDULE A CALL</div>
    </div>

    <div className="w-[90vw]">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8">TESTIMONIALS</h2>
        <div className="grid grid-cols-2  xl:grid-cols-1 min-xl:grid-cols-3 gap-8 ">
          {testimonials.map((testimonial, index) => (
            // <TestimonialCard key={index} {...testimonial} />

            <div className=" p-6 rounded-lg shadow-md ">
            <div className="flex items-center mb-4">
              <img src="https://via.placeholder.com/50" alt={testimonial.name} className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
            <div className="mb-4">
              {/* <video controls className="w-full">
                <source src={testimonial.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}

<iframe className="w-full" height="315" src={testimonial.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <blockquote className="text-gray-700">{testimonial.quote}</blockquote>
          </div>
          ))}
        </div>
      </div>
    </div>



    <div className="w-[90vw]  custom-xl-max:w-[92vw] flex flex-col gap-[32px]">
        {/* <h1 className="font-serif font-semibold text-3xl">Customer Reviews</h1> */}
        <div className="flex flex-col">
          <Carousel
            className="pb-[54px] carousel_categories"
            slidesToShow={3}
            autoplay
            autoplaySpeed={2000}
            responsive={[
              {
                breakpoint: 1345,
                settings: {
                  slidesToShow: 3,
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
            {custom_reviews.map((data, index) => (
              <div className="">
                <div
                  className="p-[20px] w-[408px] h-[250px] bg-white border-gray-100 border hover:bg-[#E5F1FF] flex flex-col gap-[24px]  rounded-[10px]"
                  key={index}
                >
                  <div className="flex justify-between">
                    <svg
                      width="30"
                      height="23"
                      viewBox="0 0 30 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.63833 20.8683C0.921667 19.045 0 17 0 13.685C0 7.85166 4.095 2.62333 10.05 0.0383301L11.5383 2.335C5.98 5.34166 4.89333 9.24333 4.46 11.7033C5.355 11.24 6.52667 11.0783 7.675 11.185C10.6817 11.4633 13.0517 13.9317 13.0517 17C13.0517 18.5471 12.4371 20.0308 11.3431 21.1248C10.2492 22.2188 8.76543 22.8333 7.21833 22.8333C6.36276 22.8259 5.51723 22.6483 4.73094 22.3109C3.94465 21.9736 3.23331 21.4832 2.63833 20.8683ZM19.305 20.8683C17.5883 19.045 16.6667 17 16.6667 13.685C16.6667 7.85166 20.7617 2.62333 26.7167 0.0383301L28.205 2.335C22.6467 5.34166 21.56 9.24333 21.1267 11.7033C22.0217 11.24 23.1933 11.0783 24.3417 11.185C27.3483 11.4633 29.7183 13.9317 29.7183 17C29.7183 18.5471 29.1038 20.0308 28.0098 21.1248C26.9158 22.2188 25.4321 22.8333 23.885 22.8333C23.0294 22.8259 22.1839 22.6483 21.3976 22.3109C20.6113 21.9736 19.9 21.4832 19.305 20.8683Z"
                        fill="#475569"
                      />
                    </svg>
                    <div>
                      <svg
                        width="120"
                        height="24"
                        viewBox="0 0 120 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4697 7.60081C14.6035 8.01284 14.9875 8.2918 15.4207 8.2918H20.335C21.3037 8.2918 21.7065 9.53141 20.9228 10.1008L16.947 12.9894C16.5966 13.244 16.4499 13.6954 16.5838 14.1074L18.1024 18.7812C18.4017 19.7025 17.3472 20.4686 16.5635 19.8992L12.5878 17.0106C12.2373 16.756 11.7627 16.756 11.4122 17.0106L7.43648 19.8992C6.65276 20.4686 5.59828 19.7025 5.89763 18.7812L7.41623 14.1074C7.55011 13.6954 7.40345 13.244 7.05296 12.9894L3.07722 10.1008C2.29351 9.53141 2.69628 8.2918 3.66501 8.2918H8.57929C9.01252 8.2918 9.39647 8.01284 9.53035 7.60081L11.0489 2.92705Z"
                          fill="#F5C544"
                        />
                        <path
                          d="M35.0489 2.92705C35.3483 2.00574 36.6517 2.00574 36.9511 2.92705L38.4697 7.60081C38.6035 8.01284 38.9875 8.2918 39.4207 8.2918H44.335C45.3037 8.2918 45.7065 9.53141 44.9228 10.1008L40.947 12.9894C40.5966 13.244 40.4499 13.6954 40.5838 14.1074L42.1024 18.7812C42.4017 19.7025 41.3472 20.4686 40.5635 19.8992L36.5878 17.0106C36.2373 16.756 35.7627 16.756 35.4122 17.0106L31.4365 19.8992C30.6528 20.4686 29.5983 19.7025 29.8976 18.7812L31.4162 14.1074C31.5501 13.6954 31.4034 13.244 31.053 12.9894L27.0772 10.1008C26.2935 9.53141 26.6963 8.2918 27.665 8.2918H32.5793C33.0125 8.2918 33.3965 8.01284 33.5303 7.60081L35.0489 2.92705Z"
                          fill="#F5C544"
                        />
                        <path
                          d="M59.0489 2.92705C59.3483 2.00574 60.6517 2.00574 60.9511 2.92705L62.4697 7.60081C62.6035 8.01284 62.9875 8.2918 63.4207 8.2918H68.335C69.3037 8.2918 69.7065 9.53141 68.9228 10.1008L64.947 12.9894C64.5966 13.244 64.4499 13.6954 64.5838 14.1074L66.1024 18.7812C66.4017 19.7025 65.3472 20.4686 64.5635 19.8992L60.5878 17.0106C60.2373 16.756 59.7627 16.756 59.4122 17.0106L55.4365 19.8992C54.6528 20.4686 53.5983 19.7025 53.8976 18.7812L55.4162 14.1074C55.5501 13.6954 55.4034 13.244 55.053 12.9894L51.0772 10.1008C50.2935 9.53141 50.6963 8.2918 51.665 8.2918H56.5793C57.0125 8.2918 57.3965 8.01284 57.5303 7.60081L59.0489 2.92705Z"
                          fill="#F5C544"
                        />
                        <path
                          d="M83.0489 2.92705C83.3483 2.00574 84.6517 2.00574 84.9511 2.92705L86.4697 7.60081C86.6035 8.01284 86.9875 8.2918 87.4207 8.2918H92.335C93.3037 8.2918 93.7065 9.53141 92.9228 10.1008L88.947 12.9894C88.5966 13.244 88.4499 13.6954 88.5838 14.1074L90.1024 18.7812C90.4017 19.7025 89.3472 20.4686 88.5635 19.8992L84.5878 17.0106C84.2373 16.756 83.7627 16.756 83.4122 17.0106L79.4365 19.8992C78.6528 20.4686 77.5983 19.7025 77.8976 18.7812L79.4162 14.1074C79.5501 13.6954 79.4034 13.244 79.053 12.9894L75.0772 10.1008C74.2935 9.53141 74.6963 8.2918 75.665 8.2918H80.5793C81.0125 8.2918 81.3965 8.01284 81.5303 7.60081L83.0489 2.92705Z"
                          fill="#F5C544"
                        />
                        <path
                          d="M107.049 2.92705C107.348 2.00574 108.652 2.00574 108.951 2.92705L110.47 7.60081C110.604 8.01284 110.987 8.2918 111.421 8.2918H116.335C117.304 8.2918 117.706 9.53141 116.923 10.1008L112.947 12.9894C112.597 13.244 112.45 13.6954 112.584 14.1074L114.102 18.7812C114.402 19.7025 113.347 20.4686 112.564 19.8992L108.588 17.0106C108.237 16.756 107.763 16.756 107.412 17.0106L103.436 19.8992C102.653 20.4686 101.598 19.7025 101.898 18.7812L103.416 14.1074C103.55 13.6954 103.403 13.244 103.053 12.9894L99.0772 10.1008C98.2935 9.53141 98.6963 8.2918 99.665 8.2918H104.579C105.013 8.2918 105.396 8.01284 105.53 7.60081L107.049 2.92705Z"
                          fill="#F5C544"
                        />
                      </svg>
                    </div>
                  </div>

                  <p className="text-[18px] leading-[28px]">{data.comment}</p>

                  <div className="flex gap-[8px]">
                    <div
                      className="w-[36px] h-[36px] rounded-full bg-cover"
                      style={{ backgroundImage: `url(${data.user_image})` }}
                    ></div>

                    <div className="flex flex-col">
                      <p className="capitalize text-[14px] font-bold  text-[#0F172A] 	">
                        {data.username}
                      </p>
                      <p className="capitalize text-[12px] text-[#475569] tetx-[12px] ">
                        {data.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
{/* 
    <div className="bg-gray-100 min-h-screen ">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8">TELL US ABOUT YOUR NEEDS</h2>


        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialRatings.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        
      </div>
    </div> */}
    


    <Form_blackbg/>

  

    </div>
  );
};

export default Ecomerce_dev;
