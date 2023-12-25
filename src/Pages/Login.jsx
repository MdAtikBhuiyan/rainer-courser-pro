import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const Login = () => {

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { state } = useLocation()

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok === true) {
        const responseData = await response.json();
        console.log(response);
        localStorage.setItem('token', responseData.accessToken);
        toast.success('Logged In...');
        navigate(state ? state : '/')
      } else {
        toast.error('Login failed.');
      }
    } catch (error) {
      console.error('Error login:', error);
      toast.error(error.message)
    }
  };

  return (
    <div className="flex justify-center mt-14 min-h-screen">
      <div className="flex flex-col w-fit px-10 py-10 rounded-md bg-white h-fit text-slate-900">
        <div className="mb-8 text-center">
          <h1 className=" text-4xl font-bold">Sign In</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid "
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter Email"
                className="min-w-[400px] mx-auto px-3 py-2 border rounded-md border-slate-100 focus:outline-gray-200 bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                {...register("password", {
                  required: true,
                })}
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                placeholder="Enter Password"
                className="min-w-[400px] mx-auto px-3 py-2 mb-3 border rounded-md border-slate-100 focus:outline-gray-200 bg-gray-100 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-success text-white text-base w-full"
            >
              Sign In
            </button>
            {/* <h1 className=" text-red-500 mt-3">{error}</h1> */}
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16   "></div>
          <div className="flex-1 h-px sm:w-16   "></div>
        </div>
        <p className="px-6 text-sm text-center text-slate-900">
          Doesn&apos;t have an account?{" "}
          <Link
            to="/register"
            className="hover:underline hover:text-red-500 font-semibold text-red-400"
          >
            Register
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
