import React from 'react';
import { Search, MapPin, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-slate-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Find Your Next
                <span className="text-orange-500 block">Offshore Career</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Connect with top oil rig, offshore, and maritime companies worldwide. 
                Your next high-paying career opportunity awaits.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-gray-300">5,000+ Active Jobs</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-gray-300">Global Opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-gray-300">High-Paying Positions</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                              <button className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg font-semibold transform hover:scale-110 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 group relative overflow-hidden">
                  <span className="relative z-10">Browse Jobs</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                </button>
                <button className="border-2 border-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-110 hover:shadow-2xl hover:-translate-y-2 hover:-rotate-1 group relative overflow-hidden">
                  <span className="relative z-10">Upload Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                </button>
            </div>
          </div>

          {/* Right Content - Decorative Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-500/20 via-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-600/20 rounded-full blur-3xl -translate-x-20 translate-y-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;