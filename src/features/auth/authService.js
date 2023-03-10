import axios from "axios";

const API_URL =  process.env.REACT_APP_BASE_API_URL +  "/auth"

// login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);

  if (response.data) {
    localStorage.setItem("userToken", JSON.stringify(response.data.token));
  }
  return response.data;
};
// login user
const forgotPassword = async (userData) => {
  const response = await axios.post(API_URL + "/forgotpassword", userData);
  return response.data;
};

// Logout
const logout = () => {
  localStorage.removeItem("userToken");
};

const authService = {
  logout,
  login,
  forgotPassword,
};

export default authService;
