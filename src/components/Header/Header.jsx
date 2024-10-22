import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // Track the logged-in user
  const loginDropdownRef = useRef(null);
  const registerDropdownRef = useRef(null);
  const navigate = useNavigate(); // For programmatic navigation

  // Check if a user is logged in
  useEffect(() => {
    const user =
      JSON.parse(localStorage.getItem("currentEmployer")) ||
      JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  // Toggle login dropdown visibility
  const toggleLoginDropdown = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsRegisterOpen(false); // Close register dropdown if open
  };

  // Toggle register dropdown visibility
  const toggleRegisterDropdown = () => {
    setIsRegisterOpen(!isRegisterOpen);
    setIsLoginOpen(false); // Close login dropdown if open
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("currentEmployer");
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/"); // Redirect to home
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginDropdownRef.current &&
        !loginDropdownRef.current.contains(event.target) &&
        registerDropdownRef.current &&
        !registerDropdownRef.current.contains(event.target)
      ) {
        setIsLoginOpen(false);
        setIsRegisterOpen(false); // Close both dropdowns if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [loginDropdownRef, registerDropdownRef]);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-red-500 font-bold text-2xl mr-2">HJ</span>
              <span className="font-semibold text-xl">HamroJob</span>
            </div>
          </Link>

          <div className="flex items-center order-2">
            {loggedInUser ? (
              // Show username and logout when logged in
              <div className="flex items-center space-x-4">
                <span className="text-gray-800">
                  {loggedInUser.username || loggedInUser.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5"
                >
                  Logout
                </button>
              </div>
            ) : (
              // Show login and register when not logged in
              <>
                <div className="relative" ref={loginDropdownRef}>
                  <Link
                    to="#"
                    onClick={toggleLoginDropdown}
                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none flex items-center"
                  >
                    <span>Log in</span>
                    <IoMdArrowDropdown className="w-5 h-5" />
                  </Link>
                  {isLoginOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <Link
                        to="/seekerlogin"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Log in as Seeker
                      </Link>
                      <Link
                        to="/employerlogin"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Log in as Employer
                      </Link>
                    </div>
                  )}
                </div>

                <div
                  className="relative inline-block text-left"
                  ref={registerDropdownRef}
                >
                  <Link
                    to="#"
                    onClick={toggleRegisterDropdown}
                    className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none flex items-center"
                  >
                    <span>Register</span>
                    <IoMdArrowDropdown className="w-5 h-5" />
                  </Link>
                  {isRegisterOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                      <Link
                        to="/seeker"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Register as Seeker
                      </Link>
                      <Link
                        to="/employer"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Register as Employer
                      </Link>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex font-medium lg:flex-row lg:space-x-8 ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
