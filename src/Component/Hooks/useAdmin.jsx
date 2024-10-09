import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    data: isAdmin,
    isPending: isAdminPending,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "Admin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/admin/${user.email}`);
      return res.data;
    },
  });
  return [isAdmin, isAdminPending, refetch, user];
};

export default useAdmin;
