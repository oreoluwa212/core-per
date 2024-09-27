import { useEffect, useState } from "react";
import { heroImg2, logo } from "../../../assets";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";

const SignInAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const password = watch("password");

  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmitError("");
    try {
      const response = await axios.post(`${apiUrl}/auth/admin/signin`, {
        email: data.email,
        password: data.password,
      });

      if (response.data.msg === "Admin signed in successfully") {
        toast.success("Successfully signed in!");
        navigate("/dashboard/admin");
      } else {
        setSubmitError(
          response.data.msg || "An error occurred. Please try again."
        );
        toast.error(
          response.data.msg || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      setSubmitError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
      <div className="lg:grid-cols-2 h-screen grid grid-cols-1 bg-black text-white">
        <div className="lg:flex h-full hidden">
          <img
            src={heroImg2}
            alt="Signin Image"
            className="object-cover w-full max-h-screen"
          />
        </div>
        <div className="lg:px-[15%] px-7 mt-10 flex flex-col gap-[10%]">
          <div className="lg:justify-center lg:mx-0 flex px-6 pt-16">
            <Link to={"/"}>
              <img src={logo} alt="" className="h-[30px] lg:h-[45px]" />
            </Link>
          </div>
          <div>
            <div>
              <div className="h-[60px] flex gap-[20px] border-[1px] border-[#AFAFAF] justify-center rounded-[8px] items-center mt-[20px]">
                <div>
                  <h2 className="text-[20px] fw-bold">Continue with Google</h2>
                </div>
              </div>
              <div className="flex items-center justify-center my-4">
                <div className="flex-grow border-t border-[#AFAFAF]"></div>
                <span className="fw-bold mx-4">Or</span>
                <div className="flex-grow border-t border-[#AFAFAF]"></div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="my-auto w-full rounded-[16px] p-6">
                <div className="mb-4 flex justify-center rounded-[62px] border">
                  <Link
                    to="/signup/admin"
                    className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${
                      isSignIn ? "" : "bg-gray-400"
                    } transition-all duration-300`}
                    onClick={() => setIsSignIn(false)}
                  >
                    Sign Up
                  </Link>
                  <button
                    className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${
                      isSignIn ? "bg-gray-400" : ""
                    } transition-all duration-300`}
                    onClick={() => setIsSignIn(true)}
                  >
                    Sign In
                  </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[16px] text-secondary-120"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      {...register("email", { required: "Email is required" })}
                      className="h-[52px] w-full rounded-[10px] border px-4 py-2 text-black outline-none sm:text-[18px]"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-critical-120">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="password"
                      className="mb-2 block text-[16px] text-secondary-120"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="h-[52px] w-full rounded-[10px] border px-4 py-2 text-black outline-none sm:text-[18px]"
                    />
                    <span
                      className="absolute right-4 text-lg top-12 text-black transform cursor-pointer"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {errors.password && (
                      <p className="mt-1 text-sm text-critical-120">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <Link
                      to="#"
                      className="text-[14px] text-secondary-120 underline hover:text-gray-200"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  {submitError && (
                    <p className="mt-2 text-sm text-red-500">{submitError}</p>
                  )}
                  <div className="mt-6 space-y-2">
                    <button
                      type="submit"
                      className={`w-full rounded-[10px] bg-teal py-4 text-white flex items-center justify-center ${
                        loading ? "opacity-50" : "hover:bg-primary-110"
                      }`}
                      disabled={loading}
                    >
                      {loading ? (
                        <ClipLoader size={20} color="#ffffff" />
                      ) : (
                        "Sign In"
                      )}{" "}
                    </button>
                    <p className="text-center">
                      Not an admin?
                      <Link to={"/selection"}>
                        <span className="italic pl-1 text-teal">
                          Back to selection
                        </span>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInAdmin;
