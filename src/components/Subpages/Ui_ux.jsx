import React ,{useState} from 'react'
import Herosection from '../common/Herosection'
import { FaArrowRightLong } from "react-icons/fa6";

import { TypeAnimation } from 'react-type-animation';
const Ui_ux = () => {

    const [hovered, setHovered] = useState(false); // State for hover status

    const gallery_data=[
"https://media.contra.com/image/upload/ec47oc4qprgpddv7gm9w",
"https://assets.materialup.com/uploads/74f2f6ce-e116-4505-89d6-52c7b4776f58/attachment.jpg",
"https://i.pinimg.com/originals/c6/ba/98/c6ba986232e5a1974633ec9d3809c0a7.png",
"https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051555.jpg",
"https://futureskillsprime.in//sites/default/files/2021-04/web-development.jpg",
"https://i.pinimg.com/originals/dc/74/1e/dc741e83cbf54fb19cfbf7eac5ba47e3.png"
    ]

  return (
    <div className='w-full flex flex-col  items-center justify-center gap-[100px]'>
    {/* <Herosection data={"UI/UX"}/> */}

<div className='bg-[#4E6B8F] ] w-screen flex flex-col items-center justify-center pb-[90px]'>

<div className='h-[80vh] w-[60vw] flex  flex-col items-center justify-center gap-[100px] '>
    <p className='text-[30px] font-bold flex text-white'>    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'UI/UX design agency,molding ideas into development',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'UI/UX design agency,molding ideas into prototypes',
        2000,
        'UI/UX design agency,molding ideas into brands',
        2000,
        'UI/UX design agency,molding ideas into design',
        2000,
        'UI/UX design agency,molding ideas into products',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /> </p>



</div>


<div 
      className='self-end flex items-center justify-center gap-[30px] py-[32px] px-[24px] bg-black  text-white text-[40px] cursor-pointer'
      onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
      onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
    >
      Start a Project 
      <FaArrowRightLong 
        className={`font-[600] ${hovered ? 'translate-x-2 transition-all duration-300 ease-in-out' : ''}`} // Conditionally apply translate and transition classes
      />
    </div>

</div>



<div className='grid grid-cols-3  w-[90vw] gap-[10px] '>

    {
        
        gallery_data.map((data,index)=>(

<div className='bg-center bg-cover h-[364px]' style={{backgroundImage: `url(${data})`}} key={index}></div>
        ))
    }

</div>






    </div>
  )
}

export default Ui_ux