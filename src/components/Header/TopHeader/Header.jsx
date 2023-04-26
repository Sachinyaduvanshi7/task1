import React, { useState } from "react";
import BizClass from "./Header.module.scss";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BiznextLogo from "../../../images/BiznextLogo";
function Header() {
  const navigate = useNavigate();
  const SubMenuModule = [
    {
      menu: "CRM",
      path: "/crm",
    },
    {
      menu: "Inventory Management",
      path: "/Inventory",
    },
    {
      menu: "Purchase management",
      path: "/Purchase",
    },
    {
      menu: "Manufacturing Management",
      path: "/Manufacturing",
    },
    {
      menu: "Sales Management",
      path: "/Sales",
    },
    {
      menu: "Work Flow Management",
      path: "/WorkFlow",
    },
    {
      menu: "External Portal",
      path: "/ExternalPortal",
    },
    {
      menu: "Administration And Access Management",
      path: "/AdministrationAcess",
    },
    {
      menu: "Financial Management",
      path: "/FinancialAccounting",
    },
    {
      menu: "Business Intelligence And Analytics",
      path: "/BusinessIntelligence",
    },
  ];

  const SubMenuSolution = [
    {
      menu: "Order Management And Work Flow",
      path: "crm",
    },
    {
      menu: "Ecommerce Portal",
    },
    {
      menu: "Account Receivable And Payable",
    },
    {
      menu: "Production And Material Planning",
    },
    {
      menu: "Sale And Distribution",
    },
    {
      menu: "Financial Accounting",
    },
  ];
  return (
    <div className={BizClass.Header}>
      <div className={BizClass.TopHeader}>
        <div
          className={BizClass.Client_Logo}
          onClick={() => navigate("../home")}
        >
          <BiznextLogo />
        </div>
        <div className={BizClass.MenuListing}>
          <div className={BizClass.Lsit}>
            <ul>
              <div>
                <li>About Us</li>
              </div>
              <div>
                <li>
                  Our Modules <MdArrowDropDown />
                </li>

                <div className={BizClass.SubMenu}>
                  {SubMenuModule.map((data, indx) => {
                    console.log(data);
                    return (
                      <>
                        <div key={indx}>
                          <Link className={BizClass.menu} to={data.path}>
                            {data.menu}
                          </Link>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div>
                <li>
                  Solutions <MdArrowDropDown />
                </li>
                <div className={BizClass.SubMenu}>
                  {SubMenuSolution.map((data, indx) => {
                    return (
                      <>
                        <div>
                          <Link className={BizClass.menu} to="#">
                            {data.menu}
                          </Link>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div>
                <li>
                  <Link className={BizClass.Main_Menu} to="Partners">
                    {" "}
                    Partner
                  </Link>{" "}
                </li>
              </div>
              <div>
                <li>
                  {" "}
                  <Link className={BizClass.Main_Menu} to="OurClients">
                    {" "}
                    Our Clients
                  </Link>{" "}
                </li>
              </div>
              <div>
              <li>
                <Link className={BizClass.Main_Menu} to="ContactUS">
                  {" "}
                  Contact Us
                </Link>{" "}
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className={BizClass.Call_Action}>
          <Link className={BizClass.LetsTalk} to="/CallToAction">
            {" "}
            <li>Call To Action</li>
          </Link>
        </div>
      </div>
      {/* <div className={BizClass.MenuBar}>
        <VscThreeBars onClick={openMenuBar} />
        {menu ? (
          <div className={BizClass.Container}>
            <div className={BizClass.Section_Bar}>
              <ImCross onClick={openMenuBar} />
              <img
                src="	https://sherbazaar.co/wp-content/uploads/2022/06/Logo.png"
                alt=""
              />
              <div>
                <li>Home</li>
                <li>About</li>
                <li>How To Play</li>
                <li>Learn With Shere Bazaar</li>
                <li>Contact</li>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div> */}
    </div>
  );
}

export function ModulesSubHeader() {
  // const {  } = props;
  const SubMenuModule = [
    {
      id: "1",
      menu: "CRM",
      path: "/crm",
    },
    {
      id: "2",
      menu: "INVENTORY",
      path: "/Inventory",
    },
    {
      id: "3",
      menu: "PURCHASE",
      path: "/Purchase",
    },
    {
      id: "4",
      menu: "MANUFACTURING",
      path: "/Manufacturing",
    },
    {
      id: "5",
      menu: "SALES",
      path: "/Sales",
    },

    {
      id: "6",
      menu: "WORK-FLOW",
      path: "/WorkFlow",
    },
    {
      id: "7",
      menu: "EXTERNAL PORTAL",
      path: "/ExternalPortal",
    },
    {
      id: "8",
      menu: "ADMINISTRATION",
      path: "/AdministrationAcess",
    },

    {
      id: "9",
      menu: "FINANCIAL",
      path: "/FinancialAccounting",
    },
    {
      id: "10",
      menu: "BUSINESS INTELLIGENCE",
      path: "/BusinessIntelligence",
    },
  ];
  return (
    <div className={BizClass.SubHeader}>
      {SubMenuModule.map((data, indx) => {
        return (
          <>
            <Link className={BizClass.SubLink} to={data.path} key={indx}>
              <li>{data.menu}</li>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default Header;
