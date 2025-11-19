import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="w-full text-gray-600 body-font relative z-50 bg-white" style={{ boxShadow: "0 6px 18px rgba(15,23,42,0.08)" }}>
      <div className="w-full px-8">
        <div className="flex items-center justify-between py-5">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/images/logo.png" alt="logo" className="h-10" />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:block flex-1">
            <ul className="flex items-center justify-center space-x-6 text-base">
              <li>
                <Link to="/" className="text-[#201630] font-medium">Home</Link>
              </li>

              {/* Products Dropdown */}
              <li className="relative group">
                <button className="text-[#201630] font-medium cursor-pointer py-2">
                  Products
                </button>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg pt-2 pb-2 w-48 z-50 list-none left-0">
                  <li><Link to="/products/spm" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">SPM</Link></li>
                  <li><Link to="/products/ibm" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">IBM</Link></li>
                  <li><Link to="/products/others" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50">Others</Link></li>
                </ul>
              </li>

              {/* Services Dropdown */}
              <li className="relative group">
                <button className="text-[#201630] font-medium cursor-pointer py-2">
                  Services
                </button>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg pt-2 pb-2 w-48 z-50 list-none left-0">
                  <li><Link to="/services/cybersecurity" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">CyberSecurity</Link></li>
                  <li><Link to="/services/cloud" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Cloud</Link></li>
                  <li><Link to="/services/ai-automation" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">AI & Automation</Link></li>
                  <li><Link to="/services/collaboration" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Collaboration</Link></li>
                  <li><Link to="/services/training" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50">Training</Link></li>
                </ul>
              </li>

              {/* Verticals Dropdown */}
              <li className="relative group">
                <button className="text-[#201630] font-medium cursor-pointer py-2">
                  Verticals
                </button>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg pt-2 pb-2 w-56 z-50 list-none left-0">
                  <li><Link to="/verticals/public-sector" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Public Sector</Link></li>
                  <li><Link to="/verticals/industrials" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Industrials</Link></li>
                  <li><Link to="/verticals/healthcare" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Health Care</Link></li>
                  <li><Link to="/verticals/retail" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Retail</Link></li>
                  <li><Link to="/verticals/energy" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Energy</Link></li>
                  <li><Link to="/verticals/financial" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Financial</Link></li>
                  <li><Link to="/verticals/telecommunications" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50">Telecommunications</Link></li>
                </ul>
              </li>

              {/* SpinnLabs Dropdown */}
              <li className="relative group">
                <button className="text-[#201630] font-medium cursor-pointer py-2">
                  SpinnLabs
                </button>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg pt-2 pb-2 w-56 z-50 list-none left-0">
                  <li><Link to="/spinnlabs/academia" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Academia</Link></li>
                  <li><Link to="/spinnlabs/industry" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Industry</Link></li>
                  <li><Link to="/spinnlabs/centers-of-expertise" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Centers of Expertise</Link></li>
                  <li><Link to="/spinnlabs/startups" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50">Startups</Link></li>
                </ul>
              </li>

              {/* Activities Dropdown */}
              <li className="relative group">
                <button className="text-[#201630] font-medium cursor-pointer py-2">
                  Activities
                </button>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg pt-2 pb-2 w-64 z-50 list-none left-0">
                  <li><Link to="/activities/internship-2025" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Internship Program 2025</Link></li>
                  <li><Link to="/activities/webinars" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Webinars</Link></li>
                  <li><Link to="/activities/workshops" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Workshops</Link></li>
                  <li><Link to="/activities/special-interest-groups" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Special Interest Groups</Link></li>
                  <li><Link to="/activities/training" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50">Training</Link></li>
                </ul>
              </li>

              {/* About Us Dropdown */}
              <li className="relative group">
                <button className="text-[#201630] font-medium cursor-pointer py-2">
                  About Us
                </button>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg pt-2 pb-2 w-48 z-50 list-none left-0">
                  <li><Link to="/about/our-story" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50 border-b border-[#2F5197]">Our Story</Link></li>
                  <li><Link to="/about/careers" className="block px-4 py-2 text-[#2F5197] hover:bg-gray-50">Careers</Link></li>
                </ul>
              </li>

              <li>
                <Link to="/contact" className="text-[#201630] font-medium">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* Intern Portal Button */}
          <button className="hidden md:inline-flex items-center bg-[#201630] text-white border-2 border-[#201630] py-2.5 px-6 focus:outline-none hover:bg-white hover:text-[#201630] rounded-full text-base flex-shrink-0 transition-colors duration-300">
            Intern Portal
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/" className="block py-2 text-[#201630] font-medium">Home</Link>
            
            {/* Products Mobile */}
            <div>
              <button
                onClick={() => toggleDropdown('products')}
                className="w-full text-left py-2 text-[#201630] font-medium flex justify-between items-center"
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'products' && (
                <div className="pl-4 space-y-2">
                  <Link to="/products/spm" className="block py-2 text-[#2F5197]">SPM</Link>
                  <Link to="/products/ibm" className="block py-2 text-[#2F5197]">IBM</Link>
                  <Link to="/products/others" className="block py-2 text-[#2F5197]">Others</Link>
                </div>
              )}
            </div>

            {/* Services Mobile */}
            <div>
              <button
                onClick={() => toggleDropdown('services')}
                className="w-full text-left py-2 text-[#201630] font-medium flex justify-between items-center"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'services' && (
                <div className="pl-4 space-y-2">
                  <Link to="/services/cybersecurity" className="block py-2 text-[#2F5197]">CyberSecurity</Link>
                  <Link to="/services/cloud" className="block py-2 text-[#2F5197]">Cloud</Link>
                  <Link to="/services/ai-automation" className="block py-2 text-[#2F5197]">AI & Automation</Link>
                  <Link to="/services/collaboration" className="block py-2 text-[#2F5197]">Collaboration</Link>
                  <Link to="/services/training" className="block py-2 text-[#2F5197]">Training</Link>
                </div>
              )}
            </div>

            {/* Verticals Mobile */}
            <div>
              <button
                onClick={() => toggleDropdown('verticals')}
                className="w-full text-left py-2 text-[#201630] font-medium flex justify-between items-center"
              >
                Verticals
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'verticals' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'verticals' && (
                <div className="pl-4 space-y-2">
                  <Link to="/verticals/public-sector" className="block py-2 text-[#2F5197]">Public Sector</Link>
                  <Link to="/verticals/industrials" className="block py-2 text-[#2F5197]">Industrials</Link>
                  <Link to="/verticals/healthcare" className="block py-2 text-[#2F5197]">Health Care</Link>
                  <Link to="/verticals/retail" className="block py-2 text-[#2F5197]">Retail</Link>
                  <Link to="/verticals/energy" className="block py-2 text-[#2F5197]">Energy</Link>
                  <Link to="/verticals/financial" className="block py-2 text-[#2F5197]">Financial</Link>
                  <Link to="/verticals/telecommunications" className="block py-2 text-[#2F5197]">Telecommunications</Link>
                </div>
              )}
            </div>

            {/* SpinnLabs Mobile */}
            <div>
              <button
                onClick={() => toggleDropdown('spinnlabs')}
                className="w-full text-left py-2 text-[#201630] font-medium flex justify-between items-center"
              >
                SpinnLabs
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'spinnlabs' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'spinnlabs' && (
                <div className="pl-4 space-y-2">
                  <Link to="/spinnlabs/academia" className="block py-2 text-[#2F5197]">Academia</Link>
                  <Link to="/spinnlabs/industry" className="block py-2 text-[#2F5197]">Industry</Link>
                  <Link to="/spinnlabs/centers-of-expertise" className="block py-2 text-[#2F5197]">Centers of Expertise</Link>
                  <Link to="/spinnlabs/startups" className="block py-2 text-[#2F5197]">Startups</Link>
                </div>
              )}
            </div>

            {/* Activities Mobile */}
            <div>
              <button
                onClick={() => toggleDropdown('activities')}
                className="w-full text-left py-2 text-[#201630] font-medium flex justify-between items-center"
              >
                Activities
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'activities' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'activities' && (
                <div className="pl-4 space-y-2">
                  <Link to="/activities/internship-2025" className="block py-2 text-[#2F5197]">Internship Program 2025</Link>
                  <Link to="/activities/webinars" className="block py-2 text-[#2F5197]">Webinars</Link>
                  <Link to="/activities/workshops" className="block py-2 text-[#2F5197]">Workshops</Link>
                  <Link to="/activities/special-interest-groups" className="block py-2 text-[#2F5197]">Special Interest Groups</Link>
                  <Link to="/activities/training" className="block py-2 text-[#2F5197]">Training</Link>
                </div>
              )}
            </div>

            {/* About Us Mobile */}
            <div>
              <button
                onClick={() => toggleDropdown('about')}
                className="w-full text-left py-2 text-[#201630] font-medium flex justify-between items-center"
              >
                About Us
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'about' && (
                <div className="pl-4 space-y-2">
                  <Link to="/about/our-story" className="block py-2 text-[#2F5197]">Our Story</Link>
                  <Link to="/about/careers" className="block py-2 text-[#2F5197]">Careers</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="block py-2 text-[#201630] font-medium">Contact Us</Link>

            {/* Mobile Intern Portal Button */}
            <button className="w-full mt-4 inline-flex items-center justify-center bg-[#201630] text-white border-2 border-[#201630] py-2.5 px-6 focus:outline-none hover:bg-white hover:text-[#201630] rounded-full text-base transition-colors duration-300">
              Intern Portal
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
