import React from "react";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
    
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src="" alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Indian verity foods #1 Quality foods
          </h1>
          <p className="primary-text">
          adipisicing elit. Libero eum consequatur recusandae soluta saepe commodi nisi, itaque eveniet tenetur voluptate modi, ullam ex provident quis similique quod, rem unde illum!
            
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
