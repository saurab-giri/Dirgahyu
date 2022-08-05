import React from "react";
import OrgImg from "../../utils/images/dirgahyu-xsmall.png";
import { MdLocationOn } from "react-icons/md";

export const BloodList = () => {
  return (
    <div className="blood-box col-12 col-lg-12 col-md-12 col-sm-12 d-flex">
      <div className="org-img col-1 col-lg-1 col-md-1 col-sm-1">
        <img src={OrgImg} />
      </div>
      <div className="org-location col-7 col-lg-7 col-md-7 col-sm-7">
        <p style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>
          Grande Hospital
        </p>
        <p style={{ margin: "0" }}>
          <MdLocationOn />
          Tokha, Kathmandu
        </p>
      </div>
      <div className="col-4 col-lg-4 col-md-4 col-sm-4 text-center">
        <p style={{ margin: "0", fontSize: "20px", fontWeight: "500" }}>
          Available Blood Types
        </p>
        <div className="available-blood col-12 d-flex gap-1">
          <div className="blood-grp col-3">A+ve</div>
          <div className="blood-grp col-3">B-ve</div>
          <div className="blood-grp col-3">O+ve</div>
          <div className="blood-grp col-3">A+ve</div>
        </div>
      </div>
    </div>
  );
};
