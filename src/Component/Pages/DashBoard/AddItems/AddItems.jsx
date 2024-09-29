import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../ComponentShered/SectionTitile/SectionTitle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Prepare FormData to send file and other data
    const formData = new FormData();
    console.log(data);
  };
  return (
    <div>
      <Helmet>
        {" "}
        <title>Yiasemi Lounge \ Add Items</title>
      </Helmet>{" "}
      <SectionTitle heading="Add an item" subHeading="What's new?" />
      <>
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
                    {...register("itemName", { required: true })}
                    type="userName"
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    name="itemName"
                  />
                  {errors.itemName && (
                    <span className="text-red-600">Item Name is required</span>
                  )}
                  <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                    Price
                  </label>
                  <input
                    placeholder="Price"
                    {...register("Price", { required: true })}
                    type="Price"
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    name="Price"
                  />
                  {errors.Price && (
                    <span className="text-red-600">Price is required</span>
                  )}
                  <div className="">
                    <label className="label block mb-2 text-sm font-bold ">
                      <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea
                      {...register("recipe")}
                      className="w-full px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline h-24"
                      placeholder="Bio"
                    ></textarea>
                  </div>
                  {errors.recipe && (
                    <span className="text-red-600">Recipe is required</span>
                  )}
                  <label className="block text-secondary text-sm font-bold mt-3 mb-1">
                    Avatar
                  </label>
                  <input
                    placeholder="avatar"
                    {...register("avatar", { required: true })}
                    type="file"
                    className="w-full pt-2 h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    name="avatar"
                  />
                  {errors.avatar && (
                    <span className="text-red-600">Avatar is required</span>
                  )}
                  <div className="form-control w-full my-2">
                    <label className="label">
                      <span className="label-text text-sm font-bold ">
                        Category*
                      </span>
                    </label>
                    <select
                      defaultValue="default"
                      {...register("category", { required: true })}
                      className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    >
                      <option disabled value="default">
                        Select a category
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
      </>
    </div>
  );
};

export default AddItems;
