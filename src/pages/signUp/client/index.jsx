import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { heroImg4, logo } from "../../../assets";

const SignUpClient = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const [, setSubmitSuccess] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordTyping, setPasswordTyping] = useState(false);

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

    const onSubmit = () => {
        setSubmitSuccess(true);
        window.location.href = "/";
    };
    // const onSubmit = async (data) => {
    //     try {
    //         const response = await fetch('/api/auth/signin', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         if (response.ok) {
    //             const { role } = await response.json();
    //             setUserRole(role);

    //             if (role === 'admin') {
    //                 navigate('/admin-dashboard');
    //             } else if (role === 'client') {
    //                 navigate('/client-dashboard');
    //             }
    //         } else {
    //             console.error('Authentication failed');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    return (
        <div>
            <div className='lg:grid-cols-2 grid grid-cols-1 bg-black text-white'>
                <div className='lg:flex h-full hidden'>
                    <img
                        src={heroImg4}
                        alt="Signup Image"
                        className='object-cover w-full max-h-screen'
                    />
                </div>
                <div className="lg:px-[15%] px-7 mt-10 flex flex-col gap-[10%]">
                    <Link to={"/"}>
                        <div className='lg:justify-center lg:mx-0 flex px-6 pt-16'>
                            <img src={logo} alt="" className='h-[30px] lg:h-[45px]' />
                        </div>
                    </Link>
                    <div className="">
                        <div>
                            <div className='h-[60px] flex gap-[20px] border-[1px] border-[#AFAFAF] justify-center rounded-[8px] items-center mt-[20px]'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#FFC107" />
                                    <path d="M3.65302 7.3455L6.93851 9.755C7.82752 7.554 9.98052 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C8.65902 2 5.32802 4.1685 3.65302 7.3455Z" fill="#FF3D00" />
                                    <path d="M12.5 22.0003C15.083 22.0003 17.43 21.0118 19.2045 19.4043L16.1095 16.7853C15.0718 17.5745 13.8037 18.0014 12.5 18.0003C9.899 18.0003 7.6905 16.3418 6.8585 14.0273L3.5975 16.5398C5.2525 19.7783 8.6135 22.0003 12.5 22.0003Z" fill="#4CAF50" />
                                    <path d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#1976D2" />
                                </svg>

                                <div>
                                    <h2 className='text-[20px] fw-bold'>Continue with Google</h2>
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
                                    <button
                                        className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${isSignUp ? "bg-gray-400" : ""} transition-all duration-300`}
                                        onClick={() => setIsSignUp(true)}
                                    >
                                        Sign Up
                                    </button>
                                    <Link
                                        to="/signin/client"
                                        className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${isSignUp ? "" : "bg-gray-400"} transition-all duration-300`}
                                        onClick={() => setIsSignUp(false)}
                                    >
                                        Sign In
                                    </Link>
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
                                            className="h-[52px] w-full rounded-[10px] border px-4 py-2 text-base text-secondary-70 outline-none sm:text-[18px]"
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
                                                <p className={`text-sm ${passwordCriteria.length >= 8 ? 'text-green-500' : 'text-red-500'}`}>
                                                    {passwordCriteria.length >= 8 ? "✓" : "✗"} 8 characters minimum
                                                </p>
                                                <p className={`text-sm ${passwordCriteria.uppercase ? 'text-green-500' : 'text-red-500'}`}>
                                                    {passwordCriteria.uppercase ? "✓" : "✗"} At least one uppercase letter
                                                </p>
                                                <p className={`text-sm ${passwordCriteria.lowercase ? 'text-green-500' : 'text-red-500'}`}>
                                                    {passwordCriteria.lowercase ? "✓" : "✗"} At least one lowercase letter
                                                </p>
                                                <p className={`text-sm ${passwordCriteria.number ? 'text-green-500' : 'text-red-500'}`}>
                                                    {passwordCriteria.number ? "✓" : "✗"} At least one number
                                                </p>
                                                <p className={`text-sm ${passwordCriteria.specialChar ? 'text-green-500' : 'text-red-500'}`}>
                                                    {passwordCriteria.specialChar ? "✓" : "✗"} At least one special character
                                                </p>
                                            </div>
                                        )}
                                        {errors.password && (
                                            <p className="mt-1 text-sm text-critical-120">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={!allCriteriaMet}
                                        className={`w-full rounded-[15px] py-[16px] mt-5 text-center text-base uppercase sm:text-[20px] ${allCriteriaMet ? "bg-[#008080] text-white cursor-pointer" : "bg-gray-300 text-black cursor-not-allowed"
                                            }`}
                                    >
                                        sign up
                                    </button>
                                    <div className="pt-2">
                                        <h2 className="text-center pb-10 text-[16px]">
                                            Different user?
                                            <span className="text-[#008080] fw-bold italic"> <Link to="/selection">Back to Selection</Link></span>
                                        </h2>
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

export default SignUpClient;
