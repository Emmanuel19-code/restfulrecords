import React from 'react'
import Header from '../components/Header'

const RegisterDeceased = () => {
  return (
    <div>
      <Header />
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-gray-700 text-center mb-8">
            Register a Death
          </h3>
          <form className="bg-white p-8 shadow-lg rounded-md space-y-6">
            {/* Deceased Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-600 font-medium mb-2"
              >
                Full Name of Deceased
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-gray-600 font-medium mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Date of Death */}
            <div>
              <label
                htmlFor="dateOfDeath"
                className="block text-gray-600 font-medium mb-2"
              >
                Date of Death
              </label>
              <input
                type="date"
                id="dateOfDeath"
                name="dateOfDeath"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Deceased Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-gray-600 font-medium mb-2"
              >
                Last Known Address
              </label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter last known address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Next of Kin */}
            <div>
              <label
                htmlFor="nextOfKin"
                className="block text-gray-600 font-medium mb-2"
              >
                Next of Kin
              </label>
              <input
                type="text"
                id="nextOfKin"
                name="nextOfKin"
                placeholder="Enter next of kin's name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Contact Information */}
            <div>
              <label
                htmlFor="contactInfo"
                className="block text-gray-600 font-medium mb-2"
              >
                Contact Information of Next of Kin
              </label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                placeholder="Enter contact information of next of kin"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default RegisterDeceased