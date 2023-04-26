import React from "react";
import BizClass from "./OurPresence.module.scss";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const OurPresence = () => {
  return (
    <div className={BizClass.OurPresence}>
      <div>
        {" "}
        <h4>
          Our <span>Presence</span>{" "}
        </h4>
        <div className={BizClass.Icon}>
          <FaFacebookSquare />
          <FaLinkedin />
          <FaTwitterSquare />
        </div>
      </div>
      <div className={BizClass.Countries}>
        <div>
          <img
            src="https://mybiznext.in/images/flag-of-india.jpg
"
            alt=""
          />
          <span>INDIA</span>
        </div>
        <div>
          {" "}
          <img src="https://mybiznext.in/images/flag-of-usa.png" alt="" />
          <span>U.S.A</span>
        </div>
        <div>
          {" "}
          <img src="	https://mybiznext.in/images/flag-og-africa.png" alt="" />
          <span>AFRICA</span>
        </div>
      </div>
    </div>
  );
};

export default OurPresence;
