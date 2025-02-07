import React from "react";
import Header from "../components/Header";

const Home = () => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Sample statistics data for demonstration
  const totalMales = 600;
  const totalFemales = 500;
  const totalAdults = 900;
  const totalChildren = 300;

  // Total Records should equal the sum of the above categories
  const totalRecords = totalMales + totalFemales + totalChildren;

  return (
    <div className="bg-blue-50 min-h-screen">
  {/* Header */}
  <Header />
  
  {/* Hero Section */}
  <section className="bg-white py-16 text-center">
    <h2 className="text-3xl font-semibold text-blue-800">
      Welcome to Restful Records Admin Panel
    </h2>
    <p className="text-gray-600 mt-4">
      Manage the registration and certification of deceased records efficiently.
    </p>
    <p className="text-sm text-gray-500 mt-2">{currentDate}</p>
  </section>
  
  {/* Admin Dashboard */}
  <section className="py-12 ">
    <div className="max-w-6xl mx-auto px-4">
      <h3 className="text-2xl font-semibold text-blue-700 text-center mb-8">
        Admin Dashboard
      </h3>
  
      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 shadow-lg rounded-md text-center">
          <h4 className="text-xl font-medium text-gray-800 mb-2">
            Total Registered
          </h4>
          <p className="text-3xl font-semibold text-gray-700">
            {totalRecords}
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-md text-center">
          <h4 className="text-xl font-medium text-gray-800 mb-2">
            Total Adults
          </h4>
          <p className="text-3xl font-semibold text-gray-700">
            {totalAdults}
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-md text-center">
          <h4 className="text-xl font-medium text-gray-800 mb-2">
            Total Males
          </h4>
          <p className="text-3xl font-semibold text-gray-700">
            {totalMales}
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-md text-center">
          <h4 className="text-xl font-medium text-gray-800 mb-2">
            Total Females
          </h4>
          <p className="text-3xl font-semibold text-gray-700">
            {totalFemales}
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-md text-center">
          <h4 className="text-xl font-medium text-gray-800 mb-2">
            Total Children
          </h4>
          <p className="text-3xl font-semibold text-gray-700">
            {totalChildren}
          </p>
        </div>
      </div>
    </div>
  </section>
  
  {/* Footer */}
  <footer className="bg-blue-100 py-6">
    <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
      <p>&copy; 2024 Restful Records. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#privacy" className="hover:underline text-blue-600">
          Privacy Policy
        </a>
        <a href="#terms" className="hover:underline text-blue-600">
          Terms of Service
        </a>
        <a href="#contact" className="hover:underline text-blue-600">
          Contact Us
        </a>
      </div>
    </div>
  </footer>
</div>

  
  );
};

export default Home;
