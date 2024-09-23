import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "http://localhost:8000/api/v1/cart",
});
const useAxiosHooks = () => {
  return axiosSecure;
};

export default useAxiosHooks;
