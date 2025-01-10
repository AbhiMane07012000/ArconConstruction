import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative lg:flex justify-center items-center" >
      <div className=" w-[100vw]  py-2 fixed lg:top-0 flex flex-row justify-between  items-center  bg-white  shadow-md  px-10 ">
        <NavLink to="/">
          <img
            className="h-10 lg:h-8 "
            src="./Logo.png"
            alt="Logo"
          />
        </NavLink>
        <div className="hidden md:flex space-x-8 lg:py-2">
          <NavLink
            to="/"
            smooth={true}
           
            offset={0}
            duration={1500}
            spy={true}
            activeClass="text-red-500"
            
            className=" cursor-pointer font-semibold font-montserrat hover:text-cyan-400  "
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            smooth={true}
           
            offset={0}
            duration={1500}
            spy={true}
            activeClass="text-red-500"
            className="text-black cursor-pointer font-semibold font-montserrat hover:text-cyan-400  "
          >
            About
          </NavLink>
          <NavLink
            to="/client"
            smooth={true}
           
            offset={0}
            duration={1500}
            spy={true}
            activeClass="text-red-500"
            className="text-black cursor-pointer font-semibold font-montserrat hover:text-cyan-400  "
          >
            Our Clients
          </NavLink>
          <NavLink
            to="project"
            smooth={true}
           
            offset={0}
            duration={1500}
            spy={true}
            activeClass="text-red-500"
            className="text-black cursor-pointer font-semibold font-montserrat hover:text-cyan-400  "
          >
            Our Projects
          </NavLink>
          <NavLink
            to="contact"
            smooth={true}
           
            offset={0}
            duration={1500}
            spy={true}
            activeClass="text-red-500"
            className="text-black cursor-pointer font-semibold font-montserrat hover:text-cyan-400  "
          >
            Contact
          </NavLink>
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <button
              onClick={toggleMenu}
              className="text-black font-semibold font-montserrat hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="text-black font-semibold font-montserrat hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className=" fixed top-12 md:hidden z-50 space-y-3 bg-white  py-3 w-[100vw]">
          <NavLink
            to="/"
            className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="client"
            className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "
            onClick={toggleMenu}
          >
            Our Clients
          </NavLink>
          <NavLink
            to="project"
            className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "
            onClick={toggleMenu}
          >
            Our Projects
          </NavLink>
          <NavLink
            to="contact"
            offset={50}
            className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Header;