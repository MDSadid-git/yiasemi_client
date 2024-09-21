import { useQuery } from "@tanstack/react-query";
import useAxiosHooks from "./useAxiosHooks";

const useCartHook = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const axiosSecure = useAxiosHooks();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/user-orders-foods?email=${user.email}`
      );
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCartHook;
