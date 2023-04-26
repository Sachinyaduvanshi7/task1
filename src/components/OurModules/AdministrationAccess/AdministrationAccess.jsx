import React from "react";
// import BizClass from "../Crm.module.scss";
import Footer from "../../Footer/Footer";
import OurPresence from "../../Home/OurPresence/OurPresence";
import BizClass from "../CRM/Crm.module.scss";
import { ModulesSubHeader } from "../../Header/TopHeader/Header";

const AdministrationAcess = () => {
  const Feature = [
    {
      img: (
        <img
          src="https://clickdimensions.com/files/2021/07/4-Effective-Campaign-Automation-Ideas.gif"
          alt=""
        />
      ),
      span: "Profile Management: Static and Dynamic.",
    },
    {
      img: (
        <img
          src="https://cdn.dribbble.com/users/35810/screenshots/2057574/echo-animation.gif"
          alt=""
        />
      ),
      span: "Access Control: IP, MAC address and mobile device.",
    },
    {
      img: (
        <img
          src="https://www.pskitservices.com/wp-content/uploads/2020/10/homepage-banner-animated-2.gif"
          alt=""
        />
      ),
      span: "Audit trail of every transactional activity.",
    },
  ];
  return (
    <div className="Biz_PageStart">
      <div className={BizClass.Page_Section}>
        <div className={BizClass.SubHeader}>
          <ModulesSubHeader />
        </div>
        <div className={BizClass.Section}>
          <div className={BizClass.Container}>
            <img
              src="https://img.freepik.com/free-vector/background-gradient-line-digital-abstract_483537-2921.jpg"
              alt=""
            />
            <div className={BizClass.ColourFull}></div>
            <div className={BizClass.Top_Section}>
              <div className={BizClass.Content}>
                <h4>
                  Administration And Acess<span> Management</span>{" "}
                </h4>
                <p>
                  This module allows administrator to control accessibility of
                  BizNext on multiple devices and locations. This also controls
                  access of each transactional and reporting activities. The
                  module has the features of creating users, assignment of menu
                  and action rights. Access Management allows administrator to
                  give control of inventory management at warehouse and store
                  level. This also manages the access control of financial
                  activities for particular accounting branch.
                </p>
                <p>
                  BizNext AM module has the feature of profile management where
                  set of activities and rights can be assigned to a profile and
                  same profile can be extended to multiple users of application.
                  Any change in activities and rights of particular profile will
                  affect the assigned users immediately.
                </p>
              </div>
              <div className={BizClass.Img}>
                <div>
                  <img
                    src="https://mybiznext.in/images/administration-and-access-management.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={BizClass.CrmFeature}>
            <h4>
            Administration Aand Access<span> Feature</span>{" "}
            </h4>
            <div
              className={BizClass.Card_Container}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {Feature.map((data, indx) => {
                return (
                  <>
                    <div
                      className={BizClass.Card}
                      style={{ width: "400px" }}
                      key={indx}
                    >
                      <div className={BizClass.Data_Coantainer}>
                        <p>{data.p}</p>
                      </div>
                      <div className={BizClass.Card_Data}>
                        <div className={BizClass.Back_img}></div>
                        {data.img}
                        <span>{data.span}</span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <OurPresence />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdministrationAcess;
