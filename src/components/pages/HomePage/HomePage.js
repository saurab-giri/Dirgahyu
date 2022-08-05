import React from "react";
import {
  Banner,
  BloodList,
  DonateSection,
  Footer,
  Header,
} from "../../organism";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="blood-section col-12 col-lg-12 col-md-12 col-sm-12 d-flex">
        <div className="col-9 col-lg-9 col-md-9">
          <BloodList />
          <BloodList />
        </div>
        <div className="col-3 col-lg-3 col-md-3  d-flex justify-content-center align-items-center text-center">
          <div className="check-blood-btn d-flex justify-content-center align-items-center">
            <p style={{ margin: "0", fontSize: "20px", fontWeight: "600" }}>
              Check Blood Availability
            </p>
            <div>
              <BsFillArrowRightCircleFill
                style={{ color: "#e2402d", fontSize: "40px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <DonateSection />

      <Footer />
    </>
  );
};
