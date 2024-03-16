import React from 'react'
import Herosection from '../common/Herosection'
import bg from '../../assets/pexels-josh-sorenson-1714205.jpg'
import Button from "../Button"
const Website_design = () => {
  const data = [
    {
        title: "Node.js",
        para: "Node.js is a powerful runtime environment that allows us to build scalable and efficient server-side applications. With its non-blocking, event-driven architecture, we can handle concurrent connections and high traffic loads effectively, ensuring optimal performance and responsiveness for your applications."
    },
    {
        title: "React.js and React Native",
        para: "React.js and React Native are industry-leading JavaScript libraries for building interactive user interfaces and mobile applications. By utilizing component-based architecture and virtual DOM, we can create reusable UI components and deliver seamless experiences across web and mobile platforms. Whether it's a web application or a native mobile app, we leverage React.js and React Native to provide engaging and intuitive user experiences."
    },
    {
        title: "Angular",
        para: "Angular is a comprehensive JavaScript framework for building dynamic and feature-rich web applications. With its powerful data binding, dependency injection, and modular structure, we can develop scalable and maintainable front-end solutions tailored to your specific business needs. From single-page applications to enterprise-grade systems, we harness the full potential of Angular to deliver robust and user-friendly applications."
    },
    {
        title: "Vue.js",
        para: "Vue.js is a progressive JavaScript framework for building modern web applications. Its simplicity, flexibility, and performance make it an ideal choice for rapid prototyping and developing scalable UI components. With Vue.js, we can create responsive and interactive applications that offer a smooth and enjoyable user experience. Whether you need a simple website or a complex SPA, Vue.js empowers us to bring your ideas to life with ease."
    },
    {
        title: "Typescript",
        para: "Typescript is a statically typed superset of JavaScript that enhances code maintainability, readability, and scalability. By adding static types, interfaces, and advanced features to JavaScript, we can catch errors early in the development process and write more robust and reliable code. With Typescript, we ensure code quality and consistency, enabling seamless collaboration and reducing bugs in your projects."
    },
    {
        title: "JavaScript",
        para: "JavaScript is the backbone of modern web development, powering dynamic and interactive websites and applications. With its versatility and extensive ecosystem of libraries and frameworks, we can create customized solutions tailored to your unique requirements. From front-end development to server-side scripting, we leverage the full potential of JavaScript to deliver innovative and engaging digital experiences for your users."
    },
    {
        title: "PHP",
        para: "PHP is a popular server-side scripting language that enables us to create dynamic and database-driven websites and web applications. With its simplicity, flexibility, and extensive library support, we can develop robust back-end solutions tailored to your business needs. Whether you need an e-commerce platform, a content management system, or a custom web application, PHP empowers us to deliver scalable and reliable solutions that drive your online presence forward."
    },
    {
        title: "Python",
        para: "Python is a versatile and powerful programming language known for its simplicity, readability, and vast ecosystem of libraries and frameworks. With its elegant syntax and rich set of features, we can build anything from web applications to data analysis tools with ease. Whether you need a web scraper, a machine learning model, or a backend API, Python enables us to develop efficient and maintainable solutions that meet your business objectives."
    },
    {
        title: "Java",
        para: "Java is a widely-used programming language renowned for its portability, performance, and scalability. With its robust ecosystem of tools and libraries, we can develop enterprise-grade applications for a variety of platforms, including web, mobile, and desktop. Whether you need a scalable backend service, an Android app, or a desktop application, Java empowers us to deliver reliable and secure solutions that meet the demands of modern businesses."
    },
    {
        title: "Flutter",
        para: "Flutter is a cross-platform UI toolkit developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. With its fast development cycle, expressive UI, and native performance, we can create beautiful and responsive applications that run seamlessly on iOS, Android, and the web. Whether you need a mobile app, a web app, or a desktop application, Flutter enables us to deliver high-quality experiences across multiple platforms."
    },
    {
        title: "Kotlin",
        para: "Kotlin is a modern programming language that offers interoperability with Java and seamless integration with Android Studio. With its concise syntax, null safety, and extensive tooling support, we can develop Android applications with ease and efficiency. Whether you need a new Android app or want to migrate your existing Java codebase to Kotlin, we leverage the power of Kotlin to deliver robust and maintainable solutions that enhance your mobile presence."
    },
    {
        title: "Wordpress",
        para: "WordPress is a versatile content management system (CMS) that powers millions of websites and blogs worldwide. With its user-friendly interface, customizable themes, and extensive plugin ecosystem, we can create beautiful and functional websites tailored to your brand and audience. Whether you need a simple blog, an e-commerce site, or a corporate website, WordPress empowers us to build scalable and feature-rich solutions that meet your business goals."
    },
    {
        title: "Shopify",
        para: "Shopify is a leading e-commerce platform that enables businesses to create and manage online stores with ease. With its intuitive interface, customizable themes, and powerful features, we can build a professional online storefront that drives sales and enhances your brand visibility"
    }
  ]
  return (
    <div className='w-full flex flex-col items-center justify-center '>
    {/* <Herosection data={"Web Development"}/> */}

    <div className='w-screen h-[90vh] bg-center bg-cover min-xl:pl-[100px] flex items-center' style={{backgroundImage:`url(${bg})`,  backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

<div className='min-xl:w-[50vw] text-white flex flex-col gap-5 xl:px-[30px]'>

<h1 className=' text-[30px] font-bold tracking-[3px] '>
  WEB DEVELOPMENT SERVICE
</h1>

<p className='leading-[30px] text-[20px] tracking-[3px]'>Our web development team builds high-performing, user-friendly,
and secure web products that provide superior customer
experience and ensure faster growth. Drive your business forward
and outpace the competition with our full-scale custom web
development services</p>

<div>
<Button data={"Get Quote"}/>
</div>

</div>

    </div>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 pt-24 pb-14 leading-10'>
<p className='text-4xl font-bold'>Welcome to No Gravity Media
</p>
<p className='font-light min-xl:text-2xl min-xl:leading-9  '>where innovation meets excellence in IT solutions. Founded with a vision to redefine the digital landscape, we are a dynamic team of tech enthusiasts dedicated to empowering businesses with cutting-edge technology.
</p>
</div>

<div className='w-full  flex flex-col items-center justify-center'>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 p- pb-14 '>
<h1 className='font-bold text-4xl'> Our tech Stack</h1>

<div className='flex items-cente gap-4 flex-col'>
{
  data.map((data,index)=>(


<div key={index}>
<p className='min-xl:text-2xl min-xl:leading-9 tracking-wider font-light'><span className='font-bold text:xl '>{data.title} : </span> {data.para}</p>
</div>
  ))}

</div>

</div>

</div>


<div>
  <img src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg" alt="" className='w-screen' />
</div>



<div className='w-full bg-[#EFF0F1] flex flex-col items-center justify-center'>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-8  '>
<h1 className='font-bold text-4xl'>Custom Web Development Services</h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>Is off-the-shelf software not meeting your specific business needs? We offer custom web
development services that go beyond just coding and include business analysis, design,
product testing, cloud computing, DevOps, and system administration. By leveraging this
end-to-end approach, we ensure that our clients receive tailor-made web solutions that
cater to their unique requirements.
</p>
{/* <p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>Our purpose was to do performance marketing, providing integrated data-driven digital marketing solutions and achieving high return on investment for our clients budget.</p>
<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>We have evolved, diversified our portfolio of services but one thing remains the same: Data is in our DNA, the pilar that sustains every strategy we develop. Together with our clients, we design and implement disruptive and efficient experiences to satisfy the greatest needs of the brand, the users, and the community.</p> */}

<img src="https://static.vecteezy.com/system/resources/previews/003/001/221/non_2x/freehand-world-map-sketch-on-white-background-free-vector.jpg" alt="" />

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'> Be it acquisition, loyalty, or cross/up-selling strategies, we generate a high impact across all business goals, supported by proprietary methodologies. This is because our approach to digital marketing is not focused on the development of digital campaigns, but on the creation of long-term relationships.</p>
</div>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-8  '>
<h1 className='font-bold text-4xl'>Website Redesign and Modernization
 </h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>Unsatisfied with your outdated website design? We will revamp your site, enhancing its visual
appeal, functional richness, and user experience. This entails updating legacy tech stacks,
re-engineering architecture for improved scalability, and integrating innovative features consistent
with your corporate identity, brand, and site's overall message.

</p>

<img src="https://www.liquidplanner.com/wp-content/uploads/2013/12/iStock-520289888-2-e1641284826152.jpg" alt="" />

</div>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-8  '>
<h1 className='font-bold text-4xl'>Web Integration Services</h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>Want to strengthen your brand by integrating key technologies with new and current
systems? Our website development teams are experts in using appropriate tools,
technologies, and frameworks to achieve your desired goals. We offer a range of
services, including data integration, enterprise application integration, data migration &
upgrades, API development & integration, quality assurance, and more, ensuring that all
your needs are met.

</p>

<img src="https://img.freepik.com/premium-photo/team-concept-with-two-man-sunset-background_493806-6439.jpg" alt="" />

</div>

<div className='w-[70%] xl:w-10/12 flex justify-center  flex-col gap-5 py-24 '>
<h1 className='font-bold text-4xl'>Technology Consultation</h1>

<p className='font-light min-xl:text-2xl min-xl:leading-9 tracking-wider'>Looking for expert insights for informed technical choices in today's changing business landscape?
We assist businesses in utilizing modern technologies and innovation to shape their business
strategies and execute their digital transformation journeys to deliver exceptional and sustainable
value from their technology investments.
</p>

{/* <img src="https://img.freepik.com/premium-photo/team-concept-with-two-man-sunset-background_493806-6439.jpg" alt="" /> */}

</div>



</div>





  </div>
  )
}

export default Website_design