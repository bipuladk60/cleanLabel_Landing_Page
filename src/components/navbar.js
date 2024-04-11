import React, { useState } from 'react';
import {LogoSvg} from './svgs';

const Navbar = ({scrollToSection}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionRef) => {
    scrollToSection(sectionRef);
  };

  return (
    <nav className="fixed top-0 w-full z-10 bg-white/30 backdrop-blur-md border-b-[1px] border-black-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <div className="mr-6">
            <a href="#home"><LogoSvg/></a>
            </div>
            
            <div className="hidden md:flex space-x-4">
              <a href="#product" className="text-gray-800 hover:text-gray-600">Product</a>
              <a href="#demo" className="text-gray-800 hover:text-gray-600">Demo</a>
              <a href="#about" className="text-gray-800 hover:text-gray-600">About Us</a>
            </div>
          </div>
         
          <div className="hiddesn md:block">
            <a href="#joinUs" className="border border-black text-black px-4 py-2 rounded-full transition duration-300">Join Us!</a>
          </div>
        
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path> 
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path> 
                )}
              </svg>
            </button>
          </div>
        </div>
       
        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-center md:hidden`}>
          <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2">Product</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2">Demo</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2">About Us</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2">Blog</a>
          <a href="#" className="border border-black text-black px-4 py-2 rounded-full mx-3 transition duration-300">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
