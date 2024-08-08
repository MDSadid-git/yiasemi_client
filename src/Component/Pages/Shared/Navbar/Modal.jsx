import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        Get A Quote
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-end p-5 border-b border-solid border-gray-300 rounded-t ">
                  <button
                    className=" bg-transparent border-0 text-secondary float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="opacity-7 bg-brand  h-8 w-8 text-xl block text-white hover:bg-secondary  rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-secondary text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input
                      placeholder="First Name"
                      required=""
                      type="text"
                      className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />

                    <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                      Last Name
                    </label>
                    <input
                      placeholder="Last Name"
                      required=""
                      type="text"
                      className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                      id="name"
                      name="last name"
                    />
                    <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                      Email
                    </label>
                    <input
                      placeholder="Email"
                      required=""
                      type="text"
                      className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                    <label className="block text-secondary text-sm font-bold mt-3 mb-1">
                      Phone Number
                    </label>
                    <input
                      placeholder="Phone Number"
                      required=""
                      type="text"
                      className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                      id="phone"
                      name="phone"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 gap-3 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="px-5 py-2 rounded  font-bold text-[14px] text-secondary border border-brand"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className=" px-4 py-2  font-bold text-[14px]  bg-brand rounded  hover:bg-secondary"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;