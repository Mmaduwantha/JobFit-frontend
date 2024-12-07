import React from "react";

const Navbar = () => {
  return (
    <header className="mx-1 mt-1 mb-5 px-6 h-18 bg-gray-900 shadow-md rounded-md">
      <div className="container mx-auto flex justify-between items-baseline py-1 px-5">
        <h1 className="text-xl font-bold text-blue-600">JobFit</h1>
        <nav className="ml-4 flex space-x-16">
          <a href="#home" className="text-blue-600 hover:text-blue-600 transition-colors duration-500 ease-in-out">
            Home
          </a>
          <a href="#account" className="hover:text-blue-600 transition-colors duration-500 ease-in-out">
            Account
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors duration-500 ease-in-out">
            About
          </a>
        </nav>
        <button className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition-colors duration-500 ease-in-out">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
