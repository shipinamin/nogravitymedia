import React, { useState } from "react";
import Herosection from "./common/Herosection";
import Form from "./common/Form";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import Button_arr from "./core/Career/Button";
import { GiArtificialIntelligence } from "react-icons/gi";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

import footer from "../assets/footer_form_bg.webp";
const Careers = () => {
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
    <div className="w-full flex flex-col items-center justify-center gap-[80px] ">
      <Herosection data={"CAREERS"} />

      {/* <div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-4 py-24 leading-10'>
<p className='text-4xl font-bold'>Come on and <span className='font-black'>join us!</span> 
</p>
<p className='font-thin '>In our daily lives, it’s not usual to find a group of people that so passionately love boring expressions like data-driven, paid media, content marketing, automation, SEO, business Intelligence or B2B Storytelling. Hell, we even love pharmaceutical marketing!</p>
<p className='font-thin'>Yeah, we’re geeky like that! But don’t worry, as we’re data-led, we’re also awesome at social media management, web-development, design and all that mainstream crap…</p>
</div> */}

      <div className="flex flex-col items-center justify-center gap-[80px] w-10/12">
        <div className=" flex min-xl:gap-[100px] xl:flex-col xl:gap-[40px]">
          <p className="text-[24px] font-bold">Search</p>
          <select className="bg-black text-white p-[10px]">
            <option value="option1">All Location</option>
            <option value="option2">Delhi</option>
          </select>

          <p className="text-[24px] font-bold">for</p>
          <select className="bg-black text-white p-[10px]">
            <option value="option1">All Location</option>
            <option value="option2">Delhi</option>
          </select>

          <Button_arr text={"Find a Job"} />
        </div>

        <div className="flex gap-[100px] xl:flex-col ">
          <img
            src="https://st3.depositphotos.com/1092019/15323/i/450/depositphotos_153233456-stock-photo-who-we-are-concept-on.jpg"
            alt=""
            className=" w-[550px] xl:w-full "
          />

          <div className="flex flex-col gap-[50px] ">
            <h1 className="text-[50px] font-bold">Who we are</h1>
            <p>
              ITRex is more than 300 technology professionals based in Poland,
              Georgia, Ukraine, Armenia, and the USA. We write software, craft
              strategies, and give expert advice.
            </p>

            <p>
              We solve problems and drive growth for our clients. They’ve
              included big names like Walmart, Take a Swing at Cancer, Procter &
              Gamble, Dun & Bradstreet, Warner Bros., 21st Century Fox, and the
              Dollar Shave Club.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[40px]">
          <h1 className="text-[30px] font-bold">Our capabilities include:</h1>

          <div className="flex gap-[100px] xl:grid grid-cols-2">
            <div className=" flex flex-col gap-[10px]">
              <GiArtificialIntelligence className="w-[70px] h-[70px] text-[#FFDB3A]" />
              <p className="text-[18px] font-bold">Artificial Interligence</p>
            </div>

            <div className=" flex flex-col gap-[10px]">
              <GiArtificialIntelligence className="w-[70px] h-[70px] text-[#FFDB3A]" />
              <p className="text-[18px] font-bold">Artificial Interligence</p>
            </div>

            <div className=" flex flex-col gap-[10px]">
              <GiArtificialIntelligence className="w-[70px] h-[70px] text-[#FFDB3A]" />
              <p className="text-[18px] font-bold">Artificial Interligence</p>
            </div>

            <div className=" flex flex-col gap-[10px]">
              <GiArtificialIntelligence className="w-[70px] h-[70px] text-[#FFDB3A]" />
              <p className="text-[18px] font-bold">Artificial Interligence</p>
            </div>
          </div>
        </div>

        <div className="flex gap-[100px] xl:flex-col flex-row-reverse">
          <img
            src="https://st3.depositphotos.com/1092019/15323/i/450/depositphotos_153233456-stock-photo-who-we-are-concept-on.jpg"
            alt=""
            className=" w-[550px] xl:w-full "
          />

          <div className="flex flex-col gap-[50px] ">
            <h1 className="text-[50px] font-bold">Who we are</h1>
            <p>
              ITRex is more than 300 technology professionals based in Poland,
              Georgia, Ukraine, Armenia, and the USA. We write software, craft
              strategies, and give expert advice.
            </p>

            <p>
              We solve problems and drive growth for our clients. They’ve
              included big names like Walmart, Take a Swing at Cancer, Procter &
              Gamble, Dun & Bradstreet, Warner Bros., 21st Century Fox, and the
              Dollar Shave Club.
            </p>
          </div>
        </div>

        {/* here will be the content */}

        <div className="flex gap-[100px] xl:flex-col ">
          <img
            src="https://st3.depositphotos.com/1092019/15323/i/450/depositphotos_153233456-stock-photo-who-we-are-concept-on.jpg"
            alt=""
            className=" w-[550px] xl:w-full "
          />

          <div className="flex flex-col gap-[50px] ">
            <h1 className="text-[50px] font-bold">Who we are</h1>
            <p>
              ITRex is more than 300 technology professionals based in Poland,
              Georgia, Ukraine, Armenia, and the USA. We write software, craft
              strategies, and give expert advice.
            </p>

            <p>
              We solve problems and drive growth for our clients. They’ve
              included big names like Walmart, Take a Swing at Cancer, Procter &
              Gamble, Dun & Bradstreet, Warner Bros., 21st Century Fox, and the
              Dollar Shave Club.
            </p>
          </div>
        </div>
        <div className="flex gap-[100px] xl:flex-col flex-row-reverse">
          <img
            src="https://st3.depositphotos.com/1092019/15323/i/450/depositphotos_153233456-stock-photo-who-we-are-concept-on.jpg"
            alt=""
            className=" w-[550px] xl:w-full "
          />

          <div className="flex flex-col gap-[50px] ">
            <h1 className="text-[50px] font-bold">Who we are</h1>
            <p>
              ITRex is more than 300 technology professionals based in Poland,
              Georgia, Ukraine, Armenia, and the USA. We write software, craft
              strategies, and give expert advice.
            </p>

            <p>
              We solve problems and drive growth for our clients. They’ve
              included big names like Walmart, Take a Swing at Cancer, Procter &
              Gamble, Dun & Bradstreet, Warner Bros., 21st Century Fox, and the
              Dollar Shave Club.
            </p>
          </div>
        </div>

        <div className="w-screen">
          <img
            src="https://www.choudharyexports.com/content/images/who-we-are-banner.jpg"
            alt=""
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex xl:flex-col flex-row-reverse justify-between items-end gap-[70px]">
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae aspernatur iure eum velit non unde facere, a eligendi
              minus error.
            </p>
            <p className="text-[50px] font-bold">
              Lorem ipsum dolor sit amet consectetur .
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex xl:flex-col justify-between items-end gap-[70px]">
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae aspernatur iure eum velit non unde facere, a eligendi
              minus error.
            </p>
            <p className="text-[50px] font-bold">
              Lorem ipsum dolor sit amet consectetur .
            </p>
          </div>

          <div className="flex gap-24 xl:gap-5 xl:grid grid-cols-2">
            <img
              src="https://www.choudharyexports.com/content/images/who-we-are-banner.jpg"
              alt=""
              className="w-[300px] h-[200px]"
            />
            <img
              src="https://www.choudharyexports.com/content/images/who-we-are-banner.jpg"
              alt=""
              className="w-[300px] h-[200px]"
            />
            <img
              src="https://www.choudharyexports.com/content/images/who-we-are-banner.jpg"
              alt=""
              className="w-[300px] h-[200px]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[40px]">
          <p className="text-[50px] font-bold">Lorem ipsum dolor sit .</p>
          <p className="text-[18px] text-center whitespace-pre-line">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam fuga iste possimus animi quaerat magnam
            ratione tempora minus dolorem. Qui? consectetur adipisicing elit.
            Repudiandae aspernatur iure eum velit non unde facere, a eligendi
            minus error.
          </p>
        </div>

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

        <div className="w-full h-[100px] bg-[#EEF0F1]"></div>
        <div className="w-full py-24">
          <p className="text-center text-4xl font-bold ">
            Didn’t find the job opening you’re looking for?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
