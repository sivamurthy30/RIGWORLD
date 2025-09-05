import React, { useState } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollEffects } from '../hooks/useScrollEffects';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled, scrollDirection } = useScrollEffects();
  const location = useLocation();

  return (
    <header className={`text-white sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
      isScrolled 
        ? 'bg-slate-800/95 backdrop-blur-md shadow-lg' 
        : 'bg-slate-800'
    } ${scrollDirection === 'down' && isScrolled ? '-translate-y-full' : 'translate-y-0'} shadow-[0_6px_24px_-8px_rgba(255,115,0,0.18)]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/RigWorldJobs_Logo.png" alt="RigWorld Jobs Logo" className="h-12 w-12 object-contain drop-shadow-lg" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold leading-tight">RigWorld Jobs</span>
              <span className="text-sm text-orange-400 font-medium -mt-1">Opportunities for Everyone</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${location.pathname === '/' ? 'text-orange-500 font-bold underline underline-offset-4 decoration-2' : 'text-gray-300 hover:text-orange-500'}`}
            >
              Find Jobs
            </Link>
            <Link
              to="/news"
              className={`transition-colors ${location.pathname === '/news' ? 'text-orange-500 font-bold underline underline-offset-4 decoration-2' : 'text-gray-300 hover:text-orange-500'}`}
            >
              Industry News & Insights
            </Link>
            <Link
              to="/companies"
              className={`transition-colors ${location.pathname === '/companies' ? 'text-orange-500 font-bold underline underline-offset-4 decoration-2' : 'text-gray-300 hover:text-orange-500'}`}
            >
              Companies
            </Link>
            <Link
              to="/resources"
              className={`transition-colors ${location.pathname === '/resources' ? 'text-orange-500 font-bold underline underline-offset-4 decoration-2' : 'text-gray-300 hover:text-orange-500'}`}
            >
              Resources
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${location.pathname === '/about' ? 'text-orange-500 font-bold underline underline-offset-4 decoration-2' : 'text-gray-300 hover:text-orange-500'}`}
            >
              About
            </Link>
          </nav>

          {/* Desktop Sign In Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/auth" 
              className="relative flex items-center gap-2 px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:scale-105 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group overflow-hidden"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l3-3m0 0l-3-3m3 3H9" />
                </svg>
              </span>
              <span className="relative z-10">Sign In</span>
              <span className="absolute left-0 top-0 w-full h-full bg-orange-500 opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-md"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
            
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Find Jobs</a>
              <Link to="/news" className="block px-3 py-2 text-gray-300 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Industry News & Insights</Link>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Companies</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Resources</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-orange-500">About</a>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;