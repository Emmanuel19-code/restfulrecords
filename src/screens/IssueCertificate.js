import React, { useState } from "react";
import Header from "../components/Header";

const IssueCertificate = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [certificateDetails, setCertificateDetails] = useState({
    certificateNumber: "",
    issuedDate: "",
    issuedBy: "",
    remarks: "",
  });

  const handleSearch = () => {
    // Simulate searching for a record based on search query (e.g., deceased full name)
    // In real-world applications, this would involve an API call
    // For now, we'll mock the selection.
    const mockRecord = {
      fullName: "John Doe",
      dateOfDeath: "2024-10-10",
      lastKnownAddress: "123 Main Street",
      nextOfKin: "Jane Doe",
      contactInfo: "123-456-7890",
    };
    setSelectedRecord(mockRecord);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificateDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate certificate issue action (e.g., save certificate data to backend)
    console.log("Certificate Issued:", certificateDetails);
  };

  return (
    <div>
      <Header />
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-gray-700 text-center mb-8">
            Issue Death Certificate
          </h3>

          {/* Search Section */}
          <div className="mb-6 text-center">
            <input
              type="text"
              placeholder="Search by Deceased Full Name"
              className="border border-gray-300 rounded-md px-4 py-2 w-1/2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-2 rounded-md ml-4 hover:bg-blue-700"
            >
              Search
            </button>
          </div>

          {/* Display Selected Record */}
          {selectedRecord && (
            <div className="mb-8 p-4 border border-gray-300 rounded-md bg-gray-50">
              <h4 className="text-lg font-semibold text-gray-700">
                Selected Record
              </h4>
              <p>
                <strong>Name:</strong> {selectedRecord.fullName}
              </p>
              <p>
                <strong>Date of Death:</strong> {selectedRecord.dateOfDeath}
              </p>
              <p>
                <strong>Last Known Address:</strong>{" "}
                {selectedRecord.lastKnownAddress}
              </p>
              <p>
                <strong>Next of Kin:</strong> {selectedRecord.nextOfKin}
              </p>
              <p>
                <strong>Contact Information:</strong>{" "}
                {selectedRecord.contactInfo}
              </p>
            </div>
          )}

          {/* Certificate Details Form */}
          {selectedRecord && (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 shadow-lg rounded-md space-y-6"
            >
              {/* Certificate Number */}
              <div>
                <label
                  htmlFor="certificateNumber"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Certificate Number
                </label>
                <input
                  type="text"
                  id="certificateNumber"
                  name="certificateNumber"
                  value={certificateDetails.certificateNumber}
                  onChange={handleChange}
                  placeholder="Enter certificate number"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Issued Date */}
              <div>
                <label
                  htmlFor="issuedDate"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Date of Issue
                </label>
                <input
                  type="date"
                  id="issuedDate"
                  name="issuedDate"
                  value={certificateDetails.issuedDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Issued By */}
              <div>
                <label
                  htmlFor="issuedBy"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Issued By
                </label>
                <input
                  type="text"
                  id="issuedBy"
                  name="issuedBy"
                  value={certificateDetails.issuedBy}
                  onChange={handleChange}
                  placeholder="Enter name of the person issuing the certificate"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Remarks */}
              <div>
                <label
                  htmlFor="remarks"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Remarks (Optional)
                </label>
                <textarea
                  id="remarks"
                  name="remarks"
                  value={certificateDetails.remarks}
                  onChange={handleChange}
                  placeholder="Enter any additional remarks"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                >
                  Issue Certificate
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default IssueCertificate;
