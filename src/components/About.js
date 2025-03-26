import React, { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  const {loggedInUser} = useContext(UserContext)
  return (
    <div className="about-page-container">
      <h1 className="about-page-title">About Us</h1>
      <h2 className="font-bold text-2xl text-purple-300 text-center m-4 p-4">LoggedInUser: {loggedInUser} </h2>
      <p className="about-page-description">
        Welcome to our restaurant listing app! We fetch data from the Swiggy API and display a list of amazing restaurants for you to explore.
      </p>
    </div>
  );
};

export default About;
