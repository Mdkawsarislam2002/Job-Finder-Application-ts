import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://some-domain.com/api/",
});

export default AxiosInstance;
