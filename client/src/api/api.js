import axios from 'axios';

const URI = "http://localhost:5000";


export const saveUserDetails = async (userDetails) => {
  try {
    return await axios.post(`${URI}/saveuser/details`, userDetails);
    // console.log("API", userDetails.name);
  } catch (error) {
    console.log("Error hai yaar", error);
  }
};

export const getUserDetails = () => {
    
}