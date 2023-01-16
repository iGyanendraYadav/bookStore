import React from 'react'

const Contact = () => {
  return (
    <>
      
      <div className="bookPage bg-[#f2f5f7] overflow-x-hidden">
          <div className="headlines flex flex-col justify-center items-center py-10 md:py-16 space-y-5">
              <span className="Title text-4xl md:text-7xl font-semibold">Contact</span>
              <span className="text-center  text-sm md:text-lg w-[90%] md:w-[60%]">Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla.</span>
          </div>


          <div className="contactMe flex flex-col md:flex-row justify-evenly items-start space-y-5 md:space-y-0  md:pt-5 md:pb-16 mx-7 md:mx-0">
                <div className="firstOne flex flex-col ">
                  <div className="flex flex-row justify-start items-center ">
                    <span className='text-xl md:text-3xl text-blue-600 font-bold'><ion-icon name="at-outline" ></ion-icon></span>
                    <span className='font-bold text-sm'>MAIL ME</span>
                  </div>
                  <span className='text-lg '>mail@example.com</span>  
                  <span className='text-lg '>info@example.com</span>  
                </div>

                <div className="secondOne flex flex-col justify-start items-start space-y-5">
                      <span className="text-left text-3xl md:text-5xl font-semibold ">Send a Message</span>
                      <span className="text-left text-sm md:text-lg w-[550px]">Ultrices dui maecenas quisque cras dui sed porttitor aliquam morbi libero egestas lacus sed</span>
                      <form action="/" method="post" >
                        <input type="text" name="name" id="name" placeholder='Full Name' className='md:w-[550px] w-[450px] md:h-10 h-10 my-3 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-black indent-3' /><br/>
                        <input type="email" name="email" id="email" placeholder='Email Address' className='md:w-[550px] w-[450px] md:h-10 h-10 my-3 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-black indent-3'/><br/>
                        <input type="text" name="sub" id="sub" placeholder='Subject' className='md:w-[550px] w-[450px] md:h-10 h-10 my-3 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-black indent-3'/><br/>
                        <textarea name="message" id="message"   placeholder='Your Message' className='md:w-[550px] w-[450px] md:h-28 h-14 my-3 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-black indent-3'></textarea><br/>
                        <button className='text-sm font-bold rounded-lg px-4 py-3 bg-white text-indigo-500  hover:bg-indigo-800 hover:text-white border border-l border-indigo-700 transition-all ease-in duration-500' type="submit">Send Message</button>
                      </form>
                </div>

                <div className="socials flex flex-row text-2xl text-blue-600 space-x-5 py-5">
                    <span className='cursor-pointer'><ion-icon name="logo-instagram"></ion-icon></span>
                    <span className='cursor-pointer'><ion-icon name="logo-facebook"></ion-icon></span>
                    <span className='cursor-pointer'><ion-icon name="logo-youtube"></ion-icon></span>
                    <span className='cursor-pointer'><ion-icon name="logo-twitter"></ion-icon></span>
                </div>
          </div>


          <div className="parallax md:p-28 p-8 ">
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:pl-44 space-y-5">
                <span className='md:text-5xl  text-3xl font-bold text-white'>Speaking - Events</span>
              
                  <span className='text-lg md:text-xl text-center md:text-left text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
                    <button className='text-sm font-bold rounded-lg px-5 py-3 text-white bg-transparent   hover:bg-white hover:text-blue-700 border border-l border-indigo-700 transition-all ease-in duration-500' type="submit">Contact Me</button>
               
              </div>
          </div>

      </div>
    </>
  )
}

export default Contact
