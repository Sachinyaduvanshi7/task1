import React from "react";
// import BizClass from "../Crm.module.scss";
import Footer from "../../Footer/Footer";
import OurPresence from "../../Home/OurPresence/OurPresence";
import BizClass from "../CRM/Crm.module.scss";
import { ModulesSubHeader } from "../../Header/TopHeader/Header";

const WorkFlowManagement = () => {
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
      p: " This module also offers audit trails for analyzing the problems and checking the security breach in a work flow. The solution ensures accountability as well.",
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
                  Work Flow<span> Management</span>{" "}
                </h4>
                <p>
                  Manufacturing Management defines end to end product
                  manufacturing. The process starts with the layout of the
                  product and the specifications of the material utilized. It is
                  then followed by the production plan and material planning.
                  With the help of manufacturing module, a company can
                  streamline the production process by automating the
                  information flow from various operations
                </p>
                <p>
                  This process initiates from the sales plan/budget covering up
                  a number of operations such as availability of Inventory of
                  material, Purchase of Material, Raw Material planning, machine
                  planning and Human Resource (HR). BizNext Manufacturing
                  Management incorporates utilization of manpower and machine
                  for preparation of production plan, lead-time management of
                  suppliers, management of back orders and Material Resource
                  Planning (MRP).
                </p>
              </div>
              <div className={BizClass.Img}>
                <div>
                  <img
                    src="		https://mybiznext.in/images/work-flow-management.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={BizClass.CrmFeature}>
            <h4>
              Work Flow<span> Feature</span>{" "}
            </h4>
            <div className={BizClass.Card_Container}>
              {Feature.map((data, indx) => {
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default WorkFlowManagement;
