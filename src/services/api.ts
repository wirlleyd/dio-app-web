import axios from "axios";

const baseURL = process.env.REACT_API_API_URL || "http://localhost:5050";

const api = axios.create({
  baseURL,
  responseType: "json",
});

export default api;
