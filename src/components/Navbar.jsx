import React, { useEffect, useState } from 'react'
import logo from '../assets/graphic-design.png'
import {FaBars , FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };
    const [open , setOpen] = useState(false) ;
    
  return (
    <>
    <div className={`shadow-md w-full ${stickyClass}`}>
    <div className="md:flex justify-around items-center bg-white   h-20 w-full text-black p-[1rem]">
     <div className=' cursor-pointer flex items-center gap-1 text-blue-600'>
        <img
          src={logo}
          className="h-10 w-10 brightness-100"
          alt=""
        />
        <span className='font-bold text-xl'>We-Sign</span>
      </div>

      <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

      <div>
        <ul className={`list-none bg-indigo-600 md:bg-white absolute md:static md:z-auto z-[-1] md:mt-0 mt-2 left-0 w-full md:w-auto md:pl-0  md:flex flex-row justify-between space-x-12 font-semibold text-2xl md:pb-0  md:items-center ${
            open
              ? "top-12 transition-all duration-500 ease-in"
              : "top-[-490px] transition-all duration-500 ease-out"
          }`}>
          <li className="md:ml-8 md:my-0 my-7 font-semibold  pl-12 md:pl-0">
           <Link to="/"> <h1 className="md:hover:border-b border-spacing-4 hover:border-b-white text-white md:text-gray-800 text-xl hover:text-blue-400 duration-500 cursor-pointer">
              Home
            </h1></Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold ">
          <Link to="/portfolio"><h1 className=" md:hover:border-b border-spacing-4 hover:border-b-white cursor-pointer text-white md:text-gray-800 text-xl hover:text-blue-400 duration-500">
              Portfolio
            </h1></Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
          <Link to="/services"><h1 className=" md:hover:border-b border-spacing-4 hover:border-b-white cursor-pointer text-white md:text-gray-800 text-xl hover:text-blue-400 duration-500">
              Services
            </h1></Link>
          </li>
        </ul>
      </div>
        </div>
    </div>
    
    </>
  )
}

export default Navbar