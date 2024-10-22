import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use for redirection
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SeekerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch registered seekers from localStorage
    const existingSeekers = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if seeker exists with matching email and password
    const seeker = existingSeekers.find(
      (user) => user.email === email && user.password === password
    );

    if (seeker) {
      // Store logged-in seeker details in localStorage
      localStorage.setItem("currentSeeker", JSON.stringify(seeker));

      // Redirect to Seeker Home Page
      navigate("/seekerhome"); // Make sure this path exists
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
            Welcome back to <span className="text-red-600">HamroJob</span>
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="eg. Janecopper@xyz.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account? Register as{" "}
              <a href="/seeker" className="text-red-600 hover:text-red-500">
                Seeker
              </a>{" "}
              /{" "}
              <a href="/employer" className="text-red-600 hover:text-red-500">
                Employer
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SeekerLogin;
