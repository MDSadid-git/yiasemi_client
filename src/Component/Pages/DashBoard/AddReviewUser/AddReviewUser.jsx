import React, { useState } from "react";
import SectionTitle from "../../../ComponentShered/SectionTitile/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { toast } from "react-toastify";

const AddReviewUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [rating, setRating] = useState(0);
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const userReviews = {
      name: user.userName,
      details: data.details,
      rating: rating,
    };
    console.log(userReviews);
    await axiosSecure
      .post("/reviews/add-reviews", userReviews)
      .then((res) => {
        if (res.data.statusCode === 200) {
          toast.success("Item added successfully");
          reset();
        }
      })
      .catch((err) => {
        toast.error("Failed to add Review", err.response.data.data);
      });
  };
  return (
    <div>
      <section className="md:-mt-10">
        <SectionTitle
          heading="Add Reviews"
          subHeading="You Can say your thoughts"
        />
      </section>
      <section>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
          <div className="w-full my-6 mx-auto max-w-xl">
            <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="p-6 flex-auto">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                >
                  <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                    Name
                  </label>
                  <input
                    placeholder="Name"
                    readOnly
                    defaultValue={user.userName}
                    {...register("Name", { required: "Email is required" })}
                    type="Name"
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded appearance-none focus:outline-none focus:shadow-outline"
                    name="Name"
                  />
                  {errors.Name && (
                    <span className="text-red-600">{errors.email.message}</span>
                  )}

                  <label className="block text-secondary text-sm font-bold mt-3 mb-1">
                    Details
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Details"
                    {...register("details", {
                      required: "details is required",
                    })}
                    type="details"
                    className="w-full  px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded appearance-none focus:outline-none focus:shadow-outline"
                    name="details"
                  />
                  {errors.details && (
                    <span className="text-red-600">
                      {errors.details.message}
                    </span>
                  )}
                  <label className="block text-secondary text-sm font-bold mt-3 mb-1">
                    Rating
                  </label>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    onChange={setRating}
                    isRequired
                  />

                  <input
                    className="inline-flex cursor-pointer my-5 items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium transition duration-300 ease-out border-2 border-brand rounded-full shadow-md group"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddReviewUser;
