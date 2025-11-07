
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral sm:text-4xl">
            About Recs Technologies
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are dedicated to providing cutting-edge ERP solutions that drive growth and efficiency for businesses of all sizes.
          </p>
        </div>

        <div className="mt-12 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                className="rounded-lg shadow-xl" 
                src="https://picsum.photos/600/400?random=2" 
                alt="Our Team"
              />
            </div>
            <div className="prose prose-lg text-gray-600">
              <h3 className="text-2xl font-bold text-neutral">Our Mission</h3>
              <p>
                Our mission is to empower organizations with innovative technology and expert guidance, enabling them to streamline operations, enhance productivity, and achieve sustainable growth. We are committed to delivering reliable, scalable, and user-friendly ERP systems that transform business challenges into opportunities.
              </p>
              <h3 className="text-2xl font-bold text-neutral mt-8">Our Vision</h3>
              <p>
                We envision a future where businesses of all scales can leverage the power of integrated data and intelligent automation to make smarter decisions. Our goal is to be the leading provider of ERP solutions, renowned for our customer-centric approach, technological excellence, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
