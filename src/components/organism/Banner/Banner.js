import React from "react";
import { CustomButton } from "../../molecules";
import Donate from "../../utils/images/donate.jpeg";
import { FaLocationArrow } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { BsArrowReturnRight } from "react-icons/bs";

export const Banner = () => {
  return (
    <div className="banner col-12 col-lg-12 col-md-12 col-sm-12 d-flex">
      <div className="left-banner col-6 col-lg-6 col-md-6 col-sm-6">
        <h1 className="banner-title">
          We are <span style={{ color: "#e2402d" }}>DIRGAHYU...</span>
        </h1>
        <p style={{ color: "#545454", fontSize: "30px" }}>
          A pint can save many lives
        </p>
        <div className="banner-button col-12 d-flex">
          <div className=" col-6">
            <CustomButton
              title="Request Blood"
              background="#e2402d"
              color="#fff"
              padding="5px 20px"
              border="none"
              weight="600"
            />
          </div>
          <div className=" col-6">
            <CustomButton
              title="Donate Blood"
              background="#e2402d"
              color="#fff"
              padding="5px 20px"
              border="none"
              weight="600"
            />
          </div>
        </div>
        <div className="banner-button col-12 d-flex">
          <div className=" col-6">
            <CustomButton
              title="Blood Banks Near Me"
              background="#fff"
              color="#000"
              padding="0"
              border="none"
              icon={
                <FaLocationArrow
                  style={{ color: "#e2402d", marginRight: "5px" }}
                />
              }
            />
          </div>
          <div className=" col-6">
            <CustomButton
              title="Live Request"
              background="#fff"
              color="#000"
              padding="0"
              border="none"
              icon={<GoPrimitiveDot style={{ color: "#e2402d" }} />}
            />
          </div>
        </div>
        <div className="banner-search col-12">
          <p>Search Blood</p>
          <form>
            <div className="search col-12 gap-2  d-flex">
              <div className="col-3 ">
                <select
                  className="form-select form-select-sm"
                  aria-label="Default select example"
                >
                  <option selected>Select Blood</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-2">
                <select
                  className="form-select form-select-sm"
                  aria-label="Default select example"
                >
                  <option value="1">+ve</option>
                  <option value="2">-ve</option>
                </select>
              </div>
              <div className="col-3">
                <select
                  className="form-select form-select-sm"
                  aria-label="Default select example"
                >
                  <option selected>Location</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-4">
                <CustomButton
                  title="Search"
                  background="#E2E2E2"
                  color="#000"
                  padding="5px 10px"
                  border="none"
                  icon={<BsArrowReturnRight style={{ color: "#000" }} />}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="right-banner col-6 col-lg-6 col-md-6 col-sm-6">
        <img src={Donate} alt="donate" className="banner-img" />
      </div>
    </div>
  );
};
