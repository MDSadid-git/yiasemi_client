import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "http://localhost:8000/api/v1/cart",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
