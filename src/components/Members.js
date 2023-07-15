import React from "react";
import TeamMembers from "./TeamMembers";
import CEO from "../assets/CEO.svg";
import thinker from "../assets/thinker.svg";
import founder from "../assets/founder.svg";
import designer from "../assets/graphics.svg";
import brand from "../assets/brand.svg";

const Members = () => {
  return (
    <section>
      <div className="members_header">
        <span className="team_span">
          <span className="_span"></span>
          <p>Our Team</p>
        </span>
        <h1>Meet With Our Team Members</h1>
      </div>
      <div className="team">
        <div className="team_members">
          <TeamMembers image={CEO} name={"Otuene Hepzibah"} position={"CEO"} />
          <TeamMembers
            image={thinker}
            name={"Asebieko Blessing"}
            position={"Founder and Thinker"}
          />
          <TeamMembers
            image={founder}
            name={"Asebieko Blessing"}
            position={"Founder and Thinker"}
          />
          <TeamMembers
            image={brand}
            name={"Zibiri-Esakome Th..."}
            position={"Brand Manager"}
          />
          <TeamMembers
            image={designer}
            name={"Oleabhiele-Palma D.."}
            position={"Grapics Designer"}
          />
          <TeamMembers
            image={thinker}
            name={"Asebieko Blessing"}
            position={"Founder and Thinker"}
          />
        </div>
      </div>
    </section>
  );
};

export default Members;
