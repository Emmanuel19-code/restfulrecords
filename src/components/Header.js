import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const currentDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-blue-50 shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-blue-600 font-bold text-2xl">🕊️</span>
          </div>
          <h1 className="text-2xl font-semibold text-blue-800">
            Restful Records
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {!user ? (
            <>
              <a
                href="#support"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                Support
              </a>
              <a
                href="/login"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                Login
              </a>
            </>
          ) : (
            <>
              <a
                href="/"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                Home
              </a>
              <a
                href="/register_deceased"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                Register Deceased
              </a>
              <a
                href="/search_records"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                Search Records
              </a>
              <a
                href="#support"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                Support
              </a>
              <button
                onClick={logout}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>

      {/* Date and Divider */}
      <div className="mt-2 border-t border-blue-300 pt-2 text-sm text-blue-600">
        Today is {currentDate}
      </div>
    </header>
  );
};

export default Header;
