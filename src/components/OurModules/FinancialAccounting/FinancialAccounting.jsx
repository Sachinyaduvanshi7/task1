import React from "react";
import BizClass from "../CRM/Crm.module.scss";
import Footer from "../../Footer/Footer";
import OurPresence from "../../Home/OurPresence/OurPresence";
import { ModulesSubHeader } from "../../Header/TopHeader/Header";

const FinancialAccounting = () => {
  const CrmFeature = [
    {
      img: (
        <img
          src="https://clickdimensions.com/files/2021/07/4-Effective-Campaign-Automation-Ideas.gif"
          alt=""
        />
      ),
      span: "Accounting Solution with High End Flexibility",
      p: "Financial Accounting offers comprehensive audit reports based on real-time evaluation. You can handle multiple companies, units and divisions to meet your financial management goals.",
    },
    {
      img: (
        <img
          src="https://cdn.dribbble.com/users/35810/screenshots/2057574/echo-animation.gif"
          alt=""
        />
      ),
      span: "Payables Management",
      p: " Another key attribute of this module is the management of payables for storing data related to supplier accounting and bills for recording overheads of your creditors.",
    },
    {
      img: (
        <img
          src="https://www.pskitservices.com/wp-content/uploads/2020/10/homepage-banner-animated-2.gif"
          alt=""
        />
      ),
      span: "Extensive Operations to Regulate Overheads",
      p: "Financial accounting module also provides extensive operations to regulate organizational overheads accurately.",
    },
    {
      img: (
        <img
          src="https://univassist.com/wp-content/uploads/2020/11/UnivAssist-Event-Calender_LOOP.gif"
          alt=""
        />
      ),
      span: "Taxation Solutions",
      p: " BizNext FA module also provides Taxation solutions that incorporate features such as configuration of tax reports based on different countries.",
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
                  Financial <span>Accounting</span>{" "}
                </h4>
                <p>
                  An efficient financial management and planning is pillar for
                  sustenance of any organization. For an accelerated growth,
                  there is need to standardize the accounting parameters and
                  measure them systematically. With BizNext FA, a user is able
                  to achieve a comprehensively automated and well-synchronized
                  financial growth. With more transparency and access to right
                  information, the decision making is easy and it helps you
                  enhance financial cohesion and regulate liquidity efficiently.
                  BizNext FA assists in remodeling financial accounting projects
                  and use streamlined techniques to promote high-end financial
                  supply chain solution.
                </p>
                <p>
                  BizNext FA promises the flexibility of both cloud-based and
                  on-premises solution. With this module, you can manage your
                  accounting, receivables, payables and fixed assets. Moreover,
                  the module can adapt to local tax regulations of particular
                  geography. It offers support for organizations dealing in
                  multiple currencies and also supports compliance &
                  multi-statutory regulations. With this module, you are able to
                  configure management reports as well as financial reports.
                  With financial reports, your prime focus is on the management
                  of cash flow, balance sheet and P&L statements.
                </p>
              </div>
              <div className={BizClass.Img}>
                <div>
                  <img
                    src="https://mybiznext.in/images/financial-accounting.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={BizClass.CrmFeature}>
            <h4>
              Financial Accounting <span>Feature</span>{" "}
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FinancialAccounting;
