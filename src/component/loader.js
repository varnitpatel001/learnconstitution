import React from "react";
import "./loader.css"
import loaderImage from "./img/iconlaw.png"; // Adjust the path to your image

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loaderImage} alt="Loading..." className="loader-image" />
    </div>
  );
};

export default Loader;
