// src/components/ContactSection.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-3">Contact Us</h2>
        <p className="text-5xl font-semibold mb-8">Contact us for creating sketches like this.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg">
            <img src="/product14.jpg" alt="Gallery 1" className="w-full h-48 object-contain rounded-md" />
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <img src="/product15.jpg" alt="Gallery 2" className="w-full h-48 object-contain rounded-md" />
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <img src="/product16.jpg" alt="Gallery 3" className="w-full h-48 object-contain rounded-md" />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xl">For inquiries, reach us at:</p>
          <p className="text-lg text-gray-600 mt-2"><b> Email: </b> govtpgcollegeassignment@gmail.com</p>
          <p className="text-lg text-gray-600 mt-1"><b> Phone: </b> +91 95996 35892</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
