import React from "react";
import { CustomButton } from "../../molecules";

const DonateSection = () => {
  return (
    <div className="donate-section col-12 col-lg-12 col-md-12 col-sm-12 d-flex">
      <div className="col-10 col-lg-10 col-md-10 col-sm-10">
        <p style={{ margin: "0", fontSize: "24px", fontWeight: "500" }}>
          Donate to save life &quot;A pint can save many lives&quot;
        </p>
      </div>
      <div className="col-2 col-lg-2 col-md-2 col-sm-2">
        <CustomButton
          title="Donate Blood"
          background="#fff"
          color="#e2402d"
          padding="5px 20px"
          border="none"
          weight="700"
        />
      </div>
    </div>
  );
};

export default DonateSection;
