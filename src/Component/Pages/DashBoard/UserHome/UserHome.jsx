import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const UserHome = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["user-state"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/user-profile-stats");
      return res.data.data;
    },
  });

  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold">
          Hi Welcome {user ? user.userName : "Back"}
        </h2>
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            {/* <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                CATEGORY
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Roof party normcore before they sold out, cornhole vape
              </h2>
              <p className="leading-relaxed mb-8">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric. Cray pug you
                probably haven't heard of them hexagon kickstarter craft beer
                pork chic.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
            </div> */}

            <div className="p-12 md:w-1/2 flex flex-col items-center md:border-r-2">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={user?.avatar}
                />
              </div>
              <h2 className="title-font text-xl font-medium text-gray-900 mt-2 mb-1">
                Email: {user?.email}
              </h2>
              <h2 className="title-font text-xl font-medium text-gray-900 mt-1 mb-1">
                Name: {user?.userName}
              </h2>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              {" "}
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Your Activites
              </h2>
              <Link to={"dashboard/cart"} className="text-lg font-semibold">
                Order : {data?.[0]?.orderResult?.length}
              </Link>
              <Link to={"dashboard/review"} className="text-lg font-semibold">
                Reviews : {data?.[0]?.reviewResult?.length}
              </Link>
              <h3 className="text-lg font-semibold">
                Bookings : {data?.[0]?.bookingResult?.length}
              </h3>
              <h3 className="text-lg font-semibold">
                Payment : {data?.[0]?.paymentResult?.length}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserHome;
