
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-2">Recs Technologies</h3>
            <p className="text-sm text-gray-400">
              Your partner in digital transformation and enterprise resource planning.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:text-secondary transition-colors">Book a Demo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Services</h4>
            <ul>
              <li className="mb-2 text-sm text-gray-400">Enterprises Resource Planning</li>
              <li className="mb-2 text-sm text-gray-400">Inventory Management</li>
              <li className="mb-2 text-sm text-gray-400">Accounting System</li>
              <li className="mb-2 text-sm text-gray-400">Retail Management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.28 1.48h2.56v8.59H3.725v-8.59zM17.64 3H6.36C4.512 3 3 4.512 3 6.36v11.28C3 19.488 4.512 21 6.36 21h11.28C19.488 21 21 19.488 21 17.64V6.36C21 4.512 19.488 3 17.64 3z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Recs Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
