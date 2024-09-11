import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const Loing = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:8000/user/" + username)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        //console.log(resp)
        if (Object.keys(resp).length === 0) {
          toast.error("Please Enter valid username");
        } else {
          if (resp.password === password) {
            toast.success("Success");
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("userrole", resp.role);
            usenavigate("/");
          } else {
            toast.error("Please Enter valid credentials");
          }
        }
      })
      .catch((err) => {
        toast.error("Login Failed due to :" + err.message);
      });
  };
  return (
    <div>
      <Helmet>
        {" "}
        <title>Yiasemi Lounge \ Login</title>
      </Helmet>{" "}
      <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
          <div className=" w-full my-6 mx-auto max-w-xl ">
            <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex justify-center p-5 border-b border-solid border-gray-300 rounded-t ">
                <h2 className=" bg-transparent border-0 font-extrabold text-secondary float-right">
                  Login Now
                </h2>
              </div>
              <div className=" p-6 flex-auto">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                >
                  <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                    Email
                  </label>
                  <input
                    placeholder="Email"
                    {...register("email")}
                    type="email"
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    name="email"
                  />
                  <label className="block text-secondary text-sm font-bold mt-3 mb-1">
                    Password
                  </label>
                  <input
                    placeholder="Password"
                    {...register("password")}
                    type="password"
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    name="password"
                  />

                  <input
                    class="inline-flex cursor-pointer my-5 items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-brand rounded-full shadow-md group"
                    type="submit"
                    value="Login"
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

export default Loing;
