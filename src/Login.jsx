import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login({ setIsAuth }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      data.email === savedUser.email &&
      data.password === savedUser.password
    ) {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);


      navigate("/home", { replace: true });
    } else {
      alert(" Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#689B8A] via-[#a1c9bb] to-[#f7f7f7] relative overflow-hidden">
   
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 2 }}
        className="absolute w-72 h-72 bg-[#38534B] rounded-full -top-20 -left-20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 2 }}
        className="absolute w-72 h-72 bg-[#689B8A] rounded-full -bottom-20 -right-20 blur-3xl"
      />

  
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, type: "spring" }}
        className="relative bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-96 border border-gray-200"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#38534B]">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 text-center mb-8">
          Please login to your account
        </p>

 
        <div className="mb-5">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 8,
                message: "Email must be at least 8 characters",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#689B8A] transition-all"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

     
        <div className="mb-5">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
                message:
                  "Password must include at least one number and one special character",
              },
            })}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#689B8A] transition-all"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

    
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#689B8A] text-white py-3 rounded-xl hover:bg-[#38534B] transition font-semibold shadow-lg"
        >
          Sign In
        </motion.button>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?
          <Link
            to={"/register"}
            className="text-[#38534B] font-semibold cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
      </motion.form>
    </div>
  );
}

export default Login;
