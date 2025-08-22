import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='text-[#EDD6B6]'>About
    <Link to="/about/course">Course</Link>
<Link to="/about/mocetest">Mocetest</Link>

      <Outlet />
      </div>
  )
}

export default About