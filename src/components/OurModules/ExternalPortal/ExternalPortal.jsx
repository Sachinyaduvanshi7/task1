import React from "react";
// import BizClass from "../Crm.module.scss";
import Footer from "../../Footer/Footer";
import OurPresence from "../../Home/OurPresence/OurPresence";
import BizClass from "../CRM/Crm.module.scss";
import { ModulesSubHeader } from "../../Header/TopHeader/Header";

const ExternalPortal = () => {
  const Feature = [
    {
      img: (
        <img
          src="https://clickdimensions.com/files/2021/07/4-Effective-Campaign-Automation-Ideas.gif"
          alt=""
        />
      ),
      p: "BizNext Workflow Management lets you manage and configure numerous documents for individual processes simultaneously.",
    },
    {
      img: (
        <img
          src="https://cdn.dribbble.com/users/35810/screenshots/2057574/echo-animation.gif"
          alt=""
        />
      ),
      p: "This module lets you define multiple users as approvers, reviewers and creators.",
    },
    {
      img: (
        <img
          src="https://www.pskitservices.com/wp-content/uploads/2020/10/homepage-banner-animated-2.gif"
          alt=""
        />
      ),
      p: "This module gives you the flexibility to create ‘conditional work flow’ to ensure that rules and compliances are implemented in an organization.",
    },
    {
      img: (
        <img
          src="https://univassist.com/wp-content/uploads/2020/11/UnivAssist-Event-Calender_LOOP.gif"
          alt=""
        />
      ),
      p: "This module also offers audit trails for analyzing the problems and checking the security breach in a work flow. The solution ensures accountability as well.",
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
                External Portal<span> (Customer & Supply)</span>{" "}
                </h4>
                <p>
                BizNext external portal is designed to accelerate the flow of information between company and suppliers/customers. The intent of the supplier portal is to engage the suppliers in activities such as invoice submission, PO delivery, Payment Information, Compliances etc. which eventually reduces the turnaround time. The customer portal is designed to extend the customer support for resolving the issues promptly.
                </p>
                <p>
                BizNext offer the solution on web based platform where suppliers and customers can register in order to access the portal. The registered members are able to access information in real time. The portal allows the customers to track down updates related to due payments, generate sale return challan, monitor their account statements, generate sales orders and also check status of already-generated orders. The Suppliers, on other hand, get purchase order view and update privileges. They also have option to upload material dispatch information and get an update on receiving at company warehouse.
                </p>
              </div>
              <div className={BizClass.Img}>
                <div>
                  <img
                    src="https://mybiznext.in/images/external-portal.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <OurPresence />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ExternalPortal;
