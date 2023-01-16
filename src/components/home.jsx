import React from 'react'
import pic1 from "../../src/pic1.jpg"
import pic2 from "../../src/pic2.jpg"
import pic3 from "../../src/pic3.svg"
import pic4 from "../../src/pic4.svg"
import pic5 from "../../src/pic5.svg"
import pic6 from "../../src/pic6.svg"
import pic7 from "../../src/pic7.jpg"
import pic8 from "../../src/pic8.jpg"
import pic9 from "../../src/pic9.jpg"
import pic10 from "../../src/pic10.jpg"

const Home = () => {
  return (
    <>
    <div className="bg-[#f2f5f7]">
         {/* First Div Section */}
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
        {/* 2nd Div Section */}
     <div className="secondOne flex flex-col md:flex-row justify-around items-center md:my-28 my-8 ">
         <div className="secondLeft flex flex-col w-[90%] md:w-[40%] ">
            <img src={pic2} alt="author" />
        </div>
        <div className="secondRight flex flex-col  justify-start items-start md:justify-start md:items-start w-[90%] md:w-[45%] space-y-10 md:space-y-10 my-10 md:my-0">
            <span className="newR  text-blue-600 uppercase text-sm  tracking-widest font-bold">biography</span>
            <span className="Title text-3xl md:text-5xl font-semibold">John Roberts</span>
            <span className="text-left text-sm md:text-lg">Tellus tellus mattis pulvinar nulla euismod fermentum rhoncus sed vestibulum neque praesent pharetra ut fames viverra suscipit gravida dictumst volutpat ullamcorper lacus, malesuada enim proin volutpat mattis nunc amet, eget vitae egestas.</span>
            <span className="text-left text-sm md:text-lg">Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean nam.</span>
            
            
                <button className='text-sm font-bold rounded-lg px-4 py-3 bg-white text-indigo-500  hover:bg-indigo-800 hover:text-white border border-l border-indigo-700 transition-all ease-in duration-500' type="submit">Read More</button>
          
        </div>

     </div>

     <div className="h-[1px] w-[90%] mx-7 bg-gray-400 md:hidden block my-1"></div>


      {/* 3rd Div Section */}
    <div className="awards flex flex-col md:flex-row justify-around items-center my-20 md:my-10 md:mx-20 mx-10 space-y-10 md:space-x-8">
      <div className="flex flex-col justify-start items-start space-y-4 md:pt-10  ">
          <img src={pic3} alt="award1" />
          <h1 className='text-lg md:text-xl font-bold'>Best Author Awards 2012</h1>
          <span className="text-left text-sm md:text-lg">Arcu pellentesque nisi consectetur netus aenean metus sit mattis sit sed.</span>
      </div>
      <div className="flex flex-col justify-start items-start space-y-4">
          <img src={pic4} alt="award1" />
          <h1 className='text-lg md:text-xl font-bold'>World's #1 Best-selling Book</h1>
          <span className="text-left text-sm md:text-lg">Arcu pellentesque nisi consectetur netus aenean metus sit mattis sit sed.</span>
      </div>
      <div className="flex flex-col justify-start items-start space-y-4">
          <img src={pic5} alt="award1" />
          <h1 className='text-lg md:text-xl font-bold'>NYT Best-selling Author 2014</h1>
          <span className="text-left text-sm md:text-lg">Arcu pellentesque nisi consectetur netus aenean metus sit mattis sit sed.</span>
      </div>
      <div className="flex flex-col justify-start items-start space-y-4">
          <img src={pic6} alt="award1" />
          <h1 className='text-lg md:text-xl font-bold'>Best Author Awards 2018</h1>
          <span className="text-left text-sm md:text-lg">Arcu pellentesque nisi consectetur netus aenean metus sit mattis sit sed.</span>
      </div>
    </div>

     {/* 4th Div Section */}
     <div className="heading flex flex-col justify-center items-center md:space-y-5 space-y-5 my-14 md:my-20">
            <span className="Title text-3xl md:text-5xl font-semibold">Best Selling Books</span>
            <span className="text-center text-sm md:text-lg w-[88%] md:w-[60%]">Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean.</span>
     </div>

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

      {/* Youtube Video */}


      </div>
    </>
  )
}

export default Home