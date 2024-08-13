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
      {/* home end here */}
      <li
        className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300 "
        onMouseEnter={togglePagesDropdown}
        onMouseLeave={pagesDropdownClose}
        onClick={togglePagesDropdown}
      >
        <Link
          onClick={pagesDropdownClose}
          className="flex group items-center text-brand2 py-[14px] hover:translate-x-1 duration-300 uppercase  text-[14px] "
        >
          <span>Pages</span>
        </Link>

        {pagesDropdownOpen && (
          <ul className="dropdown-menu  rounded-b-lg w-32 pt-1 absolute top-auto bg-white block z-50 duration-300 group-hover:translate-y-1 ease-in-out ">
            <li className="py-1/2 mb-[1px] hover:bg-secondary duration-300 bg-brand py-2 text-secondary hover:text-brand">
              <Link
                onClick={isMenuOpen}
                title="Faq"
                to="/faq"
                className="block px-4  text-[14px] hover:translate-x-1 duration-300"
              >
                FAQ
              </Link>
            </li>
            <li className="bg-brand mb-[1px] hover:bg-secondary duration-300 py-2 text-white">
              <Link
                onClick={isMenuOpen}
                title="history"
                to="/history"
                className="block px-4    text-[14px] text-gray-700 hover:text-brand hover:translate-x-1 duration-300"
              >
                History
              </Link>
            </li>
            <li className="bg-brand mb-[1px] hover:bg-secondary duration-300 py-2 text-white">
              <Link
                onClick={isMenuOpen}
                title="pricing"
                to="/pricing"
                className="block px-4    text-[14px] text-gray-700 hover:text-brand hover:translate-x-1 duration-300"
              >
                Pricing
              </Link>
            </li>
            <li className="bg-brand mb-[1px] hover:bg-secondary duration-300 py-2 text-white">
              <Link
                onClick={isMenuOpen}
                title="team"
                to="/team"
                className="block px-4    text-[14px] text-gray-700 hover:text-brand hover:translate-x-1 duration-300"
              >
                Team
              </Link>
            </li>
            <li className="bg-brand mb-[1px] hover:bg-secondary duration-300 py-2 text-white">
              <Link
                onClick={isMenuOpen}
                title="shop"
                to="/shop"
                className="block px-4    text-[14px] text-gray-700 hover:text-brand hover:translate-x-1 duration-300"
              >
                Shop
              </Link>
            </li>
            <li className="bg-brand hover:bg-secondary duration-300 py-2 text-white">
              <Link
                onClick={isMenuOpen}
                title="shopDetails"
                to="/shopDetails"
                className="block px-4    text-[14px] text-gray-700 hover:text-brand hover:translate-x-1 duration-300"
              >
                Shop Details
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* pages end here */}
      <li
        className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300 "
        onMouseEnter={toggleClinicsDropdown}
        onMouseLeave={clinicsDropdownClose}
        onClick={toggleClinicsDropdown}
      >
        <Link
          onClick={clinicsDropdownClose}
          className="flex group items-center py-[14px] text-brand2  hover:translate-x-1 duration-300 uppercase  text-[14px]"
        >
          <span>Blog</span>
        </Link>

        {clinicsDropdownOpen && (
          <ul className="dropdown-menu  rounded-b-lg w-32 pt-1 absolute top-auto bg-white block z-50 duration-300 group-hover:translate-y-1 ease-in-out ">
            <li className="py-1/2 mb-[1px] hover:bg-secondary duration-300 bg-brand py-2 text-secondary hover:text-brand">
              <Link
                onClick={isMenuOpen}
                title="blogRegular"
                to="/blogRegular"
                className="block px-4  text-[14px] hover:translate-x-1 duration-300"
              >
                Blog
              </Link>
            </li>
            <li className="bg-brand mb-[1px] hover:bg-secondary duration-300 py-2 text-white">
              <Link
                onClick={isMenuOpen}
                title="blogGrid"
                to="/blogGrid"
                className="block px-4    text-[14px] text-gray-700 hover:text-brand hover:translate-x-1 duration-300"
              >
                Blog Grid
              </Link>
            </li>

            <li className="bg-brand hover:bg-secondary duration-300 py-2 text-white">
              <Link
                onClick={isMenuOpen}
                title="blogDetails"
                to="/blogDetails"
                className="block px-4    text-[14px] text-gray-700 hover:text-brand hover:translate-x-1 duration-300"
              >
                Blog Details
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* clinics end here */}
      <li
        className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300  "
        onMouseEnter={toggleBlogDropdown}
        onMouseLeave={blogDropdownClose}
        onClick={toggleBlogDropdown}
      >
        <Link
          onClick={blogDropdownClose}
          className="flex group items-center py-[14px] text-brand2 hover:translate-x-1 duration-300 uppercase  text-[14px] "
        >
          <span>Items</span>
        </Link>

        {blogDropdownOpen && (
          <ul className="dropdown-menu  rounded-b-lg w-32 pt-1 absolute top-auto bg-white block z-50 duration-300 group-hover:translate-y-1 ease-in-out ">
            <li className="bg-brand hover:bg-secondary duration-300 py-2 text-white">
              <Link
                onClick={isMenuOpen}
                title="ProjectDetails"
                to="/ProjectDetails"
                className="block px-4 text-[14px] text-gray-700 hover:text-brand hover:translate-x-1 duration-300"
              >
                Project Details
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* blog end here */}
      <li
        className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300"
        onMouseEnter={toggleDoctorDropdown}
        onMouseLeave={doctorsDropdownClose}
        onClick={toggleDoctorDropdown}
      >
        <Link
          onClick={doctorsDropdownClose}
          to="/"
          className="flex group items-center py-[14px] text-brand2 hover:translate-x-1 duration-300 uppercase  text-[14px] "
        >
          <span>Service</span>
        </Link>
        {doctorsDropdownOpen && (
          <ul className="dropdown-menu  rounded-b-lg w-36 pt-1 absolute  left-auto bg-white block z-50 duration-300 group-hover:translate-y-1 ease-in-out ">
            <li className="bg-brand hover:bg-secondary duration-300 py-2 text-white">
              <Link
                onClick={isMenuOpen}
                title="servicesDetails"
                to="/servicesDetails"
                className="block px-4 text-[14px] text-gray-700 hover:text-brand hover:translate-x-1 duration-300"
              >
                Service Details
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* doctors end here */}
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
      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300">
        <Link
          onClick={isMenuOpen}
          title="Contact us"
          to="/contact"
          className="flex group items-center py-[14px] text-brand2 hover:translate-x-1 duration-300 uppercase  text-[14px]"
        >
          Contact us
        </Link>
      </li>
      {/* <li></li> */}
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
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="#"
                className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-bold text-[14px] transition-all bg-brand rounded hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                  <Modal />
                </span>
              </a>
            </li>
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
