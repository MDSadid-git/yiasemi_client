import { useState } from "react";
import { Link } from "react-router-dom";
// import colorLogo from "../../assets/logo/colorLogo.png";
import Modal from "./Modal";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [clinicsDropdownOpen, setClinicsDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [doctorsDropdownOpen, setDoctorsDropdownOpen] = useState(false);

  // for home
  const toggleHomeDropdown = () => setHomeDropdownOpen(!homeDropdownOpen);
  const homeDropdownClose = () => setHomeDropdownOpen(false);

  //for pages
  const togglePagesDropdown = () => setPagesDropdownOpen(!pagesDropdownOpen);
  const pagesDropdownClose = () => setPagesDropdownOpen(false);

  //for clinics
  const toggleClinicsDropdown = () =>
    setClinicsDropdownOpen(!clinicsDropdownOpen);
  const clinicsDropdownClose = () => setClinicsDropdownOpen(false);

  //for blog
  const toggleBlogDropdown = () => setBlogDropdownOpen(!blogDropdownOpen);
  const blogDropdownClose = () => setBlogDropdownOpen(false);

  //for doctors
  const toggleDoctorDropdown = () =>
    setDoctorsDropdownOpen(!doctorsDropdownOpen);
  const doctorsDropdownClose = () => setDoctorsDropdownOpen(false);

  const menuItems = (
    <>
      <li
        className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-400"
        onMouseEnter={toggleHomeDropdown}
        onMouseLeave={homeDropdownClose}
        onClick={toggleHomeDropdown}
      >
        <Link
          onClick={homeDropdownClose}
          className="flex group items-center py-[14px] text-brand2 hover:translate-x-1 duration-300 uppercase  text-[14px] "
        >
          <span>Home</span>
        </Link>
        {/* 
        {homeDropdownOpen && (
          <ul className="dropdown-menu  rounded-b-lg w-32 pt-1 absolute top-auto bg-white block z-50 duration-300 group-hover:translate-y-1 ease-in-out ">
            <li className="py-1/2 mb-[1px] hover:bg-secondary duration-300 bg-brand py-2 text-secondary hover:text-brand">
              <Link
                onClick={isMenuOpen}
                title="Home1"
                to="/"
                className="block px-4 text-brand2 text-[14px] hover:translate-x-1 duration-300"
              >
                Home1
              </Link>
            </li>
            <li className="bg-brand hover:bg-secondary duration-300 py-2 text-white">
              <Link
                onClick={isMenuOpen}
                title="Home2"
                to="/home2"
                className="block px-4    text-[14px] text-gray-700 hover:text-brand hover:translate-x-1 duration-300"
              >
                Home2
              </Link>
            </li>
          </ul>
        )} */}
      </li>
      {/* Yiasem All Menu  */}
      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300">
        <Link
          onClick={isMenuOpen}
          title="Menu"
          to="/menu"
          className="flex group items-center py-[14px] text-brand2 hover:translate-x-1 duration-300 uppercase  text-[14px]"
        >
          Menu
        </Link>
      </li>{" "}
      {/* Yiasem all menu end */}
      {/* Yiasem All Menu  */}
      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300">
        <Link
          onClick={isMenuOpen}
          title="Order"
          to="/order/dessert"
          className="flex group items-center py-[14px] text-brand2 hover:translate-x-1 duration-300 uppercase  text-[14px]"
        >
          Order
        </Link>
      </li>{" "}
      {/* Yiasem all menu end */}
      {/* Yiasem login  */}
      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300">
        <Link
          onClick={isMenuOpen}
          title="Login"
          to="/login"
          className="flex group items-center py-[14px] text-brand2 hover:translate-x-1 duration-300 uppercase  text-[14px]"
        >
          Login
        </Link>
      </li>{" "}
      {/* Yiasem login end */}
    </>
  );

  return (
    <div className="bg-[#FFFFFF]  sticky shadow-md  top-0 z-50 border-4 border-white">
      <div className="px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            {/* <img src={colorLogo} alt="" className="w-40" /> */}
            <h1 className="w-40 font-bold text-brand italic ">
              Yiasmi <br /> Lounge
            </h1>
            <h2></h2>
          </Link>
          <ul className="items-center nav-list hidden space-x-8 lg:flex">
            {menuItems}
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white  border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        {/* <img src={colorLogo} alt="" className="w-52" /> */}
                        Yiesmi
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">{menuItems}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
