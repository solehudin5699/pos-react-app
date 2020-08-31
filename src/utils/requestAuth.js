import axios from "axios";

export const loginAPI = (body) => {
  return axios.post("http://localhost:1000/auth/login", body
  );
};
export const registrationAPI = (body, header) => {
  return axios.post("http://localhost:1000/auth/registration", body, header
  );
};
export const validateTokenAPI = () => {
  return axios.post("http://localhost:1000/auth/validate", null, {headers:{"x-access-token":`bearer ${localStorage.getItem("token")}`}}
  );
};