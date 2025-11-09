import React from 'react'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font relative z-50" style={{ boxShadow: "0 6px 18px rgba(15,23,42,0.08)" }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <img src="../images/logo.png" alt="logo" className="" />
        </a>

       
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-6 relative">
          <a className="hover:text-gray-900">Home</a>


          <div className="relative group">
            <a className="hover:text-gray-900 cursor-pointer">Services</a>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2">
              <a className="block px-4 py-2 hover:bg-gray-100">Web Design</a>
              <a className="block px-4 py-2 hover:bg-gray-100">Development</a>
            </div>
          </div>

        
          <div className="relative group">
            <a className="hover:text-gray-900 cursor-pointer">Products</a>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2">
              <a className="block px-4 py-2 hover:bg-gray-100">New Arrivals</a>
              <a className="block px-4 py-2 hover:bg-gray-100">Best Sellers</a>
            </div>
          </div>

          
          <div className="relative group">
            <a className="hover:text-gray-900 cursor-pointer">Resources</a>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2">
              <a className="block px-4 py-2 hover:bg-gray-100">Blog</a>
              <a className="block px-4 py-2 hover:bg-gray-100">Guides</a>
            </div>
          </div>

          
          <div className="relative group">
            <a className="hover:text-gray-900 cursor-pointer">Company</a>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2">
              <a className="block px-4 py-2 hover:bg-gray-100">About Us</a>
              <a className="block px-4 py-2 hover:bg-gray-100">Careers</a>
            </div>
          </div>

       
          <div className="relative group">
            <a className="hover:text-gray-900 cursor-pointer">Support</a>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2">
              <a className="block px-4 py-2 hover:bg-gray-100">Help Center</a>
              <a className="block px-4 py-2 hover:bg-gray-100">Contact</a>
            </div>
          </div>

        
          <div className="relative group">
            <a className="hover:text-gray-900 cursor-pointer">Community</a>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2">
              <a className="block px-4 py-2 hover:bg-gray-100">Events</a>
              <a className="block px-4 py-2 hover:bg-gray-100">Forums</a>
            </div>
          </div>

        
          <div className="relative group">
            <a className="hover:text-gray-900 cursor-pointer">Docs</a>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2">
              <a className="block px-4 py-2 hover:bg-gray-100">API</a>
              <a className="block px-4 py-2 hover:bg-gray-100">Tutorials</a>
            </div>
          </div>

          <a className="hover:text-gray-900 mr-2">Contact</a>
        </nav>

      
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Intern Portal
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar
