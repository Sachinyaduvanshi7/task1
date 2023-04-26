import React from "react";
import BizClass from "./ContactUs.module.scss";
import OurPresence from "../OurPresence/OurPresence";
import Footer from "../../Footer/Footer";
const ContactUs = () => {
  return (
    <div className={BizClass.ContactUs_Page}>
      <div className={BizClass.Top_Section}>
        <div>
          <h4>
            CONTACT US <span></span>{" "}
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Suscipit iste doloremque fugit, architecto nostrum repudiandae
            voluptas possimus. Quo, iusto itaque.
          </p>
          <button>Learn More</button>
        </div>
        <div>
          <img
            src="https://nubaxdatalabs.com/images/about-us/contact_us.png"
            alt=""
          />
        </div>
      </div>
      <div className={BizClass.Country_Div}>
        <div className={BizClass.Container}>
          <div>
            <img
              src="https://mybiznext.in/images/flag-of-india.jpg
"
              alt=""
            />
            <h4>GURUGRAM (HARYANA)</h4>
            <span>
              {" "}
              509, Fifth Floor, JMD Pacific Square <br /> Sector-15, Gurugram,
              122001
            </span>
            <p>
              <strong>Ph: </strong>
              +91 95 41 41 41 55
            </p>
            <p>
              <strong>Email: </strong> marketing@3slogics.com
            </p>
          </div>
          <div>
            <img
              src="https://mybiznext.in/images/flag-of-india.jpg
"
              alt=""
            />
            <h4>Bangalore (Karnataka)</h4>
            <span>
              {" "}
              No.56-6B, Palace Rd, Abshot Layout,
              <br /> Vasanth Nagar, Bengaluru, Karnataka 560052
            </span>
            <p>
              <strong>Ph: </strong>+ 1-800-222-000
            </p>
            <p>
              <strong>Email: </strong>marketing@3slogics.com
            </p>
          </div>
          <div>
            <img src="	https://mybiznext.in/images/flag-og-africa.png" alt="" />

            <h4>AFRICA (MAURITIUS)</h4>
            <span>
              {" "}
              JGM GROUPS LTD. <br /> MAHATMA GANDHI AVENUE, <br /> TELFAIR, MOKA
              80829
            </span>
            <p>
              <strong>Ph: </strong>
              +230 59707940
            </p>
            <p>
              <strong>Email: </strong>sales@jgmgroups.com
            </p>
          </div>
          <div>
            <img src="https://mybiznext.in/images/flag-of-usa.png" alt="" />
            <h4>USA (New Jersey)</h4>
            <span>
              {" "}
              18 Sunshine Ln, Edison,
              <br /> New Jersey 08820
            </span>
            <p>
              <strong>Ph: </strong>
              +1-732-882-9409
            </p>
            <p>
              <strong>Email: </strong>marketing@3slogics.com
            </p>
          </div>
        </div>
      </div>
      <div className={BizClass.Conatct_Form_Section}>
        <div className={BizClass.Form}>
          <span>Fill out the form and we'll be in touch soon!</span>
          <h4>Ready to request a quote?</h4>
          <div className={BizClass.Form_Content}>
            <div>
              <div>
                <label htmlFor="#"> Name</label>
                <input type="text" />
              </div>

              <div>
                <label htmlFor="#"> Company Name</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="#"> Email ID*</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="#">Phone No.</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <label htmlFor="#"> Your Message</label>
              <textarea name="" id=""></textarea>
            </div>
            <div>
              <button>SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
      <OurPresence/>
      <Footer/>
    </div>
  );
};

export default ContactUs;
