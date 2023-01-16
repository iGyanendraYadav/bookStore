import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    let Pages = [
        {name : "Home", link : "/"},
        {name : "Books", link : "/books"},
        {name : "About Author", link : "/author"},
        {name : "Blog", link : "/blog"},
        {name : "Contact", link : "/contact"},
    ]
  return (
    <> 
    

    <div className="bg-white p-20">
        <div className="flex flex-col justify-center items-center space-y-3 w-[90%] md:w-auto">
            <span className="Title text-3xl md:text-5xl font-semibold">Be the first to know</span>
            <span className="text-center text-sm md:text-lg md:w-[45%] w-auto">Lectus amet scelerisque fusce est venenatis, eget enim dolor amet vitae pharetra</span>
            <div className="newsletter pl-7 md:pl-0 flex flex-col md:flex-row justify-center items-center md:space-x-3 space-y-3 md:space-y-0">
                  <input type="text" placeholder='your email please' className='border border-gray-700 rounded-lg p-[0.6rem] indent-5 md:w-[320px] w-[420px]' />
                  <button className='text-sm font-bold rounded-lg px-4 py-3 md:w-[200px] w-[420px] bg-white text-indigo-500  hover:bg-indigo-800 hover:text-white border border-l border-indigo-700 transition-all ease-in duration-500' type="submit">Subscribe</button>
            </div>
        </div>
     </div>
    
    
    
    <div className="bg-gray-900">
      <div className="flex flex-col p-20 md:p-20 md:flex-row justify-center items-center md:justify-evenly md:items-center space-y-5 md:space-y-0 ">
                <div className='font-bold text-2xl cursor-pointer flex items-center text-white  '>
                                <span className='text-3xl text-white mr-1 pt-2'>
                                    <ion-icon name="book-outline"></ion-icon>
                                </span>
                                BookStore
                 </div>
                <ul className={`flex flex-col md:flex-row justify-between items-center `}>
                                 {
                                    Pages.map((link)=>(
                                        <li key={link.name} className="md:ml-8 text-xl my-2 md:my-0">
                                            <Link to={link.link} className="text-white">{link.name}</Link>
                                        </li>
                                   
                                       
                                    ))
                                } 
                                
                </ul>

                <div className="socials flex flex-row text-2xl text-white space-x-5">
                    <span className='cursor-pointer'><ion-icon name="logo-instagram"></ion-icon></span>
                    <span className='cursor-pointer'><ion-icon name="logo-facebook"></ion-icon></span>
                    <span className='cursor-pointer'><ion-icon name="logo-youtube"></ion-icon></span>
                    <span className='cursor-pointer'><ion-icon name="logo-twitter"></ion-icon></span>

                </div>


            </div>
            <span className='flex justify-center items-center text-white p-8 md:p-10 '>Copyright © 2022 || Powered By BookStore </span>
      </div>
    </>
  )
}

export default Footer