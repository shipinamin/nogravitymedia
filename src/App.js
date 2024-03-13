import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import { useState } from "react";
import {Route, Routes } from "react-router-dom";
import Digitalservice from "./components/Digitalservice";
import Portfolio from "./components/Portfolio";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import  Footer  from "./components/Footer";
import  Privacynotice  from "./components/Privacynotice";
import  Digital_strategy  from "./components/Subpages/Digital_strategy";
import  Creative_strategy  from "./components/Subpages/Creative_strategy";
import  Social_media  from "./components/Subpages/Social_media";
import  Website_design  from "./components/Subpages/Website_design";
import  Seo  from "./components/Subpages/Seo";
import  Web_analytics  from "./components/Subpages/Web_analytics";
import  Shopify_website  from "./components/Subpages/Shopify_website";
import  POS  from "./components/Subpages/POS";
import  LMS  from "./components/Subpages/LMS";
// import Fintech from "./components/core/Porfolio/Fintech";


function App() {




  return (
<div className="w-screen flex flex-col items-center justity-center">
<Navbar/>




<Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/About us" element={<About />} />
      <Route path="/Services" element={<Digitalservice />} />
      <Route path="/Portfolio" element={<Portfolio/>} />
      <Route path="/Careers" element={<Careers/>} />
      <Route path="/Contacts" element={<Contact/>} />
      <Route path="/privacy-notice" element={<Privacynotice/>} />

      <Route path="/Digital Strategy and Planning" element={<Digital_strategy/>} />
      <Route path="/Creative Strategy and Web Graphics Design" element={<Creative_strategy/>} />
      <Route path="/Social Media Marketing" element={<Social_media/>} />
      <Route path="/Website Design and Development" element={<Website_design/>} />
      <Route path="/Search Engine Optimization" element={<Seo/>} />
      <Route path="/Web Analytics" element={<Web_analytics/>} />
      <Route path="/Shopify Website & Development" element={<Shopify_website/>} />
      <Route path="/POS" element={<POS/>} />
      <Route path="/LMS" element={<LMS/>} />
      {/* <Route path="/fintech" element={<Fintech />} /> */}



    </Routes>

    <Footer/>
</div>

  );
}

export default App;
