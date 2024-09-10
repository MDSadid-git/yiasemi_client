import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Helmet>
        {" "}
        <title>Yiasemi Lounge \ Register</title>
      </Helmet>{" "}
      <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
          <div className=" w-full my-6 mx-auto max-w-xl ">
            <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex justify-center p-5 border-b border-solid border-gray-300 rounded-t ">
                <h2 className=" bg-transparent border-0 font-extrabold text-secondary float-right">
                  Register Now
                </h2>
              </div>
              <div className=" p-6 flex-auto">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                >
                  <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                    User Name
                  </label>
                  <input
                    placeholder="userName"
                    {...register("userName", { required: true })}
                    type="userName"
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    name="userName"
                  />
                  {errors.userName && (
                    <span className="text-red-600">User Name is required</span>
                  )}
                  <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                    Email
                  </label>
                  <input
                    placeholder="Email"
                    {...register("email", { required: true })}
                    type="email"
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    name="email"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                  <label className="block text-secondary text-sm font-bold mt-3 mb-1">
                    Password
                  </label>
                  <input
                    placeholder="Password"
                    {...register("password", { required: true })}
                    type="password"
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    name="password"
                  />
                  {errors.password && (
                    <span className="text-red-600">Password is required</span>
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

                  <input
                    class=" cursor-pointer block my-5 items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-brand rounded-full shadow-md group"
                    type="submit"
                    value="Register"
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

export default Register;
