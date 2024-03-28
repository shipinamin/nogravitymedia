import React from 'react'
import Herosection from '../common/Herosection'
import Button from "../Button"
import herobg from "../../assets/Shopify-Development-1.jpg"
import img1 from "../../assets/shopifypg-img1.jpeg"
import { GiCube } from "react-icons/gi";
import Faq_comp from '../common/Faq_comp';
const Shopify_website = () => {
    const data = [
        {
          title:"Expertise:",
          para:"With years of experience in the industry, our team brings a wealth of knowledge and expertise to every project we undertake.",
        },
        {
          title:"Innovation:",
          para:"We stay at the forefront of technology trends, constantly exploring new possibilities and pushing the boundaries of what's possible.",
        },
        {
          title:"Customer-Centric Approach:",
          para:"Your satisfaction is our top priority. We work closely with you to understand your unique needs and tailor our solutions accordingly.",
        },
        {
          title:"Reliability:",
          para:"When you choose No Gravity Media, you can trust that your project is in capable hands. We pride ourselves on delivering reliable, high-quality solutions, on time and within budget",
        },
      ]


      const freq_ask_ques=[
        {
          questions:"Who is Shopify best suited for?",
          answers:"Shopify works with all operating systems and automatically gets updated. Shopify works best for small businesses that want to create a true online shop with high functionalities."
        },
        {
          questions:"Can I use my domain name with Shopify?",
          answers:"Yes, it is easy to register a domain with Shopify. To register your domain, log into the Shopify store admin, click Preferences, then choose Domains & DNS."
        },
        {
          questions:"How much does it cost to develop a Shopify store?",
          answers:"The medium-sized eCommerce storefront can be developed for $2,500-$3,000. However, the cost varies based on the functionality and features."
        },


      ]
    
  return (
    <div className='w-full flex flex-col items-center justify-center gap-[70px] pb-[100px]'>
    {/* <Herosection data={"ABOUT US"}/> */}

    <div className='flex flex-col justify-center bg-cover w-screen items-start xl:items-center  min-xl:pl-[80px] xl:pl-[px] mt-[100px] xl:mt-[80px] py-[70px]' style={{backgroundImage:`url(${herobg})`}}>


<div className='w-[90vw] flex flex-col  gap-[30px] '>

<div className='flex flex-col gap-[20px] text-white'>
<p className='text-5xl  font-[600] xl:text-4xl md:text-3xl'>Shopify Development <br /> Company</p>
{/* <p className='text-6xl font-serif font-[540] text-[#E13B44] xl:text-5xl'>Experience available in an instant.</p> */}

</div>

<p className='text-[white] font-[300] leading-5 '>Empower your online store with our Shopify development services. Deliver superior <br /> e-commerce  experiences with advanced store design and adept deployment – and <br /> boost your customer’s journey!

</p>

<div className=''>
{/* <button className='py-[15px] px-[40px] bg-[#01ABF4] rounded-[0px] text-[white] font-[300] cursor-pointer hover:bg-[#E35C63]'>

Talk To Our Experts!
</button> */}

<Button data={"Talk To Our Experts!"} className={"bg-[#01ABF4] rounded-full "}/>

</div>


</div>

</div>


<div className='w-[90vw] flex flex-col gap-[30px]'>
<h1 className='text-5xl xl:text-4xl font-[550] text-[#3D3D3D] md:text-3xl'>Transform and Enrich eCommerce Experiences for Your Customers</h1>
<div className='flex xl:flex-col min-xl:gap-[100px] xl:gap-[20px]'>
  <div className='felx flex-col  leading-[30px]'>

  <p className='font-[300]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus quo, quam earum illum laboriosam voluptatem! Odit sed, quia voluptate similique optio sint fuga eum soluta modi sit non, aliquam quis at! Quas et eveniet at autem id, consectetur enim.
  </p>
  <p className='font-[300]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus quo, quam earum illum laboriosam voluptatem! Odit sed, quia voluptate similique optio sint fuga eum soluta modi sit non, aliquam quis at! Quas et eveniet at autem id, consectetur enim.
  </p>
  </div>

  <img src={img1} className='h-[288px] object-cover' alt="" />
</div>
</div>

<div className='w-[90vw] flex flex-col items-center justify-center sm:items-start gap-[30px]'>
<h1 className='text-5xl xl:text-4xl md:text-3xl font-[600] text-[#3D3D3D]'>Our Shopify Development Services</h1>

<p className='font-[300] text-center sm:text-start'>From building a robust Shopify-powered e-commerce store to making your existing website feature-rich with our custom design, Successive Digital has years of proven experience delivering tailor-made Shopify solutions that scale.</p>


<div className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-[40px] place-items-center xl:w-full'>

  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px] border p-[20px] flex flex-col items-start justify-start gap-[10px]'>
<h3 className='text-[#f30e0e] text-xl font-bold '>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
 
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px] border p-[20px] flex flex-col items-start justify-start gap-[10px]'>
<h3 className='text-[#f30e0e] text-xl font-bold '>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px] border p-[20px] flex flex-col items-start justify-start gap-[10px]'>
<h3 className='text-[#f30e0e] text-xl font-bold '>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px] border p-[20px] flex flex-col items-start justify-start gap-[10px]'>
<h3 className='text-[#f30e0e] text-xl font-bold '>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px] border p-[20px] flex flex-col items-start justify-start gap-[10px]'>
<h3 className='text-[#f30e0e] text-xl font-bold '>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px] border p-[20px] flex flex-col items-start justify-start gap-[10px]'>
<h3 className='text-[#f30e0e] text-xl font-bold '>Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
 

</div>


</div>

<div className='w-[90vw] flex flex-col items-center justify-center sm:items-start gap-[30px]'>
<h1 className='text-5xl xl:text-4xl md:text-3xl font-[600] text-[#3D3D3D] min-xl:text-center '>Build A Shopping Journey That Feels Tailor-Made For “Them” With Our Shopify Expertise</h1>

<p className='font-[300] text-center sm:text-start'>With innovation at the center, our Shopify solutions help businesses optimize their digital store with customized content and streamlined payment experiences.</p>


<div className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-[40px] place-items-center xl:w-full'>

  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px] border p-[20px] flex flex-col items-start justify-start gap-[10px]'>
<h3 className='text-[#f30e0e] text-xl font-bold flex gap-[10px] items-center'> <GiCube/> Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px] border p-[20px] flex flex-col items-start justify-start gap-[10px]'>
<h3 className='text-[#f30e0e] text-xl font-bold flex gap-[10px] items-center'> <GiCube/> Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px] border p-[20px] flex flex-col items-start justify-start gap-[10px]'>
<h3 className='text-[#f30e0e] text-xl font-bold flex gap-[10px] items-center'> <GiCube/> Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>
  <div className='hover:shadow-2xl rounded-md w-[376px] xl:w-[346px] h-[266px] border p-[20px] flex flex-col items-start justify-start gap-[10px]'>
<h3 className='text-[#f30e0e] text-xl font-bold flex gap-[10px] items-center'> <GiCube/> Shopify Online Store Setup</h3>
<p className='leading-[25px] font-[300]'>Our Shopify experts handle the end-to-end establishment of your online store- from strategizing to installation and custom configuration.</p>
  </div>

 

</div>


</div>




{/* <div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 pt-24 pb-14 leading-10'>
<p className='text-4xl font-bold'>Welcome to No Gravity Media
</p>
<p className='font-light min-xl:text-2xl min-xl:leading-9  '>where innovation meets excellence in IT solutions. Founded with a vision to redefine the digital landscape, we are a dynamic team of tech enthusiasts dedicated to empowering businesses with cutting-edge technology.
</p>
</div>



<div>
  <img src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg" alt="" className='w-screen' />
</div> */}


{/* 
<div className='w-full bg-[#EFF0F1] flex flex-col items-center justify-center'>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-8  '>
<h1 className='font-bold text-4xl'>Our  <span className='font-extrabold'>story</span> </h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>No Gravity Media began as a passion project, born out of a desire to revolutionize the way businesses leverage technology to achieve their goals. With a shared vision and a relentless drive for innovation, our founders embarked on a journey to create a company that would not only meet but exceed the expectations of our clients.

</p>

<img src="https://static.vecteezy.com/system/resources/previews/003/001/221/non_2x/freehand-world-map-sketch-on-white-background-free-vector.jpg" alt="" />

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'> Be it acquisition, loyalty, or cross/up-selling strategies, we generate a high impact across all business goals, supported by proprietary methodologies. This is because our approach to digital marketing is not focused on the development of digital campaigns, but on the creation of long-term relationships.</p>
</div>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-8  '>
<h1 className='font-bold text-4xl'>Our  <span className='font-extrabold'>Mission</span> </h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>At No Gravity Media, our mission is simple: to empower businesses to reach beyond boundaries. We believe that technology should be a catalyst for growth, driving businesses forward and propelling them to new heights of success. Through our innovative solutions and unwavering commitment to excellence, we aim to be the driving force behind your digital transformation journey.

</p>

<img src="https://www.liquidplanner.com/wp-content/uploads/2013/12/iStock-520289888-2-e1641284826152.jpg" alt="" />

</div>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-8  '>
<h1 className='font-bold text-4xl'>Our  <span className='font-extrabold'>Team</span> </h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>Behind every successful project is a dedicated team of professionals, and at No Gravity Media, we are fortunate to have some of the best and brightest minds in the industry. From developers and designers to project managers and digital marketers, each member of our team brings a unique set of skills and perspectives to the table, allowing us to tackle even the most complex challenges with ease.
</p>

<img src="https://img.freepik.com/premium-photo/team-concept-with-two-man-sunset-background_493806-6439.jpg" alt="" />

</div>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-24 '>
<h1 className='font-bold text-4xl'>Let's <span className='font-extrabold'>Connect</span> </h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>Behind every successful project is a dedicated team of professionals, and at No Gravity Media, we are fortunate to have some of the best and brightest minds in the industry. From developers and designers to project managers and digital marketers, each member of our team brings a unique set of skills and perspectives to the table, allowing us to tackle even the most complex challenges with ease.
</p>


</div>



</div> */}



<div className='w-11/12 flex flex-col gap-[40px] pb-[100px] items-center'>

<p className='text-4xl font-bold'>Frequently Asked Question</p>
<div className='w-full flex justify-center'>
<Faq_comp freq_ask_ques={freq_ask_ques}/>
</div>
</div>


  </div>
  )
}

export default Shopify_website