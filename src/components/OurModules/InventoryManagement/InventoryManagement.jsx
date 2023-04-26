import React from "react";
// import BizClass from "../Crm.module.scss";
import Footer from "../../Footer/Footer";
import OurPresence from "../../Home/OurPresence/OurPresence";
import BizClass from "../CRM/Crm.module.scss";
import { ModulesSubHeader } from "../../Header/TopHeader/Header";

const InventoryManagement = () => {
  const Feature = [
    {
      img: <img src="https://clickdimensions.com/files/2021/07/4-Effective-Campaign-Automation-Ideas.gif" alt="" />,
      span: "Configure Item Codes and Variants",
      p: " BizNext IM is designed in a manner that lets you configure Item Codes and Variants. It gives you flexibility to create any number of attributes.",
    },
    {
      img: (
        <img
          src="https://cdn.dribbble.com/users/35810/screenshots/2057574/echo-animation.gif"
          alt=""
        />
      ),
      span: "Manage Batch Numbers for items",
      p: " It gives the flexibility to either use the supplier’s batch number or system generated “BN Lot No” for all incoming material used for purchase or production.",
    },
    {
      img: (
        <img
          src="https://www.pskitservices.com/wp-content/uploads/2020/10/homepage-banner-animated-2.gif"
          alt=""
        />
      ),
      span: "Multi-level Inventory Management",
      p: "Multi-level inventory management allows you to access and manage inventory location wise. It allows material planning and allocate and manage the bins.",
    },
    {
      img: (
        <img
          src="https://univassist.com/wp-content/uploads/2020/11/UnivAssist-Event-Calender_LOOP.gif"
          alt=""
        />
      ),
      span: "GBIN Management",
      p: " BIN is the smallest unit of location in any warehouse. Accessing any inventory or stock can be done by using a managed BIN.",
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
                  Inventory<span> Management</span>{" "}
                </h4>
                <p>
                  Inventory Management (IM) is building block of manufacturing
                  or trading industry. Irrespective of size, type and nature of
                  company, one thing that is common amongst all, that is
                  Inventory. As an element of Supply Chain Management, it
                  includes aspects such as controlling and overseeing ordered
                  items, their storage and controlling the amount of items for
                  sale. Inventory Management helps in streamlining the process
                  that brings more precision in business analysis and adds to
                  decision-making.
                </p>
                <p>
                  BizNext IM module is powerfully designed with unique features
                  that make it flexible as well as robust, to adapt to various
                  changing needs. It streamlines and automates the processes of
                  business units. Along with the basic ability to set up master
                  data, BIN Management and multiple levels of inventory
                  management, it enriches the system with the capability to
                  drill down the analysis at ‘Item Property’ level. The system
                  is equipped with the mechanism of setting up the properties/
                  master data dynamically in real time, so that the module is
                  able to adapt to any specific business vertical or
                  industry.Any item except the fixed assets are defined and
                  regulated under Inventory Management module. IM module stores
                  stock Items as well as the raw material. These items can be
                  further regulated in terms of their flow within the system
                  from purchase to production and later from stock to the sale
                  points.
                </p>
              </div>
              <div className={BizClass.Img}>
                <div>
                  <img
                    src="	https://mybiznext.in/images/inventory-management.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={BizClass.CrmFeature}>
            <h4>
              Inventory Management<span> Feature</span>{" "}
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

export default InventoryManagement;
