import React from "react";
import SectionTitle from "../../../ComponentShered/SectionTitile/SectionTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateItems = () => {
  const item = useLoaderData();
  const { name, category, price, recipe, image, _id } = item.data;
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard/manageItems";
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const menuItem = {
      name: data.itemName,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
      image: data.image[0],
      _id,
    };

    await axiosSecure
      .patch(`/menus/admin/update/item/`, menuItem, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.statusCode === 200) {
          toast.success("Item added successfully");
          reset();
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        toast.error(`Failed to add item ${err.response.data.data}`);
      });
  };

  return (
    <div>
      <div>
        <SectionTitle heading="Update an Item" subHeading="Update Info" />
      </div>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
        <div className=" w-full my-1 mx-auto max-w-xl ">
          <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className=" p-6 flex-auto">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
              >
                <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                  Item Name
                </label>
                <input
                  placeholder="itemName"
                  defaultValue={name}
                  {...register("itemName")}
                  type="userName"
                  className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                  name="itemName"
                />

                <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                  Price
                </label>
                <input
                  defaultValue={price}
                  placeholder="Price"
                  {...register("price")}
                  type="Price"
                  className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                  name="price"
                />

                <div className="">
                  <label className="label block mb-2 text-sm font-bold ">
                    <span className="label-text">Recipe Details</span>
                  </label>
                  <textarea
                    defaultValue={recipe}
                    {...register("recipe")}
                    className="w-full px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline h-24"
                    placeholder="Bio"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-secondary text-sm font-bold mt-3 mb-1">
                    image
                  </label>
                  <img src={image} alt="image" className="mb-2 h-24 w-24" />
                  <input
                    placeholder="image"
                    {...register("image")}
                    type="file"
                    className="w-full pt-2 h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    name="image"
                  />
                </div>
                <div className="form-control w-full my-2">
                  <label className="label">
                    <span className="label-text text-sm font-bold ">
                      Category*
                    </span>
                  </label>
                  <select
                    defaultValue={category}
                    {...register("category")}
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                  >
                    <option disabled value={category}>
                      {category}
                    </option>
                    <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                  </select>
                </div>

                <input
                  className=" cursor-pointer block my-5 items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-brand rounded-full shadow-md group"
                  type="submit"
                  value="Add Items"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItems;
