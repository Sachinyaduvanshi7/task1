import React from "react";
import OurPresence from "../OurPresence/OurPresence";
import Footer from "../../Footer/Footer";
import BizClass from "./OurPartners.module.scss";

const OurPartners = () => {
  const Partners = [
    {
      img: (
        <img
          src="	https://mybiznext.in/images/client/partner_logo_01.png"
          alt=""
        />
      ),
      P: "Nandini Infosys emerged from an existing industrial house into manufacturing of Edible oil with a plan to diversify into IT business. Started in 2000 partnering with...",
      Head: "NANDINI INFOSYS",
      button: "View Website",
    },
    {
      img: (
        <img
          src="https://mybiznext.in/images/client/partner_logo_02.png"
          alt=""
        />
      ),
      P: "WORLD1 SOLUTIONS (“World1”) is a leading professional services, international trade i.e. (Import/Export) and Skill  Consultancy Company focused....",
      Head: "WORLD1 SOLUTIONS",
      button: "View Website",
    },
    {
      img: (
        <img
          src="	https://mybiznext.in/images/client/partner_logo_05.png"
          alt=""
        />
      ),
      P: "We believe in the power of technology to make business owners efficient, empowered and happier, so they can focus on what matters most for their business. With that belief, we have put Business owners at the centre of our Software Development. We have dedicated last 6+ years to make Technology more useful and beneficial for small and medium businesses.....",
      Head: "PRERNA INFOTECH",
      button: "View Website",
    },
    {
      img: (
        <img
          src="	https://mybiznext.in/images/client/partner_logo_04.png                "
          alt=""
        />
      ),
      P: "HIM PRODUCTIVE INSTITUTE OF EDUCATION was established on March 2003. The Institute of Education has evolved into a model-training center churning out quality accountants to cater to the trade & commerce sector of our economy",
      Head: "H.P.I.E",
      button: "View Website",
    },
    {
      img: (
        <img
          src="https://mybiznext.in/images/client/partner_logo_03.png"
          alt=""
        />
      ),
      P: "Focus Infosoft Group is an innovative technology services and solutions provider benefiting the customers by creating new or improving the existing systems with the next-generation technology....",
      Head: "FOCUS INFOSOFT",
      button: "View Website",
    },
    {
      img: (
        <img
          src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-editable-green-loading-bar-screen-png-svg-cdr-png-image_6023447.jpg"
          alt=""
        />
      ),
      You: "You Might As Well Be Awesome !",
    },
  ];
  return (
    <div className={BizClass.OurPartners}>
      <div className={BizClass.Top_Section}>
        <div>
          <h4>
            Our Valuable <span>Partner's</span>{" "}
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
            src="https://img.freepik.com/premium-vector/partners-shaking-hands-illustration_179970-795.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
      <div className={BizClass.Conatiner}>
        <div>
          {Partners.map((data, indx) => {
            return (
              <>
                <div className={BizClass.Card} key={indx}>
                  <div className={BizClass.Data_Coantainer}>
                    <span>{data.Head}</span>
                    <p>{data.P}</p>
                    <button>{data.button}</button>
                    <h2>{data.You}</h2>
                  </div>
                  <div className={BizClass.img}>{data.img}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className={BizClass.Partner_Form}>
        <div className={BizClass.Img}>
          <h4>Become A Partner</h4>
          <div className={BizClass.Form}>
            <h5>Looking for an excellent Partnership ?</h5>
            <div className={BizClass.Form_Content}>
              <div>
                <label htmlFor="#"> First Name</label>
                <input type="text" />
              </div>
              <div>
                <div>
                  <label htmlFor="#"> Company Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="#"> No. Of Employees </label>
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
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurPresence />
      <Footer />
    </div>
  );
};

export default OurPartners;
