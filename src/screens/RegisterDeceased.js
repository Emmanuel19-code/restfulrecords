import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { ApiContext } from "../contexts/ApiContext";
import { useNavigate } from "react-router-dom";

const RegisterDeceased = () => {
  const { RegisterInfo } = useContext(ApiContext);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    dateOfDeath: "",
    address: "",
    causeOfDeath: "",
    chiNumber: "",
    nextOfKin: "",
    nextOfKinGender: "",
    nextOfKinAddress: "",
    relationship: "",
    email: "",
    phone: "",
    registrationOffice: "",
  });
  const navigate = useNavigate();
  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const transformedData = {
      FullName: formData.fullName,
      Gender: formData.gender,
      DateOfBirth: formData.dateOfBirth,
      DateOfDeath: formData.dateOfDeath,
      Age: parseInt(formData.age),
      Address: formData.address,
      CauseOfDeath: formData.causeOfDeath,
      CHINumber: formData.chiNumber,
      NextOfKinName: formData.nextOfKin,
      NextOfKinGender: formData.nextOfKinGender,
      RelationshipToDeceased: formData.relationship,
      NextOfKinEmail: formData.email,
      NextOfKinPhone: formData.phone,
      NextOfKinAddress: formData.nextOfKinAddress,
      RegistrationOffice: formData.registrationOffice,
    };
   await RegisterInfo(transformedData);

  };

  return (
    <div>
      <Header />
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-gray-700 text-center mb-8">
            Register a Death
          </h3>
          <form
            className="bg-white p-8 shadow-lg rounded-md space-y-6"
            onSubmit={handleSubmit}
          >
            <h4 className="text-lg font-medium text-gray-700 mb-4">
              DECEASED DETAILS
            </h4>
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
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-gray-600 font-medium mb-2"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-600 font-medium mb-2"
              >
                Age
              </label>
              <input
                type="text"
                name="age"
                placeholder="Enter full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
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
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

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
                value={formData.dateOfDeath}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-gray-600 font-medium mb-2"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter last known address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                rows="2"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="causeOfDeath"
                className="block text-gray-600 font-medium mb-2"
              >
                Cause of Death
              </label>
              <textarea
                id="causeOfDeath"
                name="causeOfDeath"
                placeholder="Enter cause of death"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                rows="2"
                value={formData.causeOfDeath}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="chiNumber"
                className="block text-gray-600 font-medium mb-2"
              >
                CHI Number
              </label>
              <input
                type="text"
                id="chiNumber"
                name="chiNumber"
                placeholder="Enter CHI number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.chiNumber}
                onChange={handleChange}
              />
            </div>

            {/* Next of Kin Details */}
            <h4 className="text-lg font-medium text-gray-700 mb-4">
              NEXT OF KIN DETAILS
            </h4>
            <div>
              <label
                htmlFor="nextOfKin"
                className="block text-gray-600 font-medium mb-2"
              >
                Name of Next of Kin
              </label>
              <input
                type="text"
                id="nextOfKin"
                name="nextOfKin"
                placeholder="Enter next of kin's name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.nextOfKin}
                onChange={handleChange}
                required
              />
            </div>
     
            <div>
              <label
                htmlFor="nextOfKinGender"
                className="block text-gray-600 font-medium mb-2"
              >
                Gender
              </label>
              <select
                id="nextOfKinGender"
                name="nextOfKinGender"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.nextOfKinGender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="relationship"
                className="block text-gray-600 font-medium mb-2"
              >
                Relationship to Deceased
              </label>
              <input
                type="text"
                id="relationship"
                name="relationship"
                placeholder="Enter relationship to deceased"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.relationship}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-gray-600 font-medium mb-2"
              >
                Address
              </label>
              <textarea
                id="address"
                name="nextOfKinAddress"
                placeholder="Enter last known address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                rows="2"
                value={formData.nextOfKinAddress}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-600 font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="registrationOffice"
                className="block text-gray-600 font-medium mb-2"
              >
                Registration Office
              </label>
              <select
                id="registrationOffice"
                name="registrationOffice"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.registrationOffice}
                onChange={handleChange}
                required
              >
                <option value="">Select office</option>
                <option value="Edinburgh">City of Edinburgh</option>
                <option value="EastLothian">East Lothian</option>
                <option value="Midlothian">Midlothian</option>
                <option value="WestLothian">West Lothian</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="text-center">
              <button
                
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                onClick={()=>navigate("/payment")}
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterDeceased;
