import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import {
  FaAd,
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaBars, // New icon for toggle
} from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [isAdmin, isAdminPending, refetch] = useAdmin();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for sidebar visibility

  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, [user]);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <div>
          <button
            className={`${
              !isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-500 p-4 text-white bg-brand rounded-r-sm`}
            onClick={toggleSidebar}
          >
            <FaBars className="mx-auto" />
          </button>

          {/* Sidebar with transition for smooth opening and closing */}
          <div
            className={`${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-500 w-64 min-h-screen bg-brand2 pt-11 -mt-20`}
          >
            <button
              className={`${
                isSidebarOpen ? "" : ""
              }p-4 text-white w-64 bg-brand -mt-5`}
              onClick={toggleSidebar}
            >
              <FaBars className="mx-auto" />
            </button>
            {isAdmin && user ? (
              <ul>
                <li>
                  <NavLink
                    to="/dashboard/adminHome"
                    className="flex justify-start items-center mt-4 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaHome className="mr-1 ml-3" /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItems"
                    className="flex justify-start items-center mt-1 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaUtensils className="mr-1 ml-3" /> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageItems"
                    className="flex justify-start items-center mt-1 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaList className="mr-1 ml-3" /> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/bookings"
                    className="flex justify-start items-center mt-1 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaBook className="mr-1 ml-3" /> Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/users"
                    className="flex justify-start items-center mt-1 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaUsers className="mr-1 ml-3" /> All Users
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <NavLink
                    to="/dashboard/userhome"
                    className="flex justify-start items-center mt-4 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaHome className="mr-1 ml-3" /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/cart"
                    className="flex justify-start items-center mt-1 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaShoppingCart className="mr-1 ml-3" /> My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymenthistory"
                    className="flex justify-start items-center mt-1 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaCalendarAlt className="mr-1 ml-3" /> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/reviews"
                    className="flex justify-start items-center mt-1 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaAd className="mr-1 ml-3" /> Add Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/bookings"
                    className="flex justify-start items-center mt-1 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaListCheck className="mr-1 ml-3" /> My Bookings
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Outlet Content Area */}
        <div
          // className={`${
          //   isSidebarOpen ?  : "w-full"
          // } transition-all duration-500 flex-1 p-5`}
          className={`transition-all duration-500 flex-1 p-5 ${
            isSidebarOpen ? "ml-0" : "-ml-64 mt-10"
          }`}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
