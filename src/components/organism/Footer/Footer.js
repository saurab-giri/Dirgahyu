import React from "react";
import FooterImg from "../../utils/images/dirgahyu-xsmall.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer col-12  col-lg-12 col-md-12 col-sm-12 d-flex">
      <div className="left-footer col-4 col-lg-4 col-md-4 col-sm-4">
        <h3>Contact Information</h3>
        <p style={{ margin: "0" }}>Email: info@dirgahyu.com</p>
        <p>Phone: +977-984112345</p>
        <h3>Get connected with us:</h3>
        <div class="social-icon">
          <FaFacebookSquare
            style={{ color: "#e2402d", fontSize: "30px", marginRight: "10px" }}
          />

          <FaTwitterSquare
            style={{
              color: "#e2402d",
              fontSize: "30px",
              marginRight: "10px",
            }}
          />
          <FaYoutubeSquare
            style={{ color: "#e2402d", fontSize: "30px", marginRight: "10px" }}
          />
          <FaLinkedin
            style={{ color: "#e2402d", fontSize: "30px", marginRight: "10px" }}
          />
        </div>
      </div>
      <div className="middle-footer col-4 col-lg-4 col-md-4 col-sm-4"></div>
      <div className="right-footer text-center col-4 col-lg-4 col-md-4 col-sm-4">
        <img src={FooterImg} />
        <h2>Dirghayu Foundation</h2>
        <p>Ramkot, Kathmandu</p>
      </div>
    </div>
  );
};
