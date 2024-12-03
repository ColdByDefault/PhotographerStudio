import React, { useState, useEffect } from "react";

function NavList() {
  return (
    <ul className="flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-medium">
        <a
          href="#home"
          className="group flex items-center hover:text-yellow-400 transition-colors relative">
          Home
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-yellow-400 transition-all 
          duration-500 group-hover:w-full group-hover:left-0"></span>
        </a>
      </li>
      <li className="p-1 font-medium">
        <a
          href="#service"
          className="group flex items-center hover:text-yellow-400 transition-colors relative">
          Services
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-yellow-400 transition-all 
          duration-500 group-hover:w-full group-hover:left-0"></span>
        </a>
      </li>
      <li className="p-1 font-medium">
        <a
          href="#openTimes"
          className="group flex items-center hover:text-yellow-400 transition-colors relative">
          Öffnungszeiten
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-yellow-400 transition-all 
          duration-500 group-hover:w-full group-hover:left-0"></span>
        </a>
      </li>
      <li className="p-1 font-medium">
        <a
          href="#contact"
          className="group flex items-center hover:text-yellow-400 transition-colors relative">
          Kontakt
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-yellow-400 transition-all 
          duration-500 group-hover:w-full group-hover:left-0"></span>
        </a>
      </li>
    </ul>
  );
}


function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <nav
        className="bg-white shadow-lg rounded-lg mx-auto py-1 px-6
        w-11/12 sm:w-3/4 lg:w-[50%] flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex items-center justify-between sm:py-2">
          {/* Logo */}
          <div className="mx-4 cursor-pointer">
            <img src="/logo.png" alt="Foto Thome" className="w-11" />
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className={`lg:flex ${openNav ? "block" : "hidden"} mt-2 lg:mt-0`}>
          <NavList />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
