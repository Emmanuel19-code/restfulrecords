import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { ApiContext } from "../contexts/ApiContext";
import { useNavigate } from "react-router-dom";

const SearchRecords = () => {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { SearchForProfile } = useContext(ApiContext);
  const navigation = useNavigate();
  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm]);

  const fetchData = async (term) => {
    if (term) {
      const response = await SearchForProfile(term);
      setRecords(response);
    } else {
      setRecords([]);
    }
  };

  return (
    <div className="bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h3 className="text-2xl font-semibold text-gray-700 text-center mb-8">
          Search Records
        </h3>

        {/* Search Input */}
        <div className="mb-8 text-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on change
            placeholder="Search by name, gender, or date of death"
            className="w-full sm:w-auto max-w-md border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Search Results */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Age</th>
                <th className="py-2 px-4 border-b">Gender</th>
                <th className="py-2 px-4 border-b">Date of Birth</th>
                <th className="py-2 px-4 border-b">Date of Death</th>
                <th className="py-2 px-4 border-b">Region of Morgue</th>
                <th className="py-2 px-4 border-b">Town</th>
              </tr>
            </thead>

            <tbody>
              {records.length > 0 ? (
                records.map((record, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50"
                    onClick={()=>navigation(`/issue_certificate/${record.id}`)}
                  >
                    <td className="py-2 capitalize px-4 border-b">
                      {record.fullName}
                    </td>
                    <td className="py-2 px-4 border-b">{record.age}</td>
                    <td className="py-2 px-4 border-b">{record.gender}</td>
                    <td className="py-2 px-4 border-b">
                      {record.dateOfBirth.split("T")[0]}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {record.dateOfDeath.split("T")[0]}
                    </td>
                    <td className="py-2 px-4 border-b">{record.region}</td>
                    <td className="py-2 px-4 border-b">{record.town}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
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
