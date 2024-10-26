import React from "react";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/Images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
