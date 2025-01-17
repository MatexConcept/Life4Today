import React from 'react';
import { Twitter, Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Logo and description */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-11 h-16 mr-2">
                <svg viewBox="0 0 44 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4L38 16V58L6 46V4Z" fill="#1AD0D1" />
                  <path d="M0 0L32 12V54L0 42V0Z" fill="#9F5FFE" />
                  <path d="M12 8H44V50L12 38V8Z" fill="#4742E7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[#1D1D1D]">Donaty</h2>
            </div>
            <p className="text-[#6F7775] mb-4">
            Empowering communities through generosity and support, creating a better future together.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-[#1AD0D1]" />
              <Instagram className="w-5 h-5 text-[#1AD0D1]" />
              <Facebook className="w-5 h-5 text-[#1AD0D1]" />
              <Youtube className="w-5 h-5 text-[#1AD0D1]" />
            </div>
          </div>

          {/* Menu */}
          <div className="w-full md:w-1/6 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-[#1D1D1D] mb-4">Menu</h3>
            <ul className="space-y-2">
              {['Donations', 'Features', 'Categories', 'Volunteer', 'About us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#6F7775] hover:text-[#1AD0D1]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

       
          <div className="w-full md:w-1/6 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-[#1D1D1D] mb-4">About us</h3>
            <ul className="space-y-2">
              {['How it works?', 'Contact us', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#6F7775] hover:text-[#1AD0D1]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-[#1D1D1D] mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#1AD0D1] rounded-full flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#1D1D1D] font-semibold">Call us +1-206-156 2849</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#1AD0D1] rounded-full flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#1D1D1D] font-semibold">Mail Us info@donaty.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#1AD0D1] rounded-full flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#1D1D1D] font-semibold">Visit Us Your Address here</span>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <div className="bg-[#9F5FFE] mt-12 py-4">
        <div className="container mx-auto px-4">
          <p className="text-white text-center">Donaty © 2025 Ideapeel Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
