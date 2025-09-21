import React, { useState } from "react";
import GoogleButton from "../components/Buttons/GoogleButton";


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };


  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center  justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-5  bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back
          </h2>
          <p className="text-gray-600">Login to manage your account.</p>
        </div>
        {/* Google */}
       <GoogleButton page='Login' />
        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 border-dashed" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        {/* Signup Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john.doe@example.com"
              className="w-full px-3 py-3 border text-gray-500 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  transition-colors"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Create Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type='password'
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a strong password (min 8 characters)"
                className="w-full px-3 py-3 pr-10 border text-gray-500  rounded-md shadow-sm placeholder-gray-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-[17px] text-gray-600">
          Don't have an account yet?{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
             Create New Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
