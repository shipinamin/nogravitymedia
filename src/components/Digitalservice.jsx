import React from 'react'
import Herosection from './common/Herosection'
import Card from './Card'
import Portfoliocard from './Portfoliocard'

const Digitalservice = () => {

  const data_professionals=[


    {
      designation:"",
      para:"",
      name:"Web Development",
      bg:"https://w0.peakpx.com/wallpaper/390/39/HD-wallpaper-compulsory-abstract-abstract.jpg"
    },
    {
      // designation:"Co Founder ",
      // para:"",
      name:"Digital Media Marketing",
      bg:"https://media.istockphoto.com/id/1411682102/photo/3d-abstract-colorful-background-suitable-for-magazine-covers-banners-and-brochures-3d-render.webp?b=1&s=170667a&w=0&k=20&c=uIf4qSqwxGV8aObX-1fWAx7FEQ0bs7MNUYxWPmFIwK8="
   
    },
     {   
      // designation:"Manager",
      // para:"Our dedicated Manager at No Gravity Media brought unparalleled organization and strategic oversight to our project. Their ability to coordinate the team and keep all moving parts aligned ensured a seamless execution and exceptional results.",
      name:"Web Analytics",
      bg:"https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-smoke-paint-splatter-colorful-background-image_2164081.jpg"
   
    },
    {
      // designation:"Senior Software Engineer",
      // para:"The technical expertise of our Senior Software Engineer at No Gravity Media was instrumental in bringing our digital solutions to life. Their innovative thinking and problem-solving skills ensured that our platforms were not only robust but also scalable for future growth.",
      name:"Search Engine Optimization",
      bg:"https://img.freepik.com/free-photo/abstract-flames-exploding-multi-colored-ink-paint-generated-by-ai_188544-15568.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1709856000&semt=ais"
   
    },
    
    {
      // designation:"UI/UX Designer:",
      // para:"The creative brilliance of our UI/UX Designer at No Gravity Media transformed our vision into visually stunning and user-friendly experiences. Their attention to detail and intuitive design choices elevated our brand and captivated our audience.",
      name:"Shopify Website and Development",
      bg:"https://media.istockphoto.com/id/1411682102/photo/3d-abstract-colorful-background-suitable-for-magazine-covers-banners-and-brochures-3d-render.webp?b=1&s=170667a&w=0&k=20&c=uIf4qSqwxGV8aObX-1fWAx7FEQ0bs7MNUYxWPmFIwK8="
   
    },
  
  ]

  return (
    <div className='w-full flex flex-col items-center justify-center'>

<Herosection data={"DIGITAL AGENCY SERVICES"}/>

<div className='w-full flex flex-col items-center justify-center gap-14 py-24'  style={{background :"#EEF0F1"}}>

<h1 className='font-semibold text-black text-4xl text-center '>We bring you THE Digital Agency for B2B & B2C Brands.</h1>
<h1 className='font-semibold text-black text-4xl text-center  ' style={{color:'#825da8'}}>What's your challenge?
</h1>


<div className='grid grid-cols-2 xl:flex flex-col items-center justify-center gap-5'>
{
data_professionals.map((data,index)=>(

<Portfoliocard data={data} />

))
}

</div>

</div>

    </div>
  )
}

export default Digitalservice