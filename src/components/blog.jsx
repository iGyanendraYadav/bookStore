import React from 'react'
import pub from "../../src/public.jpg";
import { Link } from 'react-router-dom';

const Blog = () => {
  let title = "/blog/title";
  return (
    <>
<div className="bg-[#f2f5f7]">
    <div className="blogArea flex flex-col justify-center items-center md:mx-20 mx-10 bg-white">
  
      <div className="flex flex-col justify-start items-start space-y-3 md:m-20">
            <img src={pub} alt="aad" />
            <span className='text-2xl' id="title">Outing justo morbi wild</span>
            <span className='text-lg'><a href="https://www.linkedin.com/in/igyanendrayadav/" target="_blank" rel="noopener noreferrer">Written by : Gyanendra Yadav</a></span>
            <span className='text-lg'>Aliquam sed in egestas gravida amet mattis sagittis, semper morbi vitae, egestas blandit duis facilisis adipiscing fermentum aenean nunc nibh accumsan, ornare enim at interdum mi arcu, ut magna ultrices odio dictumst aliquam tincidunt dictum pharetra vestibulum aliquam aliquet suspendisse. Sed et aliquam tincidunt ut sed porttitor nunc et etiam molestie arcu donec venenatis nulla …</span>
            <span className='text-lg'><Link to={`/blog/${title}`}>Read More &gt;&gt;</Link></span>
      </div>
      <div className="h-[1px] w-[90%] mx-8 md:mx-16 bg-gray-400 md:my-2 my-5"></div>

      <div className="flex flex-col justify-start items-start space-y-3 md:m-20">
            <img src={pub} alt="aad" />
            <span className='text-2xl' id="title">Outing justo morbi wild</span>
            <span className='text-lg'><a href="https://www.linkedin.com/in/igyanendrayadav/" target="_blank" rel="noopener noreferrer">Written by : Gyanendra Yadav</a></span>
            <span className='text-lg'>Aliquam sed in egestas gravida amet mattis sagittis, semper morbi vitae, egestas blandit duis facilisis adipiscing fermentum aenean nunc nibh accumsan, ornare enim at interdum mi arcu, ut magna ultrices odio dictumst aliquam tincidunt dictum pharetra vestibulum aliquam aliquet suspendisse. Sed et aliquam tincidunt ut sed porttitor nunc et etiam molestie arcu donec venenatis nulla …</span>
            <span className='text-lg'><Link to={`/blog/${title}`}>Read More &gt;&gt;</Link></span>
      </div>
      <div className="h-[1px] w-[90%] mx-8 md:mx-16 bg-gray-400 md:my-2 my-5"></div>

      <div className="flex flex-col justify-start items-start space-y-3 md:m-20">
            <img src={pub} alt="aad" />
            <span className='text-2xl' id="title">Outing justo morbi wild</span>
            <span className='text-lg'><a href="https://www.linkedin.com/in/igyanendrayadav/" target="_blank" rel="noopener noreferrer">Written by : Gyanendra Yadav</a></span>
            <span className='text-lg'>Aliquam sed in egestas gravida amet mattis sagittis, semper morbi vitae, egestas blandit duis facilisis adipiscing fermentum aenean nunc nibh accumsan, ornare enim at interdum mi arcu, ut magna ultrices odio dictumst aliquam tincidunt dictum pharetra vestibulum aliquam aliquet suspendisse. Sed et aliquam tincidunt ut sed porttitor nunc et etiam molestie arcu donec venenatis nulla …</span>
            <span className='text-lg'><Link to={`/blog/${title}`}>Read More &gt;&gt;</Link></span>
      </div>
      <div className="h-[1px] w-[90%] mx-8 md:mx-16 bg-gray-400 md:my-2 my-5"></div>

      <div className="flex flex-col justify-start items-start space-y-3 md:m-20">
            <img src={pub} alt="aad" />
            <span className='text-2xl' id="title">Outing justo morbi wild</span>
            <span className='text-lg'><a href="https://www.linkedin.com/in/igyanendrayadav/" target="_blank" rel="noopener noreferrer">Written by : Gyanendra Yadav</a></span>
            <span className='text-lg'>Aliquam sed in egestas gravida amet mattis sagittis, semper morbi vitae, egestas blandit duis facilisis adipiscing fermentum aenean nunc nibh accumsan, ornare enim at interdum mi arcu, ut magna ultrices odio dictumst aliquam tincidunt dictum pharetra vestibulum aliquam aliquet suspendisse. Sed et aliquam tincidunt ut sed porttitor nunc et etiam molestie arcu donec venenatis nulla …</span>
            <span className='text-lg'><Link to={`/blog/${title}`}>Read More &gt;&gt;</Link></span>
      </div>
      <div className="h-[1px] w-[90%] mx-8 md:mx-16 bg-gray-400 md:my-2 my-5 "></div>






    </div>




</div>
    </>
  )
}

export default Blog
