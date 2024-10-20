import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const BookingUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["all-booking"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings/all-booking");
      return res.data.data;
    },
  });
  console.log(data);

  return <div>Booking</div>;
};

export default BookingUser;
