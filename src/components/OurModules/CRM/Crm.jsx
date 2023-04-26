import React from "react";
import BizClass from "./Crm.module.scss";
import Footer from "../../Footer/Footer";
import OurPresence from "../../Home/OurPresence/OurPresence";
import { ModulesSubHeader } from "../../Header/TopHeader/Header";

const Crm = () => {
  const CrmFeature = [
    {
      img: (
        <img
          src="https://clickdimensions.com/files/2021/07/4-Effective-Campaign-Automation-Ideas.gif"
          alt=""
        />
      ),
      span: "Effective Compaign Management",
      p: " BizNext CRM facilitates effective Campaign Management which gives you the power to track and calculate estimate of efforts in various events before lead conversion.",
    },
    {
      img: (
        <img
          src="https://cdn.dribbble.com/users/35810/screenshots/2057574/echo-animation.gif"
          alt=""
        />
      ),
      span: "Record and Track Leads",
      p: " BizNext CRM empowers you to record and track all leads. It helps you to keep all the relevant data such as the source, contact details, relation type and financial data.",
    },
    {
      img: (
        <img
          src="https://www.pskitservices.com/wp-content/uploads/2020/10/homepage-banner-animated-2.gif"
          alt=""
        />
      ),
      span: "Track, Control and Instruct your Sales Force",
      p: "It enables you to track, control and instruct your sales force to reach out to customers precisely, consistently and timely.",
    },
    {
      img: (
        <img
          src="https://univassist.com/wp-content/uploads/2020/11/UnivAssist-Event-Calender_LOOP.gif"
          alt=""
        />
      ),
      span: "Get Freedom to Plan your Activities",
      p: " It gives you the freedom to plan your activities related to BR, leads and opportunities that includes tasks, events, meetings, demos, proposals and so on.",
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
                  Customer Relation <span>Management</span>{" "}
                </h4>
                <p>
                  BizNext CRM module supports a complete outlook of your
                  company’s sales force, customers, suppliers, e-commerce and
                  all other sales related activities. It not only gives you the
                  flexibility to handle the complete process starting from lead
                  generation to purchase order, but also, tracks all
                  communications during the sales cycle. The CRM module from
                  BizNext works on a sole principle of keeping the customer at
                  the center of it.
                </p>
                <p>
                  BizNext CRM offers an administrator a regulatory system to
                  track, analyse, integrate and record all sales and marketing
                  data. As you have clear visibility of real-time data and
                  analytics, it enables you to stay ahead of the curve in taking
                  decisions, forecast business needs and roadmap precisely,
                  manage customer relationships, contracts and sales.
                </p>
              </div>
              <div className={BizClass.Img}>
                <div>
                  <img src="https://mybiznext.in/images/crm.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={BizClass.CrmFeature}>
            <h4>
              Crm <span>Feature</span>{" "}
            </h4>
            <div className={BizClass.Card_Container}>
              {CrmFeature.map((data, indx) => {
                return (
                  <>
                    <div className={BizClass.Card} key={indx}>
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
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Crm;
