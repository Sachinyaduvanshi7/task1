import React from "react";
// import BizClass from "../Crm.module.scss";
import Footer from "../../Footer/Footer";
import OurPresence from "../../Home/OurPresence/OurPresence";
import BizClass from "../CRM/Crm.module.scss";
import { ModulesSubHeader } from "../../Header/TopHeader/Header";

const SalesManagement = () => {
  const Feature = [
    {
      img: (
        <img
          src="https://clickdimensions.com/files/2021/07/4-Effective-Campaign-Automation-Ideas.gif"
          alt=""
        />
      ),
      span:"Simplified Sales Configuration",
      p: "BizNext Sales Management has the capabilities to configure multiple documents, each having different settings like price list, item types, payment methods, edit rights to reviewer and approver, configuration of sales based on item, code or SKU.",
    },
    {
      img: (
        <img
          src="https://cdn.dribbble.com/users/35810/screenshots/2057574/echo-animation.gif"
          alt=""
        />
      ),
      span:"Configure Price List",
      p: "BizNext Sales Management gives you the ability to define price list at warehouse, store and counter level. It can also define a specific price list for specific customers and for grouped customers as well.",
    },
    {
      img: (
        <img
          src="https://www.pskitservices.com/wp-content/uploads/2020/10/homepage-banner-animated-2.gif"
          alt=""
        />
      ),
      span:"Multiple Sales Organizations",
      p: "BizNext Sales Management has the flexibility to have multiple sales organization channels within a company. ",
    }
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
                  Sales<span> Management</span>{" "}
                </h4>
                <p>
                  Sales Management is the business disciple that focusses on the
                  company’s sales operations. It is one of the most important
                  business functions as it is profit center of any organization.
                </p>
                <p>
                  BizNext Sales Management is a comprehensive module that
                  undertakes the aspects starting from business planning to
                  analysis of variance between planned and actual sales. The
                  strategies that are implemented by business units or sales
                  organization differ based on the sales channels (distribution,
                  retail and ecommerce) for their products or services. These
                  strategies too have to follow policies depending on cost and
                  discount. BizNext has been designed to cater all these needs.
                  The module helps you create sales documents, configure them
                  and to streamline the Sales Order Management through “Document
                  Workflow”. These features are available on mobile platform too
                  for convenience of sales team to place the order or process
                  the request.
                </p>
              </div>
              <div className={BizClass.Img}>
                <div>
                  <img
                    src="	https://mybiznext.in/images/sales-management.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={BizClass.CrmFeature}>
            <h4>
              Sales Management <span> Feature</span>{" "}
            </h4>
            <div className={BizClass.Card_Container} style={{display:"flex", justifyContent:"space-between"}}>
              {Feature.map((data, indx) => {
                return (
                  <>
                    <div className={BizClass.Card} style={{width:"400px"}} key={indx}>
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

export default SalesManagement;
