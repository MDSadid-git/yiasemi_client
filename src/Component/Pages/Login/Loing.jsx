const Loing = () => {
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div>
      {" "}
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
                  onSubmit={handelLogin}
                  className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                >
                  <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                    Email
                  </label>
                  <input
                    placeholder="Email"
                    type="email"
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    name="email"
                  />
                  <label className="block text-secondary text-sm font-bold mt-3 mb-1">
                    Password
                  </label>
                  <input
                    placeholder="Password"
                    type="password"
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                    name="password"
                  />

                  <input
                    class="inline-flex my-5 items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-brand rounded-full shadow-md group"
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
