import React from "react";
import { json, Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosHooks from "../../../Hooks/useAxiosSecure";
import useCartHook from "../../../Hooks/useCartHook";

const FoodCard = ({ items }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosHooks();
  const [, refetch] = useCartHook();

  const handelOrderItems = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: food?._id,
        email: user?.email,
        name: food?.name,
        image: food?.image,
        price: food?.price,
      };
      axiosSecure.post("/cart/addcart", cartItem).then((res) => {
        console.log(res.data.statusCode);
        if (res.data.statusCode === 200) {
          toast.success(`${res.data.data.name} Food add done successfully`);
          refetch();
        }
      });
    } else {
      toast.error(`You are not login!!!`);
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="grid md:grid-cols-3 gap-5 mx-auto">
      {items &&
        items.map((items) => (
          <div className="container mx-4 my-4" key={items._id}>
            <div className="w-64 border">
              <img src={items.image} className="w-full" alt="..." />
              <div className="p-4">
                <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                  {items.name}
                </h5>
                <p>{items.recipe}</p>
                <div>
                  <button
                    onClick={() => handelOrderItems(items)}
                    className="relative inline-flex my-5 items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-brand rounded-full shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-brand group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-brand transition-all duration-300 transform group-hover:translate-x-full ease">
                      Order now
                    </span>
                    <span className="relative invisible">Order now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FoodCard;
