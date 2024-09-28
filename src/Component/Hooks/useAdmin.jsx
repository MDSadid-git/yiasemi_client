import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const user = JSON.parse(localStorage.getItem("user"));
  const { data: isAdmin, isPending: isAdminPending } = useQuery({
    queryKey: [user?.email, "Admin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res);
      return res.data;
    },
  });
  return [isAdmin, isAdminPending];
};

export default useAdmin;
