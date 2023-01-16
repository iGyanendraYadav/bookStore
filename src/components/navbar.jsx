import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
    let Pages = [
        {name : "Home", link : "/"},
        {name : "Books", link : "/books"},
        {name : "About Author", link : "/author"},
        {name : "Blog", link : "/blog"},
        {name : "Contact", link : "/contact"},
    ]

    const [open, setOpen] = useState(false);

  return (
    <>


        <div className="navbar shadow-md w-full top-0 left-0  ">
            <div className="md:flex items-center justify-between md:bg-[#f2f5f7] bg-white py-4 px-7 md:px-10">
                <div className='font-bold text-2xl cursor-pointer bg-white md:bg-[#f2f5f7] flex items-center text-gray-800  '>
                    <span className='text-3xl text-gray-800 mr-1 pt-2'>
                    <Link to="/" ><ion-icon name="book-outline"></ion-icon></Link> 
                    </span>
                    <Link to="/" >BookStore</Link> 
                </div>

                <div onClick={()=>{setOpen(!open)}} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden  '>
                        <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center pb-4 md:pb-0 absolute md:static bg-white md:bg-[#f2f5f7]  md:z-auto -z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'} md:opacity-100`}>
                    {
                        Pages.map((link)=>(
                            <li key={link.name} className="md:ml-8 text-xl my-7 md:my-0">
                                <NavLink to={link.link} className="text-gray-500 hover:text-gray-900 duration-500">{link.name}</NavLink> 
                                 
                            
                            </li>
                        ))
                    }




                </ul>
                <div className="bag text-2xl space-x-5 flex-row justify-around items-center hidden md:block ">
                    <span className='cursor-pointer'><ion-icon name="search-outline"></ion-icon></span>
                    <span className='text-blue-600 text-lg font-bold cursor-pointer'>$0.00</span>
                    <span className='text-blue-600 font-bold cursor-pointer'><ion-icon name="bag-outline"></ion-icon></span>
                </div>
            </div>
        </div>
   
    </>
  )
}

export default Navbar
