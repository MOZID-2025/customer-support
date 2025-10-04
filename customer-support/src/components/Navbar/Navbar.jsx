import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <nav className="flex items-center justify-between py-4 mb-4">
        <div className="text-xl font-bold text-gray-800">
          CS — <span>Ticket System</span>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-lg">
          <a href="#">Home</a>
          <a href="#">FAQ</a>
          <a href="#">Changelog</a>
          <a href="#">Blog</a>
          <a href="#">Download</a>
          <a href="#">Contact</a>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800  text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition duration-150">
            + New Ticket
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-gray-100 rounded-lg shadow-md p-4 space-y-4 text-lg">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            FAQ
          </a>
          <a href="#" className="block">
            Changelog
          </a>
          <a href="#" className="block">
            Blog
          </a>
          <a href="#" className="block">
            Download
          </a>
          <a href="#" className="block">
            Contact
          </a>
          <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800  text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition duration-150">
            + New Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
