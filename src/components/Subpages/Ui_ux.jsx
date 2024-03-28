import React ,{useState,useEffect} from 'react'
import Herosection from '../common/Herosection'
import { Carousel, Button } from "antd";
import { TypeAnimation } from 'react-type-animation';
import Faq_comp from '../common/Faq_comp';
import Form from "../common/Form"
import { IoCloseSharp } from "react-icons/io5";
import { useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Modal from '../../components/common/Modal'
import "./ui_ux.css"
const Ui_ux = () => {

    const [hovered, setHovered] = useState(false); // State for hover status
    const [startproject, setstartproject] = useState(false); // State for hover status
    useEffect(() => {
      // Function to handle body scroll
      const handleBodyScroll = () => {
          // Disable body scroll when startproject is true
          if (startproject) {
              document.body.style.overflow = 'hidden';
              window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
              document.body.style.overflow = 'auto';
          }
      };

      // Add event listener for scroll when startproject changes
      handleBodyScroll();
      return () => {
          document.body.style.overflow = 'auto'; // Reset overflow when component unmounts
      };
  }, [startproject]);

    const gallery_data=[
"https://media.contra.com/image/upload/ec47oc4qprgpddv7gm9w",
"https://assets.materialup.com/uploads/74f2f6ce-e116-4505-89d6-52c7b4776f58/attachment.jpg",
"https://i.pinimg.com/originals/c6/ba/98/c6ba986232e5a1974633ec9d3809c0a7.png",
"https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051555.jpg",
"https://futureskillsprime.in//sites/default/files/2021-04/web-development.jpg",
"https://i.pinimg.com/originals/dc/74/1e/dc741e83cbf54fb19cfbf7eac5ba47e3.png"
    ]

    const design_carsouel =[
      "https://cdn.dribbble.com/users/795597/screenshots/5885477/ui-ux_design8.gif",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/09804a82963291.5d308c3850e2c.gif",
      "https://i.pinimg.com/originals/1b/d0/82/1bd082c378bbe411a4fe455b5625b25c.gif",
      "https://appinventiv.com/wp-content/uploads/2019/02/Animation-Top-UIUX-Trends-2020-1.gif"



    ]
  
    const design_carsouel_content =[
     {
      title:"Attendance Dashboard Report",
      description:"Interaction Design - Prototype",
      para:"Created an interaction prototype for a machine learning driven scan and search interface for eCommerce App Builder."
     },
     {
      title:"Attendance Dashboard Report",
      description:"Interaction Design - Prototype",
      para:"Created an interaction prototype for a machine learning driven scan and search interface for eCommerce App Builder."
     },
     {
      title:"Attendance Dashboard Report",
      description:"Interaction Design - Prototype",
      para:"Created an interaction prototype for a machine learning driven scan and search interface for eCommerce App Builder."
     },
     {
      title:"Attendance Dashboard Report",
      description:"Interaction Design - Prototype",
      para:"Created an interaction prototype for a machine learning driven scan and search interface for eCommerce App Builder."
     },



    ]
  
    const carouselRef1 = useRef(null);
    const carouselRef2 = useRef(null);

    const handleNext = () => {
        if (carouselRef1.current && carouselRef2.current) {
            carouselRef1.current.next();
            carouselRef2.current.next();
        }
    };

    const handlePrev = () => {
        if (carouselRef1.current && carouselRef2.current) {
            carouselRef1.current.prev();
            carouselRef2.current.prev();
        }
    };
    

    const freq_ask_ques=[
      {
        questions:"FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        answers:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        questions:"FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        answers:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        questions:"FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        answers:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        questions:"FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        answers:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        questions:"FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        answers:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
    ]


  return (
    <div className='w-full flex flex-col  items-center justify-center gap-[100px] '>
    {/* <Herosection data={"UI/UX"}/> */}

<div className='bg-[white] min-xl:h-[100vh]  w-screen flex flex-col items-center justify-center pb-[90px] min-xl:pt-[200px]'>

<div className='xl:h-[80vh] w-[60vw]  flex  flex-col items-center justify-center gap-[100px] '>
    <p className='text-black text-[80px] font-bold flex text- md:text-[35px] sm-se:[30px] '>    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
           'UI/UX design agency,molding ideas into products',
           2000, 
           // wait 1s before replacing "Mice" with "Hamsters"
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
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    /> </p>



</div>


<div 
      className='self-end flex items-center justify-center gap-[30px] py-[32px] px-[24px]  bg-black  text-white text-[40px] sm:text-[20px] font-bold cursor-pointer'
      onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
      onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
      onClick={() => setstartproject(!startproject)}
    >
      Start a Project 
      <FaArrowRightLong 
        className={`font-[600] ${hovered ? 'translate-x-2 transition-all duration-300 ease-in-out' : ''}`} // Conditionally apply translate and transition classes
      />
    </div>


{/* 
    <div className={ `h-[120vh] w-screen fixed  flex items-center justify-center z-[50] ${startproject?'flex' : 'hidden'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

        <div className='bg-white py-[30px] sm:max-h-[600px] px-[20px] min-xl:max-h-[600px]  md:w-screen overflow-y-auto rounded-md hide-scrollbar'>
        <div className='float-right cursor-pointer '  onClick={() => setstartproject(!startproject)}><IoCloseSharp className='h-[30px] w-[30px]'/></div>
    <Form/>
    </div>

    </div> */}

    <Modal startproject={startproject} setstartproject={setstartproject}/>


  

</div>



<div className='grid grid-cols-3  xl:grid-cols-2 md:grid-cols-1  w-[90vw] gap-[10px] '>

    {
        
        gallery_data.map((data,index)=>(

<div className='bg-center bg-cover h-[364px]' style={{backgroundImage: `url(${data})`}} key={index}></div>
        ))
    }

</div>


<div className='flex xl:flex-col-reverse w-11/12 md:w-11/12 justify-center gap-0 items-center'>


<div className="w-[30vw] xl:w-[95vw]  custom-xl-max:w-[92vw] flex flex-col gap-[32px]">
        <div className="flex flex-col ">
          <Carousel
            className="pb-[54px] carousel_categories"
            ref={carouselRef1}
            slidesToShow={1}
            autoplay
            autoplaySpeed={3000}
         
          >
          

{design_carsouel_content.map((data, index) => (
              <div className=" " key={index}>
                <div className='  xl:py-[10px] md:py-0 bg-center bg-cover flex flex-col justify-center xl:items-center gap-5'>

<h1 className='font-bold text-[24px]'>{data.title}</h1>
<h1 className='text-[24px] text-[grey] font-[300]'>{data.description}</h1>
<h1 className='text-[18px] xl:text-center'>{data.para}</h1>
</div>

              </div>
            ))}



          </Carousel>
          <div className="flex gap-5 xl:justify-center">
            <FaArrowLeftLong
              onClick={handlePrev}
              className="h-[40px] w-[40px] cursor-pointer"
            />
            <FaArrowRightLong
              onClick={handleNext}
              className="h-[40px] w-[40px] cursor-pointer"
            />
          </div>
        </div>
      </div>
<div className="w-[60vw] xl:w-[95vw]  custom-xl-max:w-[92vw] flex flex-col gap-[32px]">
        <div className="flex flex-col">
          <Carousel
            className="pb-[54px] carousel_categories"
            ref={carouselRef2}
            slidesToShow={1}
            autoplay
            autoplaySpeed={3000}
         
          >
            {design_carsouel.map((data, index) => (
              <div className="" key={index}>





<div className='w-[100%]  h-[550px]  md:h-[300px] bg-center bg-cover' style={{backgroundImage:`url(${data})`}}>

</div>
              </div>
            ))}
          </Carousel>
      
        </div>
      </div>

      
      </div>


<div className='w-11/12 flex flex-col gap-[40px] pb-[100px]'>

<p className='text-4xl font-bold'>Frequently Asked Question</p>
<div className='w-full flex justify-center'>
<Faq_comp freq_ask_ques={freq_ask_ques}/>
</div>
</div>


    </div>
  )
}

export default Ui_ux