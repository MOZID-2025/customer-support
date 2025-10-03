import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <nav className="flex items-center justify-between py-4 mb-8">
        <div className="text-xl font-bold text-gray-800">
          CS — <span>Ticket System</span>
        </div>

        <div class="flex items-center space-x-6 text-lg">
          <a href="#">Home</a>
          <a href="#">FAQ</a>
          <a href="#">Changelog</a>
          <a href="#">Blog</a>
          <a href="#">Download</a>
          <a href="#">Contact</a>
          <button class="flex items-center px-4 py-2 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition duration-150">
            + New Ticket
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
