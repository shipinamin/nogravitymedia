import React from 'react'
import Form from './common/Form'
import Herosection from './common/Herosection'
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

    const data = ["Delhi"  ]
  return (
 <div className='w-full flex flex-col justify-center items-center'>
<Herosection data={"CONTACTS"}/>

<div className='xl:flex-col flex justify-center xl:items-center  w-11/12 py-24 gap-14 p '>

<div className='flex flex-col xl:w-9/12 sm:w-full w-6/12 gap-5'>
    <p className='text-4xl font-bold leading-snug'>You've scrolled all the way down here, why not get in touch?</p>
    <p className='font-light text-gray-400 leading-7'>We are where you need us to be
</p>

{
    data.map((item, index) => (
        <div key={index} className='flex flex-col justify-center items-start gap-3'>
    <div className='flex items-center justify-center gap-1'>
            <FaLocationDot  className='text-[#815EA8] '/>
            <h3 className='uppercase font-bold'>{item}</h3>
            </div>

        
   <p className='text-[#8D969C] font-extralight'>Preet Vihar, Nirman Vihar, New Delhi, India, 110092</p>
   <p>Tel.: +351 21 454 45 45</p>
 
        </div>
    ))
}

<div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.17760244681!2d77.2836692549197!3d28.635923493744013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5034037b69%3A0x833f7bdabb4ed317!2sPreet%20Vihar%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1709983562528!5m2!1sen!2sin"
        // width="600"
        // height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
        className='xl:auto w-[600px] xl:auto h-[450px]'
      ></iframe>
    </div>


</div>

<Form/>



</div>


 </div>
  )
}

export default Contact