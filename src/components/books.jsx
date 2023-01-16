import React from 'react'
import pic1 from "../../src/pic1.jpg"
import pic7 from "../../src/pic7.jpg"
import pic8 from "../../src/pic8.jpg"
import pic9 from "../../src/pic9.jpg"
import pic10 from "../../src/pic10.jpg"

const Books = () => {
  return (
    <>

    <div className="bookPage bg-[#f2f5f7]">
      <div className="headlines flex flex-col justify-center items-center py-20 space-y-5">
          <span className="Title text-4xl md:text-7xl font-semibold">Books</span>
          <span className="text-center  text-sm md:text-lg w-[90%] md:w-[60%]">Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla.</span>
      </div>

      <div className="firstOne flex flex-col md:flex-row justify-around items-center">
        <div className="firstLeft flex flex-col order-2 md:order-1 justify-center items-center md:justify-start md:items-start w-[90%] md:w-[40%] space-y-10 md:space-y-10 my-10 md:my-0">
            <span className="newR  text-blue-600 uppercase text-sm  tracking-widest font-bold">New Release</span>
            <span className="Title text-4xl md:text-7xl font-semibold">The Sons of the Empire</span>
            <span className="text-center md:text-left text-sm md:text-lg">Justo habitant at augue ac sed proin consectetur ac urna nisl elit nulla facilisis viverra dolor sagittis nisi risus egestas adipiscing nibh euismod.</span>
            <div className="btn flex flex-row justify-between items-center space-x-20 md:space-x-5 ">
                <button className='text-sm font-bold rounded-lg px-4 py-3 bg-indigo-700 hover:bg-indigo-800 text-white transition-all ease-in duration-500' type="submit">Buy Now</button>
                <button className='text-sm font-bold rounded-lg px-4 py-3 bg-white text-indigo-500  hover:bg-indigo-800 hover:text-white border border-l border-indigo-700 transition-all ease-in duration-500' type="submit">Read Sample</button>
            </div>
        </div>
        <div className="firstRight flex flex-col order-1 md:order2">
            <img src={pic1} alt="kjg" />
        </div>
     </div>

    <h2 className='font-bold text-xl md:text-2xl mx-10 md:mx-20 py-10'>More Books</h2>

         {/* 5TH Div Section */}
         <div className="books flex md:flex-row flex-col justify-center items-center space-x-0 md:space-x-5 space-y-10 md:space-y-0 md:mx-20 mx-10 my-10 md:my-20">
        <div className="set1 flex flex-row space-x-5 ">
          <div className="flexItems flex flex-col space-y-1 ">
            <img src={pic7} alt="book" />
            <h3 className='text-sm font-bold text-gray-400'>Fantasy</h3>
            <h1 className='text-lg font-bold text-gray-700'>The Born of APLEX</h1>
            <h3 className='text-sm font-bold text-gray-700'>$26.00</h3>
          </div>

          <div className="flexItems flex flex-col space-y-1 ">
            <img src={pic8} alt="book" />
            <h3 className='text-sm font-bold text-gray-400'>Fantasy</h3>
            <h1 className='text-lg font-bold text-gray-700'>The Throned Mirror</h1>
            <h3 className='text-sm font-bold text-gray-700'>$23.00</h3>
          </div>
        </div>

        <div className="set2 flex flex-row space-x-5  ">
          <div className="flexItems flex flex-col space-y-1 relative">
            <img src={pic9} alt="book" />
            <div className='bg-indigo-700  rounded-full h-9 w-9 absolute -top-3 -right-3'><span className='absolute text-sm text-white font-semibold  top-2 right-1'>Sale</span></div>
            <h3 className='text-sm font-bold text-gray-400'>Fantasy</h3>
            <h1 className='text-lg font-bold text-gray-700'>Ark Forging</h1>
            <h3 className='text-sm font-bold text-gray-700 space-x-3'><del className='text-gray-400'>$26.00</del><span>$20.00</span></h3>
          </div>

          <div className="flexItems flex flex-col space-y-1 relative">
            <img src={pic10} alt="book" />
            <div className='bg-indigo-700  rounded-full h-9 w-9 absolute -top-3 -right-3'><span className='absolute text-sm text-white font-semibold  top-2 right-1'>Sale</span></div>
            <h3 className='text-sm font-bold text-gray-400'>Fantasy</h3>
            <h1 className='text-lg font-bold text-gray-700'>The Sons of Empire</h1>
            <h3 className='text-sm font-bold text-gray-700 space-x-3'><del className='text-gray-400'>$25.00</del><span>$20.00</span></h3>
          </div>
        </div>
     </div>


     <div className="books flex md:flex-row flex-col justify-center items-center space-x-0 md:space-x-5 space-y-10 md:space-y-0 md:mx-20 mx-10 my-10 md:my-20">
        <div className="set1 flex flex-row space-x-5 ">
          <div className="flexItems flex flex-col space-y-1 ">
            <img src={pic7} alt="book" />
            <h3 className='text-sm font-bold text-gray-400'>Fantasy</h3>
            <h1 className='text-lg font-bold text-gray-700'>The Born of APLEX</h1>
            <h3 className='text-sm font-bold text-gray-700'>$26.00</h3>
          </div>

          <div className="flexItems flex flex-col space-y-1 ">
            <img src={pic8} alt="book" />
            <h3 className='text-sm font-bold text-gray-400'>Fantasy</h3>
            <h1 className='text-lg font-bold text-gray-700'>The Throned Mirror</h1>
            <h3 className='text-sm font-bold text-gray-700'>$23.00</h3>
          </div>
        </div>

        <div className="set2 flex flex-row space-x-5  ">
          <div className="flexItems flex flex-col space-y-1 relative">
            <img src={pic9} alt="book" />
            <div className='bg-indigo-700  rounded-full h-9 w-9 absolute -top-3 -right-3'><span className='absolute text-sm text-white font-semibold  top-2 right-1'>Sale</span></div>
            <h3 className='text-sm font-bold text-gray-400'>Fantasy</h3>
            <h1 className='text-lg font-bold text-gray-700'>Ark Forging</h1>
            <h3 className='text-sm font-bold text-gray-700 space-x-3'><del className='text-gray-400'>$26.00</del><span>$20.00</span></h3>
          </div>

          <div className="flexItems flex flex-col space-y-1 relative">
            <img src={pic10} alt="book" />
            <div className='bg-indigo-700  rounded-full h-9 w-9 absolute -top-3 -right-3'><span className='absolute text-sm text-white font-semibold  top-2 right-1'>Sale</span></div>
            <h3 className='text-sm font-bold text-gray-400'>Fantasy</h3>
            <h1 className='text-lg font-bold text-gray-700'>The Sons of Empire</h1>
            <h3 className='text-sm font-bold text-gray-700 space-x-3'><del className='text-gray-400'>$25.00</del><span>$20.00</span></h3>
          </div>
        </div>
     </div>

    </div>

    
    </>
  )
}

export default Books