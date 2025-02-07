import axios from "axios";
import { createContext } from "react";

export const ApiContext = createContext();

const BASE_URL = "http://localhost:5158/api/admin";

export const ApiProvider = ({ children }) => {
  const RegisterInfo = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/register_deceased`, data, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const SearchForProfile = async (data) => {
    try {
      const response = await axios.get(`${BASE_URL}/search`, { params: { query: data } });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  

  const LoadProfileData = async (Id) =>
  {
    try {
        const response = await axios.get(`${BASE_URL}/profile_data/${Id}`)
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  return (
    <ApiContext.Provider value={{ RegisterInfo, SearchForProfile,LoadProfileData }}>
      {children}
    </ApiContext.Provider>
  );
};
