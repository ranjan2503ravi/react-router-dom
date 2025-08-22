import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
  return (
   
      <div className="container px-3 w-[100vw] h-[80vh] text-[#EDD6B6] bg-[#181716] flex items-center gap-56">
      <div className="icon">
        <h1 className='font-bold text-3xl mb-7'>aRik.</h1>
          <div className='flex gap-5'>
            <i className="ri-instagram-line"></i>
            <p>Instagram</p>
          </div>
           <div className='flex'>
            <i className="ri-twitter-line"></i>
            <p>Twitter</p>
          </div>
           <div className='flex'>
           <i className="ri-dribbble-line"></i>
            <p>Dribbble</p>
          </div>
           <div className='flex'>
           <i className="ri-behance-line"></i>
            <p>Behance</p>
          </div>
      </div>
      {/* contant */}
      <div className='contant'>
        <h1 className='font-bold text-3xl'>Pages</h1>
        <div className="contact">
          <h2>Home</h2>
          <h2>Services</h2>
          <h2>About</h2>
          <h2>Pricing</h2>
          <h2>Contact</h2>
          <button>MORE TAMPLEATE</button>
        </div>
</div>


</div>
 
  )
}

export default Footer