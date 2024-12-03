import React from "react";

const Header = () => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-gray-100 shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-gray-600 font-bold text-lg">🕊️</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-700">
            Restful Records
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a
            href="/register_deceased"
            className="text-gray-600 hover:text-gray-800"
          >
            Register Deceased
          </a>
          <a
            href="/search_records"
            className="text-gray-600 hover:text-gray-800"
          >
            Search Records
          </a>
          <a
            href="/issue_certificate"
            className="text-gray-600 hover:text-gray-800"
          >
            Issue Certificate
          </a>
          <a href="#support" className="text-gray-600 hover:text-gray-800">
            Support
          </a>
        </nav>

        {/* Action Button <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add New Record
        </button>*/}
      </div>

      {/* Date and Divider */}
      <div className="mt-2 border-t border-gray-300 pt-2 text-sm text-gray-500">
        Today is {currentDate}
      </div>
    </header>
  );
};

export default Header;
