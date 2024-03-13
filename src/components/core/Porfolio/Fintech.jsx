import React from 'react'

const Fintech = () => {
const data =[
  {
    title:"Actlogica",
    para:"Platform to help accelerate financial inclusion in India by providing scalable tech infrastructure to wealth managers and investment professionals."
},
  {
    title:"Actlogica",
    para:"Platform to help accelerate financial inclusion in India by providing scalable tech infrastructure to wealth managers and investment professionals."
},
  {
    title:"Actlogica",
    para:"Platform to help accelerate financial inclusion in India by providing scalable tech infrastructure to wealth managers and investment professionals."
},
  {
    title:"Actlogica",
    para:"Platform to help accelerate financial inclusion in India by providing scalable tech infrastructure to wealth managers and investment professionals."
},
  {
    title:"Actlogica",
    para:"Platform to help accelerate financial inclusion in India by providing scalable tech infrastructure to wealth managers and investment professionals."
},
]

  return (
    <div className='flex flex-col gap-[20px]'>
   <h1 className='font-semibold text-[34px]'>Fintech</h1>

   <div className='border-r-4 border'>

      {
        data.map((data,index)=>(
          <div className='p-[40px] hover:bg-[#F9F9F9]' key={index}>
            <h1 className='font-semibold text-[18px]'>{data.title}</h1>
            <p className='text-[#666666] '>{data.para}</p>
          </div>
        ))
      }

   </div>

 
    </div>
  )
}

export default Fintech