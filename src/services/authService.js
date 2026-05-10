import axios from "axios";

const API = "https://service-hub5.onrender.com";

// SEND OTP
export const sendOtp = async (email) => {

 return axios.post(
  `${API}/otp/send?email=${encodeURIComponent(email)}`
 );

};

// VERIFY OTP
export const verifyOtp = async (email, otp) => {

  return axios.post(
    `${API}/otp/verify?email=${encodeURIComponent(email)}&otp=${otp}`
  );

};