import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="about">
        <div className="inner-section">
          <h1 className="AboutTop">About Us</h1>
          <p className="text">
          Welcome to Conceilax, from now on your number one go to organization for all sorts of development. 
          We're dedicated to providing you the best development, with a focus 
          on dependability. customer service, and the best outcomes.
          </p>
          <p className="text">
          We're working to turn your ideas into reality. 
          We hope you enjoy our services as much as we enjoy offering them to you.
          </p>
          <div className="skills">
            <Link to="/contact-us"><button>Contact Us</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
