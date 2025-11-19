import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SpecialInterestGroups = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-4xl font-bold text-gray-800">Special Interest Groups</span>
      </div>
      <Footer />
    </div>
  );
};

export default SpecialInterestGroups;
