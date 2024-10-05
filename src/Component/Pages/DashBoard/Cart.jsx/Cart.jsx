import React from "react";
import { Helmet } from "react-helmet-async";
import useCartHook from "../../../Hooks/useCartHook";
import SectionButton from "../../../ComponentShered/SectionButton/SectionButton";
import { FaTrashAlt } from "react-icons/fa";

import { toast } from "react-toastify";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCartHook();
  const cartLenght = cart?.data?.map((item) => item?.userFoods?.length);
  const cartPrice = cart?.data?.[0]?.userFoods?.reduce(
    (total, item) => total + item.price,
    0
  );

  const axiosURL = useAxiosSecure();

  const deleteItem = (id) => {
    axiosURL
      .delete(`/cart/cart/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.statusCode === 200) {
          toast.success("Delete Item SuccessFully");
        }
        refetch();
      })
      .catch((err) => {
        toast.error("Delete Faild", err);
      });
  };

  return (
    <div>
      <Helmet>
        {" "}
        <title>Yiasemi Lounge \ Order Cart </title>
      </Helmet>
      <div className="md:flex justify-evenly px-4">
        <h2 className="font-semibold text-2xl my-2">
          Total Items: {cartLenght}
        </h2>
        <h2 className="font-semibold text-2xl my-2">Total Price {cartPrice}</h2>
        <div className="my-2">
          {cartPrice > 0 ? (
            <Link to={"/dashboard/payment"}>
              <SectionButton sectionTitle="Pay" />
            </Link>
          ) : (
            <button
              disabled
              className=" block my-1 items-center justify-center px-6 py-[2px] overflow-hidden font-medium transition duration-300 ease-out border-2 text-brand3 border-brand3 rounded-full shadow-md group"
            >
              Pay
            </button>
          )}
        </div>
      </div>
      {/* table cart area  */}
      <div>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div>
              <h2 className="text-2xl font-semibold leading-tight">Invoices</h2>
            </div>
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
                        Price
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.data?.[0]?.userFoods?.map((item, index = 1) => (
                      <tr key={item._id}>
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
                                src={item.image}
                                alt=""
                              />
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item.name}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            ${item.price}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => deleteItem(item._id)}
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

export default Cart;
