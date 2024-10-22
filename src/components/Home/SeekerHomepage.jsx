import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SeekerHomePage() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the logged-in seeker from localStorage
    const loggedInSeeker = JSON.parse(localStorage.getItem("currentSeeker"));

    if (loggedInSeeker && loggedInSeeker.username) {
      setUserName(loggedInSeeker.username);
    }
  }, []);

  const handleLogout = () => {
    // Remove seeker from localStorage and redirect to login
    localStorage.removeItem("currentSeeker");
    navigate("/seekerlogin");
  };

  return (
    <div className="homepage">
      <h1>Seeker Home Page</h1>
      {userName ? (
        <div>
          <p>Welcome, {userName}!</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Welcome to the platform!</p>
      )}
    </div>
  );
}

export default SeekerHomePage;
