import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#"><span className='text-red-500 text-3xl'>D</span>.k <span className='text-red-500 text-3xl'>A</span>gasti</a>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-red-400">Home</a>
          <a href="#about" className="hover:text-red-400">About</a>
          <a href="#resume" className="hover:text-red-400">Resume</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
        </div>

        {/* Hamburger icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 w-full py-4">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-700">About</a>
          <a href="#resume" className="block px-4 py-2 hover:bg-gray-700">Resume</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
