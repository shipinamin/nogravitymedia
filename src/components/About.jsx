import React from 'react'

import Herosection from './common/Herosection'
import Cardcarousel from './Cardcarousel'
import people1 from '../assets/ourpeople/PHOTO-2024-03-13-15-44-10.jpg'
import people2 from '../assets/ourpeople/PHOTO-2024-03-13-15-47-19.jpg'
import people3 from '../assets/ourpeople/WhatsApp Image 2024-03-13 at 18.15.26.jpeg'
import people4 from '../assets/ourpeople/WhatsApp Image 2024-03-15 at 14.48.38.jpeg'
import { Link } from 'react-router-dom'
const About = () => {

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

  const our_peopledata=[
    {
      name:"Hashir Khan",
      img:people1,
      desination:"Founder",
      linkedin:""
    },
    {
      name:"Saquib Abdullah",
      img:people2,
      desination:"Co-Founder",
      linkedin:""
    },
    {
      name:"Dhruv Sharma ",
      img:people4,
      desination:"UI/UX Designer",
      linkedin:"https://www.linkedin.com/in/dhruv-sharma-452a2724a/"
    },
    {
      name:"Nishat Alam",
      img:people3,
      desination:"Full Stack Developer",
      linkedin:"https://www.linkedin.com/in/nishat-alam-0bb021214/"
    },
   
  ]

  return (
    <div className='w-full flex flex-col items-center justify-center '>
      {/* <Herosection data={"ABOUT US"}/> */}



<div className='flex flex-col justify-center min-xl:h-[100vh]  w-screen items-start xl:items-center min-xl:pl-[150px] xl:pl-[10px]'>


<div className='w-[80vw] flex flex-col  gap-[50px] xl:gap-[30px] relative min-xl:top-[100px] xl:pt-[170px]'>

<div className='flex flex-col gap-[20px]'>
<p className='text-6xl font-serif font-[540] xl:text-4xl'>Years of software development</p>
<p className='text-6xl font-serif font-[540] text-[#E13B44] xl:text-4xl'>Experience available in an instant.</p>

</div>

<p className='text-[#828282] font-[300] leading-5'>We empower Businesses to win in today’s competitive digital economy by providing expert engineering and consultancy services. Choosing the right people, the most appropriate technology and effective and transparent processes,<span className='font-[500]'>we ensure absolute efficiency.</span>  </p>

<div className=''>
<Link to="/Contact us">
  <span className='py-[15px] px-[40px] bg-[#E3333E] rounded-[0px] text-[white] font-[300] cursor-pointer hover:bg-[#E35C63]'>
    Contact us
  </span>
</Link>

</div>

<div className='w-[80vw]  shadow-lg px-[0px] py-[40px] grid grid-cols-4 relative top-[50px] xl:grid-cols-2 gap-[20px]'>

<div className='flex flex-col items-center justify-center gap-[10px]'>
  <p className='text-3xl xl:text-2xl font-[500] text-[#515151] '>10+</p>
  <p className='text-[#8C8C8C] font-[300]'> Countries Covered</p>
</div>
<div className='flex flex-col items-center justify-center gap-[10px]'>
  <p className='text-3xl  xl:text-2xl font-[500] text-[#515151] '>Top 1% firm</p>
  <p className='text-[#8C8C8C] font-[300]'> Countries Covered</p>
</div>
<div className='flex flex-col items-center justify-center gap-[10px]'>
  <p className='text-3xl xl:text-2xl font-[500] text-[#515151] '>2.5x</p>
  <p className='text-[#8C8C8C] font-[300] text-center'> Growth in the last 2 years</p>
</div>
<div className='flex flex-col items-center justify-center gap-[10px]'>
  <p className='text-3xl xl:text-2xl font-[500] text-[#515151] '>5-star</p>
  <p className='text-[#8C8C8C] font-[300]'> Verified rating</p>
</div>

</div>

</div>

</div>


<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 pt-24 pb-14 leading-10'>
<p className='text-4xl font-bold'>Welcome to No Gravity Media
</p>
<p className='font-light min-xl:text-2xl min-xl:leading-9  '>where innovation meets excellence in IT solutions. Founded with a vision to redefine the digital landscape, we are a dynamic team of tech enthusiasts dedicated to empowering businesses with cutting-edge technology.
</p>
</div>

<div className='w-full  flex flex-col items-center justify-center'>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 p- pb-14 '>
<h1 className='font-bold text-4xl'> Why Choose  <span className='font-extrabold'>No Gravity Media?</span> </h1>

<div className='flex items-cente gap-4 flex-col'>
  {
    data.map((data,index)=>(


  <div key={index}>
<p className='min-xl:text-2xl min-xl:leading-9 tracking-wider font-light'><span className='font-bold text:xl '>{data.title}</span> {data.para}</p>
</div>
    ))}

</div>

</div>

</div>


{/* <div>
    <img src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg" alt="" className='w-screen' />
</div> */}


<div className='w-[80%] xl:w-10/12  flex justify-center flex-col gap-5 pt-24 pb-14 leading-10'>
<p className='text-4xl text-center font-bold'>Our People
</p>

{/* <div className='grid grid-cols-3  xl:grid-cols-2 md:grid-cols-1 w-full    pb-[50px]  gap-[100px]'>
{
our_peopledata.map((data,index) =>(

<div className=' w-[300px] h-[350px]' key={index}>
<div className='w-[337px] h-[337px] bg-center bg-cover' style={{backgroundImage: `url("${data.img}")`}}></div>
<p className='text-[18px] font-bold'>{data.name}</p>
<p className='text-[18px] font-semibold'>{data.desination}</p>
</div>
))
}
</div> */}
<div className='grid grid-cols-4  xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full    pb-[50px]  '>
{
our_peopledata.map((data,index) =>(
<div class=" p-4 rounded-lg  sm:flex gap-10 sm:gap-5" key={index}>
    <div class="flex justify-center">
        <img src={data.img} alt="Profile Image" class="rounded-full border-4 border-gray-200 w-[200px] h-[200px] sm:w-[90px] sm:h-[90px]   object-cover   object-center transition duration-300 transform hover:scale-110"/>
        {/* <img src={data.img} alt="Profile Image" class="rounded-full border-4 border-gray-200 w-200 h-200 sm:w-90 sm:h-90 object-cover object-center transition duration-300 transform hover:scale-105"/> */}

        <a href={data.linkedin} target="_blank" className='hover:bg-white shadow-xl h-[30px] w-[30px] rounded-full relative top-[150px] sm:top-[50px] sm:right-[25px] right-[50px] bg-blue-400'></a>
    </div>
    <div class="mt-4 text-center sm:text-start">
        <h2 class="text-2xl sm:text-xl font-semibold">{data.name}</h2>
        <p class="text-xl sm:text-base font-[500] text-gray-600">{data.desination}</p>
    </div>
</div>

))
}
</div>
</div>

{/* 
<div className='w-full bg-[#EFF0F1] flex flex-col items-center justify-center'>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-8  '>
<h1 className='font-bold text-4xl'>Our  <span className='font-extrabold'>story</span> </h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>No Gravity Media began as a passion project, born out of a desire to revolutionize the way businesses leverage technology to achieve their goals. With a shared vision and a relentless drive for innovation, our founders embarked on a journey to create a company that would not only meet but exceed the expectations of our clients.

</p>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'> Be it acquisition, loyalty, or cross/up-selling strategies, we generate a high impact across all business goals, supported by proprietary methodologies. This is because our approach to digital marketing is not focused on the development of digital campaigns, but on the creation of long-term relationships.</p>
</div>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-8  '>
<h1 className='font-bold text-4xl'>Our  <span className='font-extrabold'>Mission</span> </h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>At No Gravity Media, our mission is simple: to empower businesses to reach beyond boundaries. We believe that technology should be a catalyst for growth, driving businesses forward and propelling them to new heights of success. Through our innovative solutions and unwavering commitment to excellence, we aim to be the driving force behind your digital transformation journey.

</p>


</div>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-8  '>
<h1 className='font-bold text-4xl'>Our  <span className='font-extrabold'>Team</span> </h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>Behind every successful project is a dedicated team of professionals, and at No Gravity Media, we are fortunate to have some of the best and brightest minds in the industry. From developers and designers to project managers and digital marketers, each member of our team brings a unique set of skills and perspectives to the table, allowing us to tackle even the most complex challenges with ease.
</p>


</div>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-24 '>
<h1 className='font-bold text-4xl'>Let's <span className='font-extrabold'>Connect</span> </h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>Behind every successful project is a dedicated team of professionals, and at No Gravity Media, we are fortunate to have some of the best and brightest minds in the industry. From developers and designers to project managers and digital marketers, each member of our team brings a unique set of skills and perspectives to the table, allowing us to tackle even the most complex challenges with ease.
</p>


</div>



</div> */}





    </div>
  )
}

export default About