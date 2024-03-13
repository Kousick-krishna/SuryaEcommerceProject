import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="text-3xl text-center mb-6">
          <h1 className="text-4xl text-center mb-6">SuryaElectronics</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create Account
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full py-2 px-4 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="mobileNumber"
                className="block text-gray-700 font-semibold mb-2"
              >
                Mobile number
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">IN +91 </span>
                <input
                  type="tel"
                  id="mobileNumber"
                  className="w-full py-2 px-4 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full py-2 px-4 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-center">
              <button className="w-full py-2 px-4 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Create Your SuryaElectronics Account
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-500">
              Already have an account?{" "}
              <a href="#" className="text-blue-500">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;