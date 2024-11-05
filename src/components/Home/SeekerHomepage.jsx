import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

function SeekerHomePage() {
  return (
    <>
      <Header />
      <div className="homepage">
        <h1>Seeker Home Page</h1>
      </div>
    </>
  );
}

export default SeekerHomePage;
