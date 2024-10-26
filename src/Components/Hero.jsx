import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-containerconetnt">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-containerbtn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On.</p>
          <div className="hero-containerbrand">
            <img src="/Images/flipkart.png" alt="flipkart"></img>
            <img src="/Images/amazon.png" alt="amazon"></img>
          </div>
        </div>
      </div>
      <div className="hero-containerimage"></div>
      <img src="/Images/shoe_image.png" alt="shoe"></img>
    </div>
  );
};

export default HeroSection;
