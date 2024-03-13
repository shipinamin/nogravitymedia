import React, {useState} from 'react'
import Herosection from './common/Herosection'
import Form from '../components/common/Form'
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import Button from  "../components/core/Career/Button"

const Careers = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleItemClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className='w-full flex flex-col items-center justify-center gap-[80px] '>
<Herosection data={"CAREERS"}/>

{/* <div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-4 py-24 leading-10'>
<p className='text-4xl font-bold'>Come on and <span className='font-black'>join us!</span> 
</p>
<p className='font-thin '>In our daily lives, it’s not usual to find a group of people that so passionately love boring expressions like data-driven, paid media, content marketing, automation, SEO, business Intelligence or B2B Storytelling. Hell, we even love pharmaceutical marketing!</p>
<p className='font-thin'>Yeah, we’re geeky like that! But don’t worry, as we’re data-led, we’re also awesome at social media management, web-development, design and all that mainstream crap…</p>
</div> */}


<div className='flex flex-col items-center justify-center gap-[80px] w-10/12'>


  <div className=' min-xl:flex min-xl:gap-[100px]'>
    <p>Search</p>
  <select className='bg-black text-white p-[10px]'>
  <option value="option1">All Location</option>
  <option value="option2">Delhi</option>
</select>

<p>for</p>
<select className='bg-black text-white p-[10px]'>
  <option value="option1">All Location</option>
  <option value="option2">Delhi</option>
</select>
  
  <Button text={"Find a Job"}/>

  </div>



<div className='flex gap-[100px] xl:flex-col'>


  <img src="https://st3.depositphotos.com/1092019/15323/i/450/depositphotos_153233456-stock-photo-who-we-are-concept-on.jpg" alt="" className=' w-[550px] xl:w-full '/>


<div className='flex flex-col gap-[50px]' >

  <h1 className='text-[50px] font-bold'>Who we are</h1>
  <p>
    ITRex is more than 300 technology professionals based in Poland, Georgia, Ukraine, Armenia, and the USA. We write software, craft strategies, and give expert advice.
  </p>

  <p>We solve problems and drive growth for our clients. They’ve included big names like Walmart, Take a Swing at Cancer, Procter & Gamble, Dun & Bradstreet, Warner Bros., 21st Century Fox, and the Dollar Shave Club.</p>

</div>

</div>



<div className='w-full' >
  <h1 className='text-[30px] font-bold'>Our capabilities include:</h1>

<div>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
</div>

</div>






<div className='pb-14'>
  <Form/>
</div>

{/* <div className='w-full h-[100px] bg-[#EEF0F1]'></div>
<div className='w-full py-24'>
  <p className='text-center text-4xl font-bold '>Didn’t find the job opening you’re looking for?</p>
</div> */}
</div>

    </div>
  )
}

export default Careers