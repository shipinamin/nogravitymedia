import React from 'react'
import {useState,useEffect} from 'react'
import Form from '../../components/common/Form'
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({startproject,setstartproject}) => {
    // const [startproject, setstartproject] = useState(false); // State for hover status
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
  
  return (
    <div className={ `top-[-90px] left-0  h-[120vh] w-screen fixed  flex items-center justify-center z-[50] ${startproject?'flex' : 'hidden'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

    <div className='bg-white py-[30px] sm:max-h-[600px] px-[20px] min-xl:max-h-[600px]  md:w-screen overflow-y-auto rounded-md hide-scrollbar'>
    <div className='float-right cursor-pointer '  onClick={() => setstartproject(!startproject)}><IoCloseSharp className='h-[30px] w-[30px]'/></div>
<Form/>
</div>

</div>

  )
}

export default Modal