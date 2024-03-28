import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";


const Faq_comp = ({freq_ask_ques}) => {

    // const freq_ask_ques=[
    //     {
    //       questions:"FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    //       answers:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //       questions:"FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    //       answers:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //       questions:"FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    //       answers:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //       questions:"FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    //       answers:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //       questions:"FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    //       answers:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     },
    //   ]
     
      
      const [faqStates, setFaqStates] = useState(Array(freq_ask_ques.length).fill(false));
      
      const faqSetter = (index) => {
        const updatedFaqStates = [...faqStates];
        updatedFaqStates[index] = !updatedFaqStates[index];
        setFaqStates(updatedFaqStates);
      };
    
  return (
    <div className="w-[60vw] xl:w-[100vw] flex flex-col items-center gap-[32px]">
    <div className="w-full flex flex-col gap-[16px]">
    {freq_ask_ques.map((data, index) => (
      <div key={index} className={` border-b-[black] border-b-[0.5px] `}>
        <div className={`flex items-center justify-between p-[20px] rounded-t-[10px]  ${faqStates[index] ? ' rounded-b-[0px] '  : 'rounded-b-[10px] '}`}>
          <p className="font-[700] leading-[22px] tracking-wider min-xl:text-[24px] ">{data.questions}</p>
          <div>
            {faqStates[index] ? (
              <FiMinus className="h-[30.4px] w-[30.4px] cursor-pointer " onClick={() => faqSetter(index)} />
            ) : (
              <GoPlus className="h-[30.4px] w-[30.4px] cursor-pointer" onClick={() => faqSetter(index)} />
            )}
          </div>
        </div>
        <p className={` ${faqStates[index] ? 'block rounded-b-[10px]'  : 'hidden'} px-[20px] py-[10px] text-[16px] font-[500] leading-[30px]`}>
          {data.answers}
        </p>
      </div>
    ))}
  </div>

    </div>

  )
}

export default Faq_comp