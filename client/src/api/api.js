import axios from 'axios';

const URI = "http://localhost:5000";


export const saveUserDetails = async (userDetails) => {
  try {
    return await axios.post(`${URI}/saveuser/details`, userDetails, {
      headers: {
        'Authorization': localStorage.getItem('authToken'),
      }
    });
    // console.log("API", userDetails.name);
  } catch (error) {
    console.log("Error while calling API..", error);
  }
};

export const getUserDetails = async () => {
    try {
      const response = await axios.get(`${URI}/getuser/details`, {
        headers: {
          'Authorization':  localStorage.getItem('authToken'),
        }
      });
      return response.data[0];
    } catch (error) {
      console.log("Details not available as of now...", error);
    }
}