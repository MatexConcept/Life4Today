import axios from 'axios';

const API_BASE_URL = "http://localhost:2002";

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/countries`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export const submitForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/form/submit-form`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
