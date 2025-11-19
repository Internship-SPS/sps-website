import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-4xl font-bold text-gray-800">Contact Us</span>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
