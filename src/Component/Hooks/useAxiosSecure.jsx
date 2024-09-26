import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});
const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("accessToken");
      console.log("Token being used:", token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config; // Ensure the config is returned so that the request proceeds
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
