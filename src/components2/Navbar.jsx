import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar({ setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center text-xl font-bold cursor-pointer text-green-400 lg:translate-x-80 "
          onClick={() => setActivePage("home")}>
          {/* <img src="/logo.png" alt="" /> */}
          <h1 className="ml-2 text-white">L<span className="text-green-400">oo</span>nn</h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
            <button onClick={() => setActivePage("home")}
            className="relative text-white group">
                Home
                <span className="absolute bottom-0 left-1/2 transform -translate-x-2/3 w-10 h-[8px]
                bg-green-500 transition-all duration-300 group-hover:h-[20px] 
                group-hover:bottom-[2px] -z-10"></span>
            </button>
            <button onClick={() => setActivePage("service")}
            className="relative text-white group">
                Service
                <span className="absolute bottom-0 left-1/2 transform -translate-x-2/3 w-10 h-[8px]
                bg-green-500 transition-all duration-300 group-hover:h-[20px] 
                group-hover:bottom-[2px] -z-10"></span>
            </button>
            <button onClick={() => setActivePage("contact")}
            className="relative text-white group">
                Contact
                <span className="absolute bottom-0 left-1/2 transform -translate-x-8 w-10 h-[8px]
                bg-green-500 transition-all duration-300 group-hover:h-[20px] 
                group-hover:bottom-[2px] -z-10"></span>
            </button>
            <button onClick={() => setActivePage("opentimes")}
            className="relative text-white group">
                Open Times
                <span className="absolute bottom-0 left-1/2 transform -translate-x-11 w-14 h-[8px]
                bg-green-500 transition-all duration-300 group-hover:h-[20px] 
                group-hover:bottom-[2px] -z-10"></span>
            </button>
        </nav>
        {/* Hamburger Menu Button */}
        <button className="md:hidden text-white hover:text-green-400 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <button onClick={() => {
              setActivePage("home");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-green-400 
            hover:text-white transition">
            Home
          </button>
          <button onClick={() => {
              setActivePage("service");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-green-400 
            hover:text-white transition">
            Service
          </button>
          <button onClick={() => {
              setActivePage("contact");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-green-400 
            hover:text-white transition" >
            Contact
          </button>
          <button onClick={() => {
              setActivePage("opentimes");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-green-400 
            hover:text-white transition">
            Open Times
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
