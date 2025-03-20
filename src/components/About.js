import React from "react";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-page-container">
      <h1 className="about-page-title">About Us</h1>
      <p className="about-page-description">
        Welcome to our restaurant listing app! We fetch data from the Swiggy API and display a list of amazing restaurants for you to explore.
      </p>
    </div>
  );
};

export default About;
