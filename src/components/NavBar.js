import React, { useState } from "react";
import Logo from "../assets/gemamethystLogo.svg";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import { BsListNested } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [
    {
      name: "Home",
      path: "",
    },
    {
      name: "About",
      path: "",
    },
    {
      name: "Pricing",
      path: "",
    },
    {
      name: "Portfolio",
      path: "",
    },
    {
      name: "Blog",
      path: "",
    },
    {
      name: "Contact",
      path: "",
    },
  ];

  const renderLinks = navLinks.map((value, index) => {
    return (
      <ul>
        <li>
          <Link to={value.path} key={index}>
            {value.name}
          </Link>
        </li>
      </ul>
    );
  });

  return (
    <>
      <header>
        <div>
          <a href="/">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className={`nav2 ${isMenuOpen ? "open" : ""}`}>
          <div className="links">{renderLinks}</div>
          <div>
            <button className="printshop">Printshop</button>
          </div>
        </div>
      </header>
      {isMenuOpen ? (
        <>
          <button onClick={toggleNav} className="menu-close">
            <CgClose />
          </button>
        </>
      ) : (
        <>
          <button onClick={toggleNav} className="menu-open">
            <BsListNested />
          </button>
        </>
      )}
    </>
  );
};

export default NavBar;
