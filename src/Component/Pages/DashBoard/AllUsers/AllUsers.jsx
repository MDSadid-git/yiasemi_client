import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import useAdmin from "../../../Hooks/useAdmin";
import SectionTitle from "../../../ComponentShered/SectionTitile/SectionTitle";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/users");
      return res.data;
    },
  });

  const deleteUser = (id) => {
    axiosSecure
      .delete(`/users/users/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode === 200) {
          toast.success("Delete User SuccessFully");
          refetch();
        }
      })
      .catch((err) => {
        toast.error("Delete Faild", err);
      });
  };
  const adminUser = (id) => {
    axiosSecure
      .patch(`/users/admin/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode === 200) {
          refetch();
          toast.success(`User Admin SuccessFully`);
        }
        refetch();
      })
      .catch((err) => {
        toast.error("User Admin Faild", err);
      });
  };

  return (
    <div>
      <div>
        <SectionTitle
          heading="All Users"
          subHeading={`User Length : ${users?.data?.length}`}
        />
      </div>
      {/* table cart area  */}
      <div>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        #
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Image
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Roll
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.data?.map((user, index = 1) => (
                      <tr key={user._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {index + 1}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src={user?.avatar}
                                alt=""
                              />
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user?.userName}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user?.email}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {user.roll === "Admin" ? (
                            "Admin"
                          ) : (
                            <button
                              onClick={() => adminUser(user?._id)}
                              type="button"
                              className=" text-red-500 hover:text-red-700"
                            >
                              <FaUser size={17} />
                            </button>
                          )}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => deleteUser(user?._id)}
                            type="button"
                            className=" text-red-500 hover:text-red-700"
                          >
                            <FaTrashAlt size={17} />
                          </button>
                        </td>
                        {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Paid</span>
                          </span>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
