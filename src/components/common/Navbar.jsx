import React from 'react'
import Button from '../Button'
import { useEffect ,useState} from 'react';
import Togglebtn from '../Togglebtn';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import Megamenubtn from '../Subpages/Megamenubtn';
import Modal from './Modal'
const Navbar = () => {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const [startproject, setstartproject] = useState(false); 
    function toggleContentVisibility () {
    setIsContentVisible(!isContentVisible);
};


    const [bgColor, setBgColor] = useState('transparent');
    const [Color, setColor] = useState('white');
    const [shahdow, setshahdow] = useState('none');
    const [border, setborder] = useState('cool-link');
    const services_mega_menu = [
      "UI/UX",
"Digital Strategy and Planning",

 "Social Media Marketing ",
 "Website Design and Development",
 "Search Engine Optimization",
"CUSTOM CRM",
 "Shopify Website & Development",
 "POS",
]

    
    useEffect(() => {
      function handleScroll() {
        const scrollPosition = window.scrollY;
        const halfViewportHeight =  window.innerHeight * 0.01;
  
        if (scrollPosition > halfViewportHeight) {
          setBgColor('white');
          setColor('black');
          setshahdow('shadow-md');
          // setborder('cool-link')
        } else {
          setBgColor('transparent');
          setColor('white');
          setshahdow('none');
          // setborder('coolw-link ')
        }
      }
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    
const data = ["About Us" , "Services" , "Portfolio" , "Careers" , "Contact Us" , "Business Enquiries"]



  return (

  <div className={`${shahdow}  w-full flex items-center justify-between   xl:flex-col  fixed xl:px-[20px] px-[40px] py-[30px] xl:py-[15px] z-30 `}  style={{ backgroundColor: bgColor,transition: 'background-color 200ms ease-in-out'}}>
<Modal startproject={startproject} setstartproject={setstartproject}/>

 <div className='flex justify-between  xl:w-screen items-center xl:px-[25px] '>
 <Link to='/'   onClick={() => {
                    // Execute your code here
                    setstartproject(false); // Ensure startproject is set to false to hide any content before scrolling
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
                  }}>

 <div className='flex items-center gap-2'>
 <img src="https://media.licdn.com/dms/image/C4D0BAQEV5S_Yk72tUw/company-logo_200_200/0/1677983924847?e=1717027200&v=beta&t=ZCWd84VFRLudA1IRr0oroLh0FlMaJsYz0Pf4Wt3ob30" alt="" className='h-[60px] sm:h-[40px]' />            

<p className='font-extrabold text-xl text-[#373737]' >NoGravityMedia</p>
</div>
</Link>
 <Togglebtn navtoggle={toggleContentVisibility} navbg={setBgColor}  textcolor={setColor}/>
 {/* <Link to={`/Digital Strategy and Planning`}>
<div>hellp</div>
</Link> */}
 </div>



 <div className={`${isContentVisible ? 'xl:flex' : 'xl:hidden'} flex items-center xl:items-start xl:px-[px]  flex-row xl:flex-col gap-10 xl:gap-0 py- xl:bg-transparent xl:bg-white xl:w-screen xl:h-screen xl:absolute md:top-[76px]  xl:top-[90px] xl:pb-[200px]  overflow-auto`}>
    {data.map((data, index) => (
        <ul key={index} className='flex flex-col gap-5 font-bold  xl:text-l uppercase xl:relative  ' style={{color:Color}}>
            {data === "Business Enquiries" ? (
                <li className=' xl:py-2 xl:px-10'        onClick={() => setstartproject(!startproject)}><Button data={data} width={'230px'} /></li>) : ( <NavLink
                  to={data === "Portfolio" ? "Portfolio/Fintech" : `/${data}`}
                  onClick={() => {
                    // Execute your code here
                    setstartproject(false); // Ensure startproject is set to false to hide any content before scrolling
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
                  }}
                >

{data== "Services" ?(
  
  <div class=" group">
    {/* <button class="hover:text-gray-900">Hover me</button> */}{


    <div className='flex items-center justify-between  xl:border-t-2  xl:py-2 xl:px-10 xl:w-screen '>

{/* <NavLink to={`/${data}`}> */}

    <div className={`tracking-tight xl:text-black cursor-pointer ${border} text-[#373737]`}>{data}</div>
      {/* <p className='min-xl:hidden'>{'>'}</p> */}
      <p className='min-xl:hidden'><Megamenubtn/></p>
    </div>
    }

    <div class="absolute xl:relative hidden bg-white min-xl:shadow-lg p-4 top-[64px] xl:top-[0px]  mt-2 group-hover:block text-black border border-gray-300">
    
    
    <div key={index} className='flex flex-col gap-5 '> 
    {
  services_mega_menu.map((data, index) => (
      <ul className='flex ' key={index}>
       <Link to={`/${data}`}>
        <li className='coolM-link hover:text-[#F096B8] font-[500]  '>{data}</li>
        </Link>
        
      </ul>
  ))
}
</div>

   

    </div>
</div>):
  (
    <li className={`tracking-tight xl:text-black cursor-pointer xl:border-t-2  xl:py-2 xl:px-10 xl:w-screen   ${border}  text-[#373737] `}>{data}</li>
  )
  
}
              </NavLink>



               
            )
            }
        </ul>
    ))}
 

</div>


        
    </div>

  )
}

export default Navbar