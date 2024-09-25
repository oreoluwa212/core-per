import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { heroImg4, logo } from "../../../assets";

const SignUpAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTyping, setPasswordTyping] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const password = watch("password");

  const passwordCriteria = {
    length: password ? password.length : 0,
    uppercase: password ? /[A-Z]/.test(password) : false,
    lowercase: password ? /[a-z]/.test(password) : false,
    number: password ? /\d/.test(password) : false,
    specialChar: password ? /[!"#$%&()*,.:<>?@^{|}]/.test(password) : false,
  };

  const allCriteriaMet = Object.values(passwordCriteria).every(Boolean);

  useEffect(() => {
    setPasswordTyping(password?.length > 0 || false);
  }, [password]);

  // Use the correct prefix for Vite
  const apiUrl = import.meta.env.VITE_API_URL;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/admin/signup`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSubmitSuccess(true);
        // Redirect to admin dashboard directly
        navigate("/signin/admin");
      } else {
        setErrorMessage(response.data.message || "Authentication failed");
        setTimeout(() => setErrorMessage(""), 3000); // Hide error after 3 seconds
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Authentication failed");
        setTimeout(() => setErrorMessage(""), 3000); // Hide error after 3 seconds
      } else {
        console.error("Error:", error);
        setErrorMessage("An unexpected error occurred. Please try again.");
        setTimeout(() => setErrorMessage(""), 3000); // Hide error after 3 seconds
      }
    }
  };

  return (
    <div>
      <div className="lg:grid-cols-2 grid grid-cols-1 bg-black text-white">
        <div className="lg:flex h-full hidden">
          <img
            src={heroImg4}
            alt="Signup Image"
            className="object-cover w-full max-h-screen"
          />
        </div>
        <div className="lg:px-[15%] px-7 mt-10 flex flex-col gap-[10%]">
          <Link to={"/"}>
            <div className="lg:justify-center lg:mx-0 flex px-6 pt-16">
              <img src={logo} alt="" className="h-[30px] lg:h-[45px]" />
            </div>
          </Link>
          <div className="w-full flex justify-center items-center">
            <div className="my-auto w-full rounded-[16px] p-6">
              <div className="mb-4 flex justify-center rounded-[62px] border">
                <button
                  className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${
                    isSignUp ? "bg-gray-400" : ""
                  } transition-all duration-300`}
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </button>
                <Link
                  to="/signin/admin"
                  className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${
                    isSignUp ? "" : "bg-gray-400"
                  } transition-all duration-300`}
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </Link>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Input */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[16px] text-secondary-120"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                    className="h-[52px] w-full rounded-[10px] border px-4 py-2 text-base text-secondary-70 outline-none sm:text-[18px]"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-critical-120">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Input */}
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
                    className="h-[52px] w-full rounded-[10px] border px-4 py-2 text-base text-secondary-70 outline-none sm:text-[18px]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-critical-120">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Input */}
                <div className="relative mb-4">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-[16px] text-secondary-120"
                  >
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&()*,.:<>?@^{|}]).{8,}$/,
                          message: "Password did not meet criteria",
                        },
                      })}
                      className="h-[52px] w-full text-black rounded-[10px] border px-4 py-2 text-base text-secondary-70 outline-none sm:text-[18px]"
                    />
                    <span
                      className="absolute text-black right-4 top-4 text-lg cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  {passwordTyping && (
                    <div className="mt-2">
                      <p
                        className={`text-sm ${
                          passwordCriteria.length >= 8
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordCriteria.length >= 8 ? "✓" : "✗"} 8 characters
                        minimum
                      </p>
                      <p
                        className={`text-sm ${
                          passwordCriteria.uppercase
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordCriteria.uppercase ? "✓" : "✗"} At least one
                        uppercase letter
                      </p>
                      <p
                        className={`text-sm ${
                          passwordCriteria.lowercase
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordCriteria.lowercase ? "✓" : "✗"} At least one
                        lowercase letter
                      </p>
                      <p
                        className={`text-sm ${
                          passwordCriteria.number
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordCriteria.number ? "✓" : "✗"} At least one
                        number
                      </p>
                      <p
                        className={`text-sm ${
                          passwordCriteria.specialChar
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordCriteria.specialChar ? "✓" : "✗"} At least one
                        special character
                      </p>
                    </div>
                  )}
                  {errors.password && (
                    <p className="mt-1 text-sm text-critical-120">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!allCriteriaMet}
                  className={`w-full rounded-[15px] py-[16px] mt-5 text-center text-base uppercase sm:text-[18px] ${
                    allCriteriaMet ? "bg-primary-500" : "bg-gray-300"
                  } transition duration-200`}
                >
                  Sign Up
                </button>

                {/* Success Message */}
                {submitSuccess && (
                  <p className="text-green-500 text-sm mt-4">
                    Signup successful! Redirecting...
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpAdmin;
