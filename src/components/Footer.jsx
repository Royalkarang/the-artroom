// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=61574667736847"
            className="text-white hover:text-blue-500 transition-colors duration-300"
            aria-label="Facebook"  target='_blank'
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/saindeepanshu559/?igsh=MTJvd3RmcXU5aWhqOQ%3D%3D#"
            className="text-white hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"  target='_blank'
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/@deepanshusainarts-"
            className="text-white hover:text-red-500 transition-colors duration-300"
            aria-label="Youtube" target='_blank'
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://wa.me/+919599635892?text=The-artwork-room"
            className="text-white hover:text-green-500 transition-colors duration-300"
            aria-label="Youtube" target='_blank'
          >
            <RiWhatsappFill size={24} />
          </a>
        </div>

        {/* Logo - Align to the right */}
        <div className="text-2xl font-bold ml-4">
        The Art-Room
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-4 text-sm text-gray-400">
        <p>&copy; 2025 Your Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
