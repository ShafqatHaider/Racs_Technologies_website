
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-800 text-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/1600/900?random=1&blur=2"
          alt="ERP Background"
        />
        <div className="absolute inset-0 bg-neutral bg-opacity-60 mix-blend-multiply" aria-hidden="true"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Empower Your Business with Integrated ERP Solutions
        </h1>
        <h2 className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
          Finance | Human Resources | Supply Chain | CRM | Manufacturing | & More
        </h2>
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-block bg-secondary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary transition duration-300 ease-in-out transform hover:scale-110"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
