import React from 'react';
import { Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">RigWorld Jobs</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The world's leading job platform for oil rig, offshore, and maritime professionals. 
              Connecting talent with opportunities across the globe.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-lg font-semibold mb-6">For Job Seekers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Upload Resume</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Job Alerts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Career Advice</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Salary Guide</a></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-lg font-semibold mb-6">For Employers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Post Jobs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Search Resumes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Recruitment Tools</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Company Profiles</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300 text-sm">info@rigworldjobs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span className="text-gray-300 text-sm">
                  123 Energy Plaza<br />
                  Houston, TX 77002<br />
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 RigWorld Jobs. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;