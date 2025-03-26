import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const {loggedInUser} = useContext(UserContext)
  return (
    <div className="contact-page-container">
      <h1 className="contact-page-heading">Contact Us</h1>
      <h2 className="font-bold text-2xl text-gray-500 text-center m-4 p-4">LoggedInUser: {loggedInUser} </h2>
      <p className="contact-page-description">
        Have any questions? We'd love to hear from you!
      </p>

      <form className="contact-page-form">
        <label className="contact-page-label">Name:</label>
        <input type="text" className="contact-page-input" placeholder="Your Name" />

        <label className="contact-page-label">Email:</label>
        <input type="email" className="contact-page-input" placeholder="Your Email" />

        <label className="contact-page-label">Message:</label>
        <textarea className="contact-page-textarea" placeholder="Your Message"></textarea>

        <button type="submit" className="contact-page-button">Send</button>
      </form>
    </div>
  );
};

export default Contact;