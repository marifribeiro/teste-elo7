import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { "Content-type": "application/json" },
  timeout: 5000
});

export const getJobOpenings = () => {
  return api.get("/v2/5d6fb6b1310000f89166087b");
};
