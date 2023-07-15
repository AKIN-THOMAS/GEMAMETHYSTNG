import React from "react";
import img from "../assets/standard_img.svg";
import bulb from "../assets/bulb.svg";
import staff from "../assets/staff.svg";
import completed from "../assets/completed.svg";
import service from "../assets/service_provided.svg";
import happy from "../assets/Happy_customer.svg";

const Standards = () => {
  return (
    <section>
      <div className="standard_section">
        <div className="standard_img">
          <h1>
            <img src={img} alt="" />
          </h1>
        </div>
        <div className="standard_msg">
          <h1>Highest Creative Standards</h1>
          <p>
            To be world leaders in consultancy through creating awareness and
            increasing a business market share by rebranding existing brands and
            providing managerial and consultancy service in line with our
            existing ever evolving and innovative branding strategies
          </p>
        </div>
      </div>
      <div className="successes">
        <div className="services">
          <div className="service">
            <div className="inside-standard">
              <div>
                <img src={bulb} alt="" />
              </div>
              <div className="inside-standard-text">
                <p className="not-bold">Year In Business</p>
                <p className="bold">3 Yrs</p>
              </div>
            </div>
            <div className="inside-standard">
              <div>
                <img src={staff} alt="" />
              </div>
              <div className="inside-standard-text">
                <p className="not-bold">Our Staff</p>
                <p className="bold">50</p>
              </div>
            </div>
          </div>
          <span className="span"></span>
          <div className="service">
            <div className="inside-standard">
              <div>
                <img src={completed} alt="" />
              </div>
              <div className="inside-standard-text">
                <p className="not-bold">Completed project </p>
                <p className="bold">2</p>
              </div>
            </div>
            <div className="inside-standard">
              <div>
                <img src={service} alt="" />
              </div>
              <div className="inside-standard-text">
                <p className="not-bold">Service provided</p>
                <p className="bold">2</p>
              </div>
            </div>
          </div>
          <span className="span"></span>
          <div className="service">
            <div className="inside-standard">
              <div>
                <img src={happy} alt="" />
              </div>
              <div className="inside-standard-text">
                <p className="not-bold">Happy Customer</p>
                <p className="bold">500+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;
