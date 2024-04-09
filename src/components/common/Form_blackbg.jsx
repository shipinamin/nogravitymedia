import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import Button from "../Button";
import footer from "../../assets/footer_form_bg.webp";
const Form_blackbg = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleItemClick = (option) => {
        setSelectedOption(option);
      };
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
      } = useForm();
    
      const submitContactForm = async (data) => {
        console.log("Logging Data", data);
      };
    
      useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            email: "",
            name: "",
            phone: "",
            // message:"",
            projectinfo: "",
            checkbox: "",
          });
        }
      }, [reset, isSubmitSuccessful]);
    

  return (
    <div
    className=" w-screen  flex justify-center "
    style={{ backgroundImage: `url(${footer})` }}
  >


    <div className="w-[90%] py-[40px] flex flex-col gap-[50px]">

      <div className=" text-[50px] text-white font-bold">
      Contact us
      </div>
      <div className="flex justify-center items-center    ">
        <form onSubmit={handleSubmit(submitContactForm)} className="">
          <div className="grid grid-cols-2 xl:flex items-cente   justify-cente flex-col xl:gap-[10px] gap-[50px] ">
            <div className="">
              {/* <label htmlFor='firstnam' className='text-[#848E94] font-extralight'>First Name<sup className='text-red-600'>*</sup></label> */}
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name*"
                className="text-white border-b-[#386685]  sm:w-[90vw] xl:w-[70vw] w-[500px] outline-none  p-[7px] focus:border-b-3 border-b-[1px] focus:border-b-[white] border-[#C3C8CB] placeholder-gray-500 font-extralight  bg-transparent border-transparent  border "
                {...register("name", { required: true })}
              />

              <div className="relative   bottom-[40px] ">
                {errors.name ? (
                  <div className="flex  gap-[10px] relative float-right">
                    <div className="text-red-600 whitespace-nowrap ">
                      Please enter Your name
                    </div>
                    <div className="text-red-600 bg-red-600   w-[20px] h-[20px] bg-green border border-red-600 rounded-full"></div>
                  </div>
                ) : (
                  <div className="text-green-600   w-[20px] h-[20px] bg-green border float-right rounded-full"></div>
                )}
              </div>
            </div>

            <div className="  ">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone*"
                className="text-white border-b-[#386685]  sm:w-[90vw] xl:w-[70vw] w-[500px] outline-none  p-[7px] focus:border-b-3 border-b-[1px] focus:border-[white] border-[#C3C8CB] placeholder-gray-500 font-extralight  bg-transparent border-transparent"
                {...register("phone", { required: true })}
              />
               <div className="relative   bottom-[40px] ">
                {errors.phone ? (
                  <div className="flex  gap-[10px] relative float-right">
                    <div className="text-red-600 whitespace-nowrap ">
                      Please enter Your name
                    </div>
                    <div className="text-red-600 bg-red-600   w-[20px] h-[20px] bg-green border border-red-600 rounded-full"></div>
                  </div>
                ) : (
                  <div className="text-green-600   w-[20px] h-[20px] bg-green border float-right rounded-full"></div>
                )}
              </div>
            </div>

            <div className="  ">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email*"
                className="text-white border-b-[#386685]  sm:w-[90vw] xl:w-[70vw] w-[500px] outline-none  p-[7px] focus:border-b-3 border-b-[1px] focus:border-[white] border-[#C3C8CB] placeholder-gray-500 font-extralight  bg-transparent border-transparent"
                {...register("email", { required: true })}
              />
           <div className="relative   bottom-[40px] ">
                {errors.email ? (
                  <div className="flex  gap-[10px] relative float-right">
                    <div className="text-red-600 whitespace-nowrap ">
                      Please enter Your name
                    </div>
                    <div className="text-red-600 bg-red-600   w-[20px] h-[20px] bg-green border border-red-600 rounded-full"></div>
                  </div>
                ) : (
                  <div className="text-green-600   w-[20px] h-[20px] bg-green border float-right rounded-full"></div>
                )}
              </div>
            </div>

            <div className=" ">
              <input
                type="text"
                name="projectinfo"
                id="projectinfo"
                placeholder="Project Info*"
                className="text-white border-b-[#386685]  sm:w-[90vw] xl:w-[70vw] w-[500px] outline-none  p-[7px] focus:border-b-3 border-b-[1px] focus:border-[white] border-[#C3C8CB] placeholder-gray-500 font-extralight  bg-transparent border-transparent"
                {...register("projectinfo", { required: true })}
              />
      <div className="relative   bottom-[40px] ">
                {errors.projectinfo ? (
                  <div className="flex  gap-[10px] relative float-right">
                    <div className="text-red-600 whitespace-nowrap ">
                      Please enter Your name
                    </div>
                    <div className="text-red-600 bg-red-600   w-[20px] h-[20px] bg-green border border-red-600 rounded-full"></div>
                  </div>
                ) : (
                  <div className="text-green-600   w-[20px] h-[20px] bg-green border float-right rounded-full"></div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[10px] pb-[10px]">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="accept"
                  id="accept"
                  className="text-black  outline-none  focus:border-b-3 border-b-[3px] border-[#0D2B4B] "
                  placeholder="Enter email Address"
                  {...register("accept", { required: true })}
                />

                <label className="text-white" htmlFor="accept ">
                  {" "}
                  I have read and accepted the Privacy Notice.
                  <sup className="text-red-600">*</sup>
                </label>
              </div>

              <div>
                {errors.accept && (
                  <span className="text-red-600">Please opt in</span>
                )}
              </div>
            </div>
          </div>
          <button type="submit">
            <Button
              data={"Submit"}
              className="sm:w-[90vw] xl:w-[70vw]  w-[500px] "
            />
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Form_blackbg