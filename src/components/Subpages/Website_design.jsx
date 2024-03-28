import React from 'react'
import Herosection from '../common/Herosection'
import bg from '../../assets/workspace-1280538_1280.jpg'
import Button from "../Button"
import Faq_comp from '../common/Faq_comp';
const Website_design = () => {
  const data = [
    
    {
img:'https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png',
title:'Node js'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png',
title:'React Js'
  },
    {
img:'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
title:'Angular js'
  },
    {
img:'https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png',
title:'Vue Js'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
title:'Type Script'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
title:'javascript'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png',
title:'php'
  },
    {
img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX///84frj/wzExe7f/wipxnsj/0G0qeLX/wi0gdLP/vxWLrtH+/v//wSQverb/vgD/3JbN2+rf6PEWcbJVjcD/7cz/462vxt7/6sL/9N//2In/yVB7pMv/4q2+0OShvdmVtdRFhbvD1Ob/03n/x0T/5bX/+vL/3p//0nTx9flml8W0yd//+Or/z2b/57r/9OD/zFtdksLm7fVp23ZAAAAHeElEQVR4nO2da3eaTBCAI4gIEUHxEqM1EE3MzbTp//9xr6SCeEGG2cHZ+M7zJa3p8fCchZ1ZdmZ7cyMIgiAIgiAIgiAIgiAIgiAIApjXfm8+fohuZzMrYTa7jR7G817/lfvCCOjPIyt2Ntgbut2umbD5mfw1+Ti2onmf+yLR9KKvxMxsnMPcmIaDqNfhvtqqdN7fQqdELq/phG/vP0myZ4Vgu51laPW4LxzIPHaq6m0lnXjOffEAeli/b5xY93HsWKGCX0Joaf089rtdNb8NXVvj8PEeKvslhO/cIkWM84KboI4ez3DMrXKax5yg07gdj283P5CKj9wyp/i7EzQb2xmx10DOO+FfXpmTDDIZc9A58WklzAGjSQHz3B2Zm+87uDFsOPrdp3E2WM5e0O7hnkUz5hIpop8T2f8NdhB1i4oPdnpp3dv939zigob9wCNSyCzzsA+C2dg+J1JId8YjUoiVPYZEhqbFI1LIzpDoLtXYkGimMd94RArJGe5Hi0dk5qazIUnE19swl7V1kFmb5oabdHubc6Ezb90NlVdPP8BQbQX8bfjFrXTAkaEqYnhx6A11WwOLoRiKIT/0hrq9qLFsEwhUUTfDyAICTsV1MwTzDn2p8WMNwa9txFBbxPB/ZNgo/y49Ac+lDIb9hxk06FHEw9QwWLcOWawmNfg9xo7dheYtFDlNatjymkd47vKO2O/vQKUOCEdq2DRO0HanH5SCj6p1QOSGhtH0CYdxTFMnQ2toGP6ISpCoEIjc0PCfaAT7PIIAQ8MfUgh2cDucFzE0PApDS70Yr0bDlrpgj+kehRkarvp9GnMJwgzbS1XBucL20SUMDfdT0TBmEwQaqg4ismbrgoaqTyL5a1B6w6bSdNphm0jhhob/rGAIX64yGnoqudsb402avqcpNWyu8YKsNynY0PDxhpwzaQVDhdk0YnwMs338damhF6ANvxgfQzOtL522ywzbU7Qh52PYjbYX4ZUJKjyIfc7H0N4Wjj275YYu9uXinDMahts26AnA0MNm36wTTbqNPwLcpeiphjMpzarFy4OFQmoa8wk2nLREFXCT4ldQjBONHW2v4Q5iaLg4wVdOw3QIy+P9tyFuecEYLMK0GP7DhwhiwwVfVupE6TUsQEOIzUzZwqGT9aT8hg0h9nUUsp1HmTAbQUBO+g8Pt0fzwGJod3cNKSvQRJoYrlCGDCmNaTu5prwJ8B5FJzXIlqzttValmxzj8pU/4OQZkK+lhvcowxnScDMQjj14q1jBMIvGB4fUGMCHMDFcXM7QdBxrTHE80rMBCxTfNHGGiMS7G74R9WBPPPgIbgxfLmNohjOqgwJW4EnmkobOgKr9+vcUGiZSQ9zyqaJhSNV8/bHwq9yhlxpDk+pUmbu1X2GKUTOsMpeaDYrpczJquW51P/RcWsHQbOyHsuGvYHFUb3ee9dRzXQ+jZ6DjYYWcxs6P4NMf3/VOlNuVUPXZ2zPE5TTwvDTMPYMBeiBUDHF5KXhtkcuWhx48maQ0xK0toOvDXIdSUC1Q0xni1ofQNf7uHl1UDNRkINf4wPc0u0NIAi5B7Hsa4Lu27NCqIdMtaqDftcHel+765lnmmK0hshwDZJgdWRVwGuIEb2KQYfqv2R5ChX0LSOqdHZTzxDiE6L0nSFKT7YL9uXwmk4HeP4QExOzQMb6JVGEPGBIuwu2iYsj4GOL38SG1GOb2n0I2o2sDXxRVXk+T5aScsaL9B21YPtVk8R64DVYLCjVR5ZlpFiwgBQV1oVDXVl6bqIWhQm1ieX2pDoYq9aXlNcI6GCrVCJfepjoYKtV5l6amGhiq1eqXzqYaGKp2PsW6Gyo3PpX0PfEbKvc95c541tJQvXetpP+Q3ZCg//B8Dym3IUUP6fk+YHZDAsHzvdzMhj7R+Rhn+vF5Dan68c+dqcBqSHemwplzMRgNSc/FuLl5LTjbhM2Q+myTm6LzaezKhu3K298nqOF8moSTZwxFFQ3b04oVDKeo54yhEqCGSstVVsCGv7ivFIsYiqH+iGFmePVzKTwe4jcj6oE8p/FU3mTXAXleqvgalB4xFEMx5EcMxfDaDT3vqD78mgzbrnE/Gt0b7l4/whUZNo3t5srdXsfh9Rg2cwcETXNfcjWGbSP/LbnG2Ksx3N//y1U4Xo2hsf81u8+vxfCwJes+CxpXY3iwfTTS1xBZfXnGENdSWB8rXAVt8V2KbEerD8ihYyfZ/5rd5/ja7bpY4npAi6IFQZ0MNbAjq44oivhuHfuDikxxc83prK2JP+yxPoCHVh0rppn3MJd5+9Rb2CTcIRVPrJ5oixDoGKE7gw5WwJRlJLQ80TQ/0RUC0TMhaFb3PO0i4R4tV+VshOSh1C0fPWK4VHBsu0uS/1elZj6XqPNJNnHDXSqXNF+IYcuvfDhG0/NbP2H8Up6f1r4LPsyq7bn++kmpMYSFYfDvGJdznu2mt7GbBj9p9PaZfAatpZuQBPX00JrvP39/umwFn3oHBxjPk+HnaBXcLxYvL62Xl8XiPliNPoeTn3dfCoIgCIIgCIIgCIIgCIIgCAIj/wHCUcGo8XQ7kAAAAABJRU5ErkJggg==',
title:'python'
  },
    {
img:'https://logowik.com/content/uploads/images/731_java.jpg',
title:'java'
  },
    {
img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAD4CAMAAACXF/l7AAAAtFBMVEX///9nt/dCpfUNR6Fhtffn8/5bs/eo1Prb4+8ANpvN5vwARKDr9f6Mx/kwn/QKRqEUSJkVSJZKqPUXRpBwu/gQSJ/v9/7J5PwXRIkAQJ+TyvkUSJfi6PIXQH8/jtDQ5/wWPXkCGTy6xuAUOHAAMZoUM2QAPJ5JmN0QLl0WN2oMJ1AACiwIIUan0/qIwvje7v0UOXgALnkAP48QLFcPNG4NO4MHHT8JJ1YFKF0AEWcAKYUAJpcmVNy+AAAEvklEQVR4nO3ciXrSQBQFYDbpgi1RTMG2ppbF0E2RzVrf/73MKiQEMpOZhDPXe17A7//OPUy3z1qNw+FwOBwOh8Op1a7eacixEVHu2hoCgrlr15XTYov2sIWw5f2xFWG4F7aUHd4L4V7Yoj28F7KWVp2OBWYv54RujC1JCiFLvc570R62kLXAvJVsSWHoWFqtq2MrwvCNkbXwXkoIpRvrs4WqBWb7OnpB2T7fGFkL76WE8I2xpezwXuhaCN1YnZKF0FtZp7QXQr3AbJ/Sz2F4+0kKJQvKXijdGG8/ZSH0VlLaC4qF90LWwm9lCaF0Y5T+3pLS5xil31dq+Vs4EAvvhawF5q2ktH3eC1vKDqW98FuZDKEbg/k5DL+VqYBYeC9sKTv8VmL2wttPWQi9lZT2gmLhvSQppPZCyULoxihZKO2FkoXSjaFYdPw/JP/ZW3nycqKal34VFoG38rrdUk37ohJL/o1dq/8zlCytSiwCezHGIrQXUyyEbgzFUtHfXFVi0YCB2X5N/cxgtq9BA7MXDRo0i4oGaS+qGqy9qGnwbqy4BtVSRIO4lziy3zYjW2S7wdx+MQ3uXuQ1+BZxDfZe5DQ4X/Ora0y4MXGNKRYBjciNtTAsea+nyPYvLj9+wrAc7kZkLxeXjYaiRpvlkEbUoqjRaDmgEdhLaFHSaLXs3Y3QXhoNRY1mS3Y34jempNFuydLIWgpqSrBkaCT2oqApxbKjKWApoCnJkvwUEHsr0xZpTWmW7W7k91JIU6JlW1PUIqUp1fJPU2gv0pqSLdFuCu5FUlO6xe+m+F6kNBVYPI3SjQlrKrGIJM8ioDHIkqsxypKjMcxyUGOc5YDGQMteDYzlu4RljwbGItPLHk3+349VFFlLhgbGIndjmRqjLSkNjEX+xnY0xlu2NDCWYjeW0JCwRBoilkBDxuJp6tfHRkT5oWxpNNzTYyvi3Clr3NnP22Mr4qhq3NlsQEXjLmdfBr05iUtzR1+/DAa9DzYBTWgZ9G6sjvGX5lnCYm4s+7PhGncUHZmHQdKcF9C4D54lxFgexu4arPEtQTFRM3YTZzeyGncyioqJm7E7OJcmtxt3GhWzacar5huMRqYb3xIXs8E0OziX1hfWuNNJtP4QY0UYEzWBJXwvk814GpzdiF2as5g+xItJNWOcxnmMislqBkqTf2mBJSgmG2PSbpzHRVxM5pmZ1I3zvClmTzNNU94b5z4uZhfT3MSIbnzLYrKLsbYlhuzGuX/2i/G+KtvG7FJM0PiW6Mo2mBu72d21QF1a1m6cp2e/mG1Mz+5mSuA1zlNUTIwZWN39FOxL8yxrr5hoMqOB1TwoCTQ433smNYElvLLJZDZvZg/FjG58y9q/ssV0ucrvBHo3ocVr5nUlVAmiJu4msKzXv1Z2V84CeGmB5XEpOBRsjW9ZruyMZ15Mg3Np55fO0+sq8TWxwZr+7/l8bilYfA3M7wiGb4oWqN0M3xQtUJc2PFO0QH3vORyra4C6GRd4YVKaDs6ngAYNrW6QdsOapAbo9TzT8ClAqxtSGmK7wdHo2A3OpwCtzzTeTVpDqhugS9PwKQCk4d2kNbS6wdHwbnC7GZ+pZvwHRnN7qiHHRnA4HA6Hw+FwsvMXDX7ldQ7FwwoAAAAASUVORK5CYII=',
title:'flutter'
  },
    {
img:'https://cms-assets.tutsplus.com/uploads/users/362/posts/29304/preview_image/picKotlin.jpg',
title:'kotlin'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png',
title:'wordpress'
  },
    {
img:'https://avatars.githubusercontent.com/u/8085?s=280&v=4',
title:'shopify'
  },
    {
img:'https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png',
title:'AWS'
  },
    {
img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/1200px-WooCommerce_logo.svg.png',
title:'woocommerce'
  },
    {
img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOv-8ULHwGd9aXOXRrXCBPOnMAs75k87LN_s9oSfWJe_cVwoTGizwRS3s2miesfR2jEiY&usqp=CAU',
title:'.NET'
  },
    {
img:'https://developer.apple.com/swift/images/swift-og.png',
title:'swift'
  },


  ]

  const freq_ask_ques=[
    {
      questions:"What is your front end development process?",
      // answers :"1. We understand your requirements and work with you to create a detailed development plan with clear milestones.</br> 2. Our designers create a wireframe for the interface, working with you to refine the design and flow. ",
      answers:<div  className='flex flex-col gap-[30px]'> <p>1. We understand your requirements and work with you to create a detailed development plan with clear milestones.</p>
 <p>2. Our designers create a wireframe for the interface, working with you to refine the design and flow.</p>
      
      <p>3. Our front end developers build a logical layer for the front end, and then combine it with the aesthetic design layer to create a responsive prototype.</p>
      
      <p>4. The prototype is then put through rigorous functional and non-functional testing. Bugs are eliminated and the software is refined to reach production quality.</p>
      
      <p>5. The completed front end is deployed, and the source code is handed over to you. We then enter the support phase of the project.</p>
      </div>
    },
    {
      questions:"How much do your front end development services cost?",
      answers:`The cost of development depends on your requirements. Speak with our solutions expert today to get an estimate.
      `
    },
    {
      questions:"What are the development tools you work with?",
      answers:`We work with front end development languages like TypeScript, JavaScript, HTML, and CSS. We also work with frameworks like Angular, React.js, and Vue.js. Our full-stack front end developers are skilled in development patterns including MEAN, MERN, MEVN, and LAMP.
      `
    },
  ]


  
  return (
    <div className='w-full flex flex-col items-center justify-center pb-[100px] gap-[80px] '>
    {/* <Herosection data={"Web Development"}/> */}
    <div className='w-screen h-[100vh] bg-center bg-cover min-xl:pl-[100px] flex items-center backdrop-filter backdrop-blur-2xl' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), transparent), url(${bg})`}}>


<div className='min-xl:w-[50vw] text-white flex flex-col gap-5 xl:px-[30px]'>

<h1 className=' text-[30px] font-bold tracking-[3px] '>
  WEB DEVELOPMENT SERVICE
</h1>

<p className='min-xl:leading-[40px] min-xl:text-[24px]  min-xl:tracking-[5px] xl:leading-[30px] xl:text-[18px] xl:tracking-[0.4px] font-[200]'>Our web development team builds high-performing, user-friendly,
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

<div className='w-[70%] xl:w-10/12 flex justify-center items-center  flex-col gap-10 p- pb-14 '>
<h1 className='font-bold text-4xl'> Our tech Stack</h1>

<div className='grid w-full grid-cols-3 items-cente gap-10 sm:grid-cols-2 '>
{
  data.map((data,index)=>(


<div key={index}>
    <div  className='flex flex-col items-center justify-center'>

    <img src={data.img} alt="" class='h-[100px]  ' loading='lazy'/>


<p className='capitalize'>{data.title}</p>
</div>

</div>
  ))}

</div>

</div>

</div>


{/* <div>
  <img src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg" alt="" className='w-screen' />
</div> */}



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

{/* <img src="https://static.vecteezy.com/system/resources/previews/003/001/221/non_2x/freehand-world-map-sketch-on-white-background-free-vector.jpg" alt="" /> */}

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

{/* <img src="https://www.liquidplanner.com/wp-content/uploads/2013/12/iStock-520289888-2-e1641284826152.jpg" alt="" /> */}

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

{/* <img src="https://img.freepik.com/premium-photo/team-concept-with-two-man-sunset-background_493806-6439.jpg" alt="" /> */}

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


<div className='w-full flex justify-center'>
<Faq_comp freq_ask_ques={freq_ask_ques}/>
</div>


  </div>
  )
}

export default Website_design