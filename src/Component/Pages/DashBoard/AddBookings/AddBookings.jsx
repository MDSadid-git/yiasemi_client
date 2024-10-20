import React, { useState } from "react";
import SectionTitle from "../../../ComponentShered/SectionTitile/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddBookings = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const bookingData = {
      customerName: data.customerName,
      email: user.email,
      phoneNumber: data.phoneNumber,
      bookingDate: data.bookingDate,
      bookingTime: data.bookingTime,
      numberOfGuests: data.numberOfGuests,
      specialRequests: data.specialRequests,
    };
    // await axiosSecure
    //   .post("/bookings/add-booking", bookingData)
    //   .then((res) => {
    //     console.log(res);

    //     if (res.data.statusCode === 200) {
    //       toast.success("Item added successfully");
    //       reset();
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error("Failed to add Review", err.response.data.data);
    //   });

    try {
      const response = await axiosSecure.post(
        "/bookings/add-booking",
        bookingData
      );
      if (response.data.statusCode === 200) {
        toast.success("Booking successfully created!");
        // reset();
      }
    } catch (error) {
      console.log("Error creating booking:", error.response.data.data);
      toast.error("Failed " + error.response.data.data);
    }
  };
  return (
    <div>
      <SectionTitle heading="Add Booking" subHeading="Find your set" />
      <section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto p-4 shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="customerName" className="block mb-2">
              Customer Name:
            </label>
            <input
              type="text"
              id="customerName"
              {...register("customerName", {
                required: "Customer name is required",
              })}
              className="w-full px-3 py-2 border"
            />
            {errors.customerName && (
              <p className="text-red-500">{errors.customerName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              defaultValue={user.email}
              readOnly
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              className="w-full px-3 py-2 border"
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="bookingDate" className="block mb-2">
              Booking Date:
            </label>
            <input
              type="date"
              id="bookingDate"
              {...register("bookingDate", {
                required: "Booking date is required",
              })}
              className="w-full px-3 py-2 border"
            />
            {errors.bookingDate && (
              <p className="text-red-500">{errors.bookingDate.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="bookingTime" className="block mb-2">
              Booking Time:
            </label>
            <input
              type="time"
              id="bookingTime"
              {...register("bookingTime", {
                required: "Booking time is required",
              })}
              className="w-full px-3 py-2 border"
            />
            {errors.bookingTime && (
              <p className="text-red-500">{errors.bookingTime.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="numberOfGuests" className="block mb-2">
              Number of Guests:
            </label>
            <input
              type="number"
              id="numberOfGuests"
              {...register("numberOfGuests", {
                required: "Number of guests is required",
                min: { value: 1, message: "At least 1 guest is required" },
              })}
              className="w-full px-3 py-2 border"
            />
            {errors.numberOfGuests && (
              <p className="text-red-500">{errors.numberOfGuests.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="specialRequests" className="block mb-2">
              Special Requests:
            </label>
            <textarea
              id="specialRequests"
              {...register("specialRequests")}
              rows={3}
              className="w-full px-3 py-2 border"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit Booking
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddBookings;
