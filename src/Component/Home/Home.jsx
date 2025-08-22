import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/about");
  }
  return (
    <div className="w-full h-screen bg-[url('https://plus.unsplash.com/premium_photo-1675348350823-3601c70076a7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover">
      
      {/* Content */}
      <div className="w-full h-screen flex flex-col items-center justify-center text-center text-[#EDD6B6] px-4 sm:px-6 md:px-10">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug">
          Web Designer <br /> & Developer
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-md sm:max-w-lg md:max-w-2xl">
          Premium Web Design, Development, and SEO services to help your business stand out.
        </p>

        {/* Button */}
        <button onClick={handleclick} className="bg-blue-500 hover:bg-blue-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-lg transition">
          My Services
        </button>
      </div>
    </div>
  )
}

export default Home
