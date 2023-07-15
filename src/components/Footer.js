import React from "react";
import footer_logo from "../assets/footer_logo.svg";
import facebook from "../assets/footer_facebook.svg";
import twitter from "../assets/footer_twitter.svg";
import telegram from "../assets/footer_telegram.svg";
import instagram from "../assets/footer_instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_side1">
        <div>
          <img src={footer_logo} alt="" />
          <p>
            Far Far Away, Behind The Word Mountains, Far From The Countries,
            Steady On The Internet That’s Where Our Heart Lies.
          </p>
          <div className="one1">
            <div className="one_socials">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={telegram} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div className="copy1">
            <span className="copyright1">
              Copyright 2023 All Rights Reserved
            </span>
          </div>
        </div>
      </div>
      <div className="footer_side2">
        <div className="_side1">
          <div className="one">
            <div>
              <p>Follow us</p>
            </div>
            <div className="one_socials">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={telegram} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div className="two">
            <div>
              <p className="subscribe">Subscribe</p>
            </div>
            <div>
              <p className="subscribe_text">
                Subscribe to stay tuned for latest updates. Let's do it!{" "}
              </p>
            </div>
            <div className="email">
              <input placeholder="Enter your Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <span className="footer_span"></span>
        <div className="_side2">
          <div>
            <p className="title">Explore</p>
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
            <li>Blog</li>
          </div>
          <div>
            <p className="title">Info</p>
            <li>Join Us</li>
            <li>Privacy & Policy</li>
            <li>Terms & Conditions</li>
          </div>
          <div>
            <p className="title">Links</p>
            <li>Printshops</li>
          </div>
          <div>
            <p className="title">Company</p>
            <li>About Us</li>
            <li>Contact Us</li>
          </div>
        </div>
        <div className="copy">
          <span className="copyright">Copyright 2023 All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
