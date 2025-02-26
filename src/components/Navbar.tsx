import React from 'react';
import { Menu, ChevronDown, GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">accredian</span>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div className="relative group">
                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600">
                  Courses
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 hidden mt-2 space-y-2 bg-white shadow-lg rounded-md w-48 group-hover:block">
                  <a href="#course1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded-md">Web Development</a>
                  <a href="#course2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded-md">Data Science</a>
                  <a href="#course3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded-md">Graphic Design</a>
                  <a href="#course4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded-md">Marketing</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-6">
            <a href="#refer" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Refer & Earn</a>
            <a href="#resources" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Resources</a>
            <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">About Us</a>
            
            <button className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out">
              Login
            </button>
            
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out">
              Try for Free
            </button>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
