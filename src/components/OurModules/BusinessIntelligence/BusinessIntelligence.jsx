import React from "react";
import BizClass from "../CRM/Crm.module.scss";
import Footer from "../../Footer/Footer";
import OurPresence from "../../Home/OurPresence/OurPresence";
import { ModulesSubHeader } from "../../Header/TopHeader/Header";

const BusinessIntelligence = () => {
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
                  Business Intelligence And <span>Analytics</span>{" "}
                </h4>
                <p>
                  BizNext BI is powerful tool, engineered to deliver accurate
                  predictive analysis that gives insight into your past trends
                  and helps you forecast and plan your business. BizNext BI is
                  designed to build and generate powerful reports and dashboards
                  with ease. It is simple, secure, scalable and self-serving BI
                  tool. It is developed with distinctive features to cater to
                  the different set of end users; Administrators, Report
                  Designers and Business Users. The system is empowered with a
                  drag and drop UI which lets you build/ customize the desired
                  report based on business needs. It gives you multi-dimensional
                  view of data and brings the insight into the business even
                  without switching to multiple screens. BizNext BI converges
                  all relevant data from multiple systems and reflects them into
                  single report or dashboard. The multi-layer architecture
                  ensures that the data is 100% secure on all the devices.
                </p>
              </div>
              <div className={BizClass.Img}>
                <div>
                  <img
                    src="https://mybiznext.in/images/business-intelligence-and-analytics.jpg"
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

export default BusinessIntelligence;
