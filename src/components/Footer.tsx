import React from 'react';
import { GraduationCap, Linkedin, Facebook, Twitter } from 'lucide-react';
import 'animate.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate__animated animate__fadeIn">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Accredian</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering careers through quality education and expert guidance.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#program" className="text-gray-400 hover:text-white">Program</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="animate__animated animate__fadeIn animate__delay-2s">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#linkedin" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#facebook" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Footer Sections */}
        <div className="mt-12">
          {/* Section 1: Our Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate__animated animate__fadeIn animate__delay-4s">
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#consulting" className="text-gray-400 hover:text-white">Consulting</a></li>
                <li><a href="#training" className="text-gray-400 hover:text-white">Training</a></li>
                <li><a href="#coaching" className="text-gray-400 hover:text-white">Coaching</a></li>
              </ul>
            </div>
            {/* Section 2: Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#webinars" className="text-gray-400 hover:text-white">Webinars</a></li>
                <li><a href="#ebooks" className="text-gray-400 hover:text-white">E-books</a></li>
              </ul>
            </div>
            {/* Section 3: FAQs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">FAQs</h3>
              <ul className="space-y-2">
                <li><a href="#faq1" className="text-gray-400 hover:text-white">How to get started?</a></li>
                <li><a href="#faq2" className="text-gray-400 hover:text-white">What programs are available?</a></li>
                <li><a href="#faq3" className="text-gray-400 hover:text-white">How to contact support?</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Accredian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
