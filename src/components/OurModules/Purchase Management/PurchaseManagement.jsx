import React from "react";
// import BizClass from "../Crm.module.scss";
import Footer from "../../Footer/Footer";
import OurPresence from "../../Home/OurPresence/OurPresence";
import BizClass from "../CRM/Crm.module.scss";
import { ModulesSubHeader } from "../../Header/TopHeader/Header";

const PurchaseManagement = () => {
  const Feature = [
    {
      img: <img src="https://clickdimensions.com/files/2021/07/4-Effective-Campaign-Automation-Ideas.gif" alt="" />,
      span: "Purchase Requisition",
      p: " For any purchase requisition of fixed assets and consumables from different departments, a purchase order can be created through BizNext PM.",
    },
    {
      img: (
        <img
          src="https://cdn.dribbble.com/users/35810/screenshots/2057574/echo-animation.gif"
          alt=""
        />
      ),
      span: "Purchase Order Workflow",
      p: "BizNext PM enables you to define creator, reviewer and approver for the purchase orders. The approval policy is enforced at organization, department and creator level.",
    },
    {
      img: (
        <img
          src="https://www.pskitservices.com/wp-content/uploads/2020/10/homepage-banner-animated-2.gif"
          alt=""
        />
      ),
      span: "Contract Management",
      p: "Contracts are managed through BizNext PM for recurring orders from the same supplier. It incorporates discounts from the individual suppliers.",
    },
    {
      img: (
        <img
          src="https://univassist.com/wp-content/uploads/2020/11/UnivAssist-Event-Calender_LOOP.gif"
          alt=""
        />
      ),
      span: "Communication with Suppliers",
      p: " BizNext PM enables a user to communicate with suppliers over emails and gives them access to ‘Supplier Portal’."
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
                  Purchase<span> Management</span>{" "}
                </h4>
                <p>
                Purchase Management refers to the sourcing of goods and services from suppliers. Purchase can be a time consuming activity to identify what products are required for each department and which supplier offers the best deal. Hence Purchase Management plays a crucial role in an organization which automates an entire process of purchase starting from Purchase requisition till the time material is received at warehouse.
                </p>
                <p>
                BizNext PM allows you to create Purchase Order against the Purchase requisition or Reference type. It allows you to check the availability of all kinds of administrative Items, Stock Items, Fixed Assets, etc. It also helps to define a preferred supplier for an item and further to configure multiple suppliers for a single item by defining the purchase ratio for each of them. It has a capability to define stage wise payment terms and contracts with special pricing. BizNext PM gives you the power to analyse the complete process that includes price variance, procurement time, order values, orders as per priority and their purchase quantity etc. You get a complete insight into performance of suppliers individually and pattern of product costing or pattern of its movement in the eco-system.
                </p>
              </div>
              <div className={BizClass.Img}>
                <div>
                  <img
                    src="https://mybiznext.in/images/purchase-management.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={BizClass.CrmFeature}>
            <h4>
              Purchase Management<span> Feature</span>{" "}
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

export default PurchaseManagement;
