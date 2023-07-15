import React from "react";
import { Link } from "react-router-dom";
import IG from "../assets/Instagram.svg";
import LinkedIn from "../assets/Linkedin.svg";
import Face from "../assets/Facebook.svg";
import twitter from "../assets/Vector.svg";

const TeamMembers = ({ image, name, position }) => {
  return (
    <div className="members">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="member">
        <p className="position">{name}</p>
        <p className="name">{position}</p>
        <div className="inside_member">
          <span className="mem_span"></span>
          <Link>
            <img src={IG} alt="" />
          </Link>
          <Link>
            <img src={LinkedIn} alt="" />
          </Link>
          <Link>
            <img src={Face} alt="" />
          </Link>
          <Link>
            <img src={twitter} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
