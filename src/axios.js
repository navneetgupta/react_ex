import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

// Alter defaults after instance has been created
axiosInstance.defaults.headers.common["Authorization"] =
  "AUTH_TOKEN_FROM_INSTANCE";

export default axiosInstance;
