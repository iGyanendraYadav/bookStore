import React from 'react'
import pic2 from "../../src/pic2.jpg"
import a1 from "../../src/a1.jpg"
import pic3 from "../../src/pic3.svg"
import pic4 from "../../src/pic4.svg"
import pic5 from "../../src/pic5.svg"
import pic6 from "../../src/pic6.svg"

const Author = () => {


  return (
    <>
        <div className="bookPage bg-[#f2f5f7]">
          <div className="headlines flex flex-col justify-center items-center py-10 md:py-16 space-y-5">
              <span className="Title text-4xl md:text-7xl font-semibold">About Author</span>
              <span className="text-center  text-sm md:text-lg w-[90%] md:w-[60%]">Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla.</span>
          </div>

          <div className="flex flex-col md:flex-row justify-evenly items-center space-y-3 md:space-y-0">
            <div className="image flex flex-row justify-center items-center md:justify-around md:items-center w-[90%] md:w-auto">
                <span><img src={a1} alt="a1" className='md:scale-[.7] ' /></span>  
                <span><img src={pic2} alt="p2" className='md:scale-[.85] ' /> </span>
            </div>
            <div className="flex flex-col justify-start items-start md:w-[24%] w-[90%] ">
              <span className=" text-5xl md:text-6xl text-blue-600">❝</span>
              <span className=" text-lg md:text-xl pt-1 md:pt-2 pb-3 md:pb-5">
Elementum neque nulla mauris faucibus lorem nisl, eget quis duis amet lobortis non enim viverra feugiat vitae.</span>
              <span className=" text-lg md:text-xl font-bold">JOHN ROBERTS</span>
            </div>
          </div>



          {/* Award Wining Author */}

          <div className="aw flex flex-col justify-center items-center space-y-5 py-10 ">
            <span className="text-left text-3xl md:text-5xl font-semibold md:w-[45%] w-[90%]">Award Winning Author</span>
            <span className="text-left text-sm md:text-lg md:w-[45%] w-[90%]">Etiam donec fusce id hendrerit feugiat mauris etiam aenean ipsum eu iaculis integer gravida massa facilisi aliquam venenatis turpis proin nunc ac viverra sed ac pharetra non sit elit ullamcorper viverra tristique.</span>
            <span className="text-left text-sm md:text-lg md:w-[45%] w-[90%]">Sem eget sed pulvinar erat leo tortor bibendum orci, ac donec elementum sed et bibendum odio libero sed erat volutpat est quam congue praesent felis sed cras viverra feugiat et vitae adipiscing et nullam etiam placerat viverra nibh mi euismod orci neque vulputate varius vestibulum ante eget viverra iaculis velit, ultricies ante eget at placerat ac tincidunt facilisi augue neque condimentum volutpat sed dolor.</span>
            <span className="text-left text-sm md:text-lg md:w-[45%] w-[90%]">Magna tellus pulvinar vitae adipiscing imperdiet viverra nunc, egestas sem vel turpis amet ut fusce sagittis, quisque suspendisse fames eget risus quam posuere eu massa, consequat nec vestibulum fermentum velit nunc, dictum dui orci urna vitae est morbi purus amet, tortor elementum eu convallis turpis nibh odio enim.</span>

          </div>


          {/* And these are the awards */}

    <div className="h-[1px] w-[90%] mx-8 md:mx-16 bg-gray-400 my-10"></div>

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

    <div className="h-[1px] w-[90%] mx-8 md:mx-16 bg-gray-400 my-10"></div>


  {/* Years in Headlines */}

  <div className="flex flex-col justify-center items-center">
    <div className="aw flex flex-col justify-center items-center space-y-5 md:space-y-3 py-10 ">
              <p className="text-sm tracking-widest text-blue-800 font-bold md:w-[45%] w-[90%]">1986</p>
              <span className="text-left text-xl md:text-2xl font-semibold md:w-[45%] w-[90%]">My First Book</span>
              <span className="text-left text-sm md:text-lg md:w-[45%] w-[90%]">Quisque suspendisse fames eget risus quam posuere eu massa, consequat nec vestibulum fermentum velit nunc, dictum dui orci urna vitae.</span>
    </div>

    <div className="aw flex flex-col justify-center items-center space-y-5 md:space-y-3 py-10 md:mr-24">
            <p className="text-sm tracking-widest text-blue-800 font-bold md:w-[45%] w-[90%]">1992</p>
            <span className="text-left text-xl md:text-2xl font-semibold md:w-[45%] w-[90%]">Released on Store</span>
            <span className="text-left text-sm md:text-lg md:w-[45%] w-[90%]">Aliquam mattis lorem fermentum neque, quam arcu malesuada id quis est adipiscing in fringilla nulla ultricies.</span>
  </div>

  <div className="aw flex flex-col justify-center items-center space-y-5 md:space-y-3 py-10 ">
            <p className="text-sm tracking-widest text-blue-800 font-bold md:w-[45%] w-[90%]">1998</p>
            <span className="text-left text-xl md:text-2xl font-semibold md:w-[45%] w-[90%]">US Bestselling Book</span>
            <span className="text-left text-sm md:text-lg md:w-[45%] w-[90%]">Ultrices ultrices sed ultrices suspendisse quisque in etiam adipiscing ligula rhoncus vivamus tincidunt amet sem cursus hendrerit nulla.</span>
  </div>
  </div>
      



        </div>
    </>
  )
}

export default Author