import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-pink-600 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-white font-bold text-xl">MyLogo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold underline underline-offset-4"
                  : "text-white hover:text-yellow-200"
              }
            >
              {link.label}
            </NavLink>
          ))}
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
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-pink-700">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold underline underline-offset-4"
                  : "text-white hover:text-yellow-200"
              }
              onClick={() => setIsOpen(false)} // close menu after click
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
