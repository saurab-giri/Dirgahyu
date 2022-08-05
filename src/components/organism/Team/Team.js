import React from "react";
import TeamImg from "../../utils/images/dirgahyu-xsmall.png";

const Team = () => {
  return (
    <div className="team-box col-4 col-lg-4 col-md-4 col-sm-12 text-center">
      <img src={TeamImg} />
      <p style={{ margin: "0", fontWeight: "600" }}>Aayush Dip Giri</p>
      <p>Founder/CEO</p>
    </div>
  );
};

export default Team;
