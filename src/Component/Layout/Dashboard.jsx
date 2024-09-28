import { NavLink, Outlet } from "react-router-dom";
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
} from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <div className="w-64 min-h-screen bg-brand2">
          {isAdmin ? (
            <>
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
            </>
          ) : (
            <>
              <ul>
                <li>
                  <NavLink
                    to="/dashboard/cart"
                    className="flex justify-start items-center mt-4 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaHome className="mr-1 ml-3" /> user Home
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
                    to="/dashboard/cart"
                    className="flex justify-start items-center mt-1 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaCalendarAlt className="mr-1 ml-3" /> User Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/cart"
                    className="flex justify-start items-center mt-1 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaAd className="mr-1 ml-3" /> Add Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/cart"
                    className="flex justify-start items-center mt-1 bg-brand w-[80%] rounded-md mx-auto text-white font-semibold py-1"
                  >
                    <FaListCheck className="mr-1 ml-3" /> My Bookings
                  </NavLink>
                </li>
              </ul>
            </>
          )}
        </div>
        <div className="flex-1 p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
