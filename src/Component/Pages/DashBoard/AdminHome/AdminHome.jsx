import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../../Hooks/useAdmin";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBook, FaPaypal, FaShapes, FaUsers, FaWallet } from "react-icons/fa";
import { FaBucket, FaJediOrder } from "react-icons/fa6";

const AdminHome = () => {
  const [isAdmin, isAdminPending, refetch, user] = useAdmin();
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/admin-stats");
      return res.data;
    },
  });
  console.log(data);

  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold">
          Hi Welcome {useAdmin ? user.userName : "Back"}
        </h2>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-7 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 w-full p-4">
              <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center gap-3 w-full">
                <div>
                  <FaWallet className="text-xl" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">
                    {data?.data?.revenue}
                  </h2>
                  <h2 className="font-semibold text-lg">Revenue</h2>
                </div>
              </div>
            </div>

            <div class="xl:w-1/4 md:w-1/2 w-full p-4">
              <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center gap-3 w-full">
                <div>
                  <FaUsers className="text-2xl" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">
                    {data?.data?.allUser}
                  </h2>
                  <h2 className="font-semibold text-lg">All User</h2>
                </div>
              </div>
            </div>

            <div class="xl:w-1/4 md:w-1/2 w-full p-4">
              <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center gap-3 w-full">
                <div>
                  <FaBook className="text-xl" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">
                    {data?.data?.allMenu}
                  </h2>
                  <h2 className="font-semibold text-lg">All Menu</h2>
                </div>
              </div>
            </div>

            <div class="xl:w-1/4 md:w-1/2 w-full p-4">
              <div class="bg-gray-100 p-6 rounded-lg flex items-center justify-center gap-3 w-full">
                <div>
                  <FaBucket className="text-xl" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">
                    {data?.data?.allOrders}
                  </h2>
                  <h2 className="font-semibold text-lg">All Orders </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHome;
