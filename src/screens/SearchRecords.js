import React, { useState } from "react";
import Header from "../components/Header";

const SearchRecords = () => {
  // Sample data for demonstration
  const [records, setRecords] = useState([
    { name: "John Doe", gender: "Male", dateOfDeath: "2023-12-01", age: 55 },
    {
      name: "Jane Smith",
      gender: "Female",
      dateOfDeath: "2022-05-23",
      age: 34,
    },
    { name: "Samuel King", gender: "Male", dateOfDeath: "2021-07-11", age: 78 },
    {
      name: "Emily Rose",
      gender: "Female",
      dateOfDeath: "2020-03-14",
      age: 22,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecords, setFilteredRecords] = useState(records);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term === "") {
      setFilteredRecords(records); // Reset if no search term
    } else {
      const filtered = records.filter(
        (record) =>
          record.name.toLowerCase().includes(term.toLowerCase()) ||
          record.gender.toLowerCase().includes(term.toLowerCase()) ||
          record.dateOfDeath.includes(term)
      );
      setFilteredRecords(filtered);
    }
  };

  return (
    <div className=" bg-white">
        <Header/>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h3 className="text-2xl font-semibold text-gray-700 text-center mb-8">
          Search Records
        </h3>

        {/* Search Input */}
        <div className="mb-8 text-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name, gender, or date of death"
            className="w-full max-w-md border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Search Results */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Gender</th>
                <th className="py-2 px-4 border-b">Date of Death</th>
                <th className="py-2 px-4 border-b">Age</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{record.name}</td>
                    <td className="py-2 px-4 border-b">{record.gender}</td>
                    <td className="py-2 px-4 border-b">{record.dateOfDeath}</td>
                    <td className="py-2 px-4 border-b">{record.age}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-4 px-4 text-center text-gray-500"
                  >
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchRecords;
