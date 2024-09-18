import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../../features/user/UserSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:8000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData.statusCode === 200) {
          const { _id, userName, email, avatar } = responseData.data.user;
          const { accessToken, refreshToken } = responseData.data;
          localStorage.setItem(
            "user",
            JSON.stringify({
              _id,
              userName,
              email,
              avatar: avatar || "", // Ensure avatar has a fallback
            })
          );

          dispatch(
            loginUser({
              _id: _id,
              userName: userName,
              email: email,
              avatar: avatar || "", // Ensure avatar has a fallback
            })
          );

          toast.success("Login successfully.");

          // Set token as cookie
          if (accessToken && refreshToken) {
            document.cookie = `token=${accessToken}; path=/; max-age=86400;`; // Set token as cookie for 1 day
            document.cookie = `refreshToken=${refreshToken}; path=/;`;
          }

          navigate(from, { replace: true });
        } else {
          toast.error(`Failed : ${responseData.data}`);
        }
      })
      .catch((err) => {
        toast.error("Login Failed: " + err.data);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Yiasemi Lounge \ Login</title>
      </Helmet>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
        <div className="w-full my-6 mx-auto max-w-xl">
          <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-center p-5 border-b border-solid border-gray-300 rounded-t">
              <h2 className="bg-transparent border-0 font-extrabold text-secondary float-right">
                Login Now
              </h2>
            </div>
            <div className="p-6 flex-auto">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
              >
                <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                  Email
                </label>
                <input
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded appearance-none focus:outline-none focus:shadow-outline"
                  name="email"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}

                <label className="block text-secondary text-sm font-bold mt-3 mb-1">
                  Password
                </label>
                <input
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded appearance-none focus:outline-none focus:shadow-outline"
                  name="password"
                />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}

                <input
                  className="inline-flex cursor-pointer my-5 items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium transition duration-300 ease-out border-2 border-brand rounded-full shadow-md group"
                  type="submit"
                  value="Login"
                />
                <div className="text-brand font-semibold">
                  <Link className="hover:underline" to={"/register"}>
                    New here? Create a New Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
