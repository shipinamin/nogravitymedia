import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';


const Footer = () => {
  const data = [
    "About Us",
    "Services",
    "Portfolio",
    "Careers",
    "Contacts",
  ];
  return (
    <div className="w-screen bg-[#354A64] flex flex-col items-center justify-center pt-24 pb-12 gap-24">
      <div className="w-9/12  flex xl:flex-col xl:items-center xl:justify-center justify-between items-start gap-8">

        <div className="flex items-center gap-2">
          <img
            src="https://media.licdn.com/dms/image/C4D0BAQEV5S_Yk72tUw/company-logo_200_200/0/1677983924847?e=1717027200&v=beta&t=ZCWd84VFRLudA1IRr0oroLh0FlMaJsYz0Pf4Wt3ob30"
            alt=""
            className="h-[60px] sm:h-[40px]"
          />

          <p className="font-extrabold text-xl text-white">NoGravityMedia</p>
        </div>

        <div className="flex gap-3 flex-col xl:items-center ">
          {
              data.map((data, index) => (
                  <ul className="text-white ">
                <NavLink to={`/${data}`}>
              <li className="xl:text-center font-bold  xl:text-2xl text-xl coolw-link  text-white">{data}</li>
              </NavLink>
            </ul>
          ))
          }
        </div>

<div className="flex flex-col gap-3 text-white">
<p className="font-bold">Follow us</p>
<div className="flex gap-2">
<FaFacebook className="w-9 h-9"/>
<FaInstagram className="w-9 h-9" />
<FaLinkedin  className="w-9 h-9"/>

</div>

</div>

      </div>

<div className="w-9/12 ">
    <p className="text-white font-thin">NoGravityMedia © 2024 All Rights Reserved | <span ><NavLink to="privacy-notice"><span className="text-white border-b">Privacy Notice </span> </NavLink>
        </span>  | Security Policy</p>
</div>


    </div>
  );
};

export default Footer;
