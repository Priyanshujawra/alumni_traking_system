import axios from "axios";
const API = "http://localhost:1337";

export const fatch_data = async () => {
  try {
    const respone = await axios.get(`${API}/api/jobs`);
    // console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const jobService = {
  postJob: async (formData) => {
    try {
      const response = await axios.post(
        `${API}/api/jobs`,
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};
export const fatch_data_profile = async () => {
  try {
    const respone = await axios.get(`${API}/api/profiles`);
    // console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const fatch_data_event = async () => {
  try {
    const respone = await axios.get(`${API}/api/events`);
    // console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const fetch_alumni_idea = async () => {
  try {
    const respone = await axios.get(`${API}/api/alumni-ideas`);
    // console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log(error.message);
  }
};
