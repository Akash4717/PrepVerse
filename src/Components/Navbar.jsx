import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='w-full h-max select-none bg-black shadow-lg rounded-lg backdrop-blur-[20px] border border-1 rounded-[200px]'>
      <div className=' p-5 flex items-center justify-between'>
        <span><h1 className='text-2xl font-semibold text-blue-500'>PrepVerse</h1></span>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white-800'>
            {isOpen ? '✖' : <CiMenuFries size={24} />}
          </button>
        </div>
        <nav className='hidden md:flex space-x-8'>
          <button className='text-whte-800 hover:text-blue-500 transition duration-200'>Home</button>
          <button className='text-white-800 hover:text-blue-500 transition duration-200'>About</button>
          <button className='text-white-800 hover:text-blue-500 transition duration-200'>Services</button>
          <button className='text-white-800 hover:text-blue-500 transition duration-200'>Contact</button>
        </nav>
      </div>
      <div 
        className={`fixed top-0 left-0 w-full h-max bg-black backdrop-blur-sm text-slate-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-[200%]'}`}
      >
        <div className='flex flex-col items-center border border-2 '>
          <button onClick={closeMenu} className='text-rose-300 text-lg mb-4 '>✖ Close</button>
          <button className='text-slate-100 py-2 hover:text-blue-500 transition duration-200 w-full text-center '>Home</button>
          <button className='text-slate-100 py-2 hover:text-blue-500 transition duration-200 w-full text-center '>About</button>
          <button className='text-slate-100 py-2 hover:text-blue-500 transition duration-200 w-full text-center '>Services</button>
          <button className='text-slate-100 py-2 hover:text-blue-500 transition duration-200 w-full text-center '>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
