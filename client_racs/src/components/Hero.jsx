
import React from 'react';
import { Link } from 'react-router-dom';
import erpImage from '../assets/erp.webp';
const Hero= () => {
  return (
    <section class="text-gray-600 body-font bg-white">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Empower Your Business with Integrated 
        <br className="font-bold text-3xl"/>ERP Solutions
        
      </h1>
      <p class="mb-8 leading-relaxed">Finance | Human Resources | Supply Chain | CRM | Manufacturing | & More</p>
      <div class="flex max-w-sm rounded-full bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
         <Link
            to="/contact"
            className="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-full  transition duration-300 ease-in-out transform hover:scale-110"
          >
            Book a Demo
          </Link>

        </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={erpImage} />
    </div>
  </div>
</section>
    
  );
};

export default Hero;
