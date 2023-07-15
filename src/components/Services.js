import React from "react";
import digitalProducts from "../assets/digital_products.svg";
import appDev from "../assets/application_dev.svg";
import engDesign from "../assets/engineering_designs.svg";
import online from "../assets/online_marketing.svg";
import webDev from "../assets/web_dev.svg";
import graphics from "../assets/graphics_designs.svg";

const Services = () => {
  return (
    <section className="service_section">
      <div>
        <div>
          <h3 className="service_text">Services We provide</h3>
        </div>
        <div className="services">
          <div className="service">
            <div className="inside-service">
              <img src={digitalProducts} alt="digital product" />
              <p>DIGITAL PRODUCTS</p>
            </div>
            <div className="inside-service">
              <img src={appDev} alt="digital product" />
              <p>APPLICATION DEVELOPMENT</p>
            </div>
          </div>
          <span className="span"></span>
          <div className="service">
            <div className="inside-service">
              <img src={engDesign} alt="digital product" />
              <p>ENGINEERING DESIGN</p>
            </div>
            <div className="inside-service">
              <img src={online} alt="digital product" />
              <p>ONLINE MARKETING</p>
            </div>
          </div>
          <span className="span"></span>
          <div className="service">
            <div className="inside-service">
              <img src={webDev} alt="digital product" />
              <p>WEB DEVELOPMENT</p>
            </div>
            <div className="inside-service">
              <img src={graphics} alt="digital product" />
              <p>GRAPHIC DESIGN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
