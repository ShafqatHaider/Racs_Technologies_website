import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import brandLogo from '../assets/racsLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = "text-gray-600 hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkClasses = "text-primary bg-blue-100";

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              <img src={brandLogo} alt="RACS Technologies" className="h-8 w-auto" />
            </Link>
          </div>

          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} end>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>About Us</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Contact Us</NavLink>
            </div>
          </div>

          
          <div className="hidden md:block">
            <a href="#/contact" className="ml-4 px-4 py-2 bg-violet-500 border-transparent text-sm font-medium rounded-md text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400 transition-transform transform hover:scale-105">
              Book a Demo
            </a>
          </div>

          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-blue-100 inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              {!isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
            onClick={() => setIsMenuOpen(false)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
          <a
            href="#/contact"
            className="block w-full text-left mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-violet-500 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400 transition-transform transform hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
