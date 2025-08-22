import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full fixed top-0 left-0 z-50 flex justify-center text-[#EDD6B6]">
      <div className="w-full md:w-3/4 lg:w-2/4 h-16 bg-[#191817] flex items-center justify-between shadow-md rounded border border-[#EDD6B6] mt-3 px-4">
        
        {/* Logo */}
        <Link to="/">
          <img
            className="object-cover object-center h-12"
            src="https://supercell.com/_next/static/media/supercell_logo.50e3c1ff.webp"
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#EDD6B6] border-b-2 font-bold duration-150 transition-all"
                : "text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#EDD6B6] border-b-2 font-bold duration-150 transition-all"
                : "text-white"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#EDD6B6] border-b-2 font-bold duration-150 transition-all"
                : "text-white"
            }
          >
            Contact
          </NavLink>

          <button className="px-4 py-2 bg-[#EDD6B6] text-black rounded">
            LET'S TALK
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 w-full px-6 md:hidden">
          <div className="bg-[#191817] rounded shadow-md border border-[#EDD6B6] flex flex-col gap-4 p-4 text-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#EDD6B6] border-b-2 font-bold transition-all"
                  : "text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#EDD6B6] border-b-2 font-bold transition-all"
                  : "text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#EDD6B6] border-b-2 font-bold transition-all"
                  : "text-white"
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <button className="px-4 py-2 bg-[#EDD6B6] text-black rounded">
              LET'S TALK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
