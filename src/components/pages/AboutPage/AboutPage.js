import React from "react";
import { Footer, Header, Team } from "../../organism";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="about-section col-12 col-lg-12 col-md-12 col-sm-12 text-center">
        <div className="about-detail col-12">
          <h1 className="about-title">About Dirghayu</h1>
          <p>
            Dirghayu is the website whose main purpose is to solve the issue of
            the blood management by the means of website. With the motto of “A
            pint can save many lives”, the core goal of this website is to
            manage and mitigate the bridge between the donor, blood banks and
            the receiver.
          </p>
          <p>
            The main motivation for this website has to be the MRR group in
            Facebook. We can see tons of blood requests by the people and we
            thought why do not we create a website that will hold collective
            information of blood banks that will show all the blood, plasma
            related data and people will not have to ring phone of every blood
            banks.
          </p>
        </div>
        <div className="team-section col-12">
          <h1 className="team-title">Our Team</h1>
          <div className="team-detail col-12 col-lg-12 col-md-12 col-sm-12 ">
            <div className="row">
              <Team />
              <Team />
              <Team />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AboutPage;
