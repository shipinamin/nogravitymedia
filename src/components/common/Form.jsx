import React from 'react'
import { useEffect, useState } from 'react'
import {useForm} from "react-hook-form"
import Button from '../Button'
const Form = () => {


    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();

    const submitContactForm = async(data) => {
        console.log("Logging Data" , data);
      
    }

    useEffect( () => {
        if(isSubmitSuccessful) {
            reset({
                email:"",
                name:"",
                lastname:"",
                message:"",
                subject:"",
                checkbox:"",
            })
        }
    },[reset, isSubmitSuccessful] );

  return (



<div className='flex justify-center items-center xl:w-[90vw] '>
<form onSubmit={handleSubmit(submitContactForm)}>

<div className='flex flex-col justify-center items-start gap-8'>
            {/* name */}
        <div className='flex flex-col gap-3'>
                <label htmlFor='name' className='text-[#848E94] font-extralight'>First Name<sup className='text-red-600'>*</sup></label>
                <input  
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter your name'
                    className='text-black  sm:w-[90vw] xl:w-[70vw] w-[500px] outline-none  focus:border-b-3 border-b-[3px] focus:border-[#386685] border-[#C3C8CB] placeholder-gray-500 font-extralight'

                    {...register("name", {required:true})}
                />
                {
                    errors.name && (
                        <span className='text-red-600'>
                            Please enter Your name
                        </span>
                    )
                }
            </div>

            {/* lastName */}
        {/* <div className='flex flex-col gap-3' >
                <label htmlFor='lastname' className='text-[#848E94] font-extralight'>Last Name</label>
                <input  
                    type='text'
                    name='lastname'
                    id='lastname'

                    className='text-black  sm:w-[90vw] xl:w-[70vw] w-[500px] outline-none  focus:border-b-3 border-b-[3px] focus:border-[#386685] border-[#C3C8CB] placeholder-gray-500 font-extralight'
                    placeholder='Enter Last name'
                    {...register("lastname")}
                />
                
            </div> */}



        {/* compnay name */}
    <div className='flex flex-col gap-3'>
            <label htmlFor='subject' className='text-[#848E94] font-extralight'>subject Name<sup className='text-red-600'>*</sup></label>
            <input 
                type='text'
                name='subject'
                id='subject'
                className='text-black  sm:w-[90vw] xl:w-[70vw] w-[500px] outline-none  focus:border-b-3 border-b-[3px] focus:border-[#386685] border-[#C3C8CB] placeholder-gray-500 font-extralight'
                placeholder='subject '
                {...register("subject", {required:true})}
            />
            {
                errors.subject && (
                    <span className='text-red-600'>
                        Please enter your subject Name
                    </span>
                )
            }
        </div>
        {/* email */}
    <div className='flex flex-col gap-3'>
            <label htmlFor='email' className='text-[#848E94] font-extralight'>Email Address<sup className='text-red-600'>*</sup></label>
            <input 
                type='email'
                name='email'
                id='email'
                className='text-black  sm:w-[90vw] xl:w-[70vw] w-[500px] outline-none  focus:border-b-3 border-b-[3px] focus:border-[#386685] border-[#C3C8CB] placeholder-gray-500 font-extralight'
                placeholder='Enter email Address'
                {...register("email", {required:true})}
            />
            {
                errors.email && (
                    <span className='text-red-600'>
                        Please enter your email address
                    </span>
                )
            }
        </div>

     
        {/* message */}
        <div className='flex flex-col gap-3'>
            <label htmlFor='message' className='text-[#848E94] font-extralight'>Message<sup className='text-red-600'>*</sup></label>
            <textarea 
                name='message'
                id='message'
                cols="30"
                className='text-black  sm:w-[90vw] xl:w-[70vw] w-[500px] outline-none  focus:border-b-3 border-b-[3px] focus:border-[#386685] border-[#C3C8CB] placeholder-gray-500 font-extralight'
                rows="1"
                placeholder='Enter Your message here'
                {...register("message", {required:true})}
            />
            {
                errors.message && (
                    <span className='text-red-600'>
                        Please enter your message.
                    </span>
                )
            }
        </div>
            
        <div className='flex flex-col'>
            <div className='flex gap-2'>
            <input 
                type='checkbox'
                name='accept'
                id='accept'
                className='text-black  outline-none  focus:border-b-3 border-b-[3px] border-[#0D2B4B] '
                placeholder='Enter email Address'
                {...register("accept", {required:true})}
            />
        
            <label htmlFor='accept'> I have read and accepted the Privacy Notice.<sup className='text-red-600'>*</sup></label>   
            </div>

            <div >

            {
                errors.accept && (
                    <span className='text-red-600'>
                       Please opt in
                    </span>
                )
            }
            </div>

        </div>

        <button type='submit'>
                <Button data={"Submit"} className="sm:w-[90vw] xl:w-[70vw] w-[500px] "/>
        </button>
       
</div>

</form>
</div>


  )
}

export default Form