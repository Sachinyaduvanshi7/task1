import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Header from "../components/Header/TopHeader/Header";
import Login from "../components/Login/Login";
import Page from "./Page";
import Crm from "../components/OurModules/CRM/Crm";
import CallToAction from "../components/Home/CallToAction/CallToAction";
import InventoryManagement from "../components/OurModules/InventoryManagement/InventoryManagement";
import PurchaseManagement from "../components/OurModules/Purchase Management/PurchaseManagement";
import ManufacturingManagement from "../components/OurModules/Manufacturing/ManufacturingManagement";
import SalesManagement from "../components/OurModules/SalesManagement.jsx/SalesManagement";
import WorkFlowManagement from "../components/OurModules/WorkFlowManagement/WorkFlowManagement";
import ExternalPortal from "../components/OurModules/ExternalPortal/ExternalPortal";
import AdministrationAcess from "../components/OurModules/AdministrationAccess/AdministrationAccess";
import FinancialAccounting from "../components/OurModules/FinancialAccounting/FinancialAccounting";
import BusinessIntelligence from "../components/OurModules/BusinessIntelligence/BusinessIntelligence";
import OurClients from "../components/Home/OurClients/OurClients";
import ContactUs from "../components/Home/ContactUs/ContactUs";
import OurPartners from "../components/Home/OurPartners/OurPartners";
const RoutesMap = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route
          exact
          path="/home"
          element={<Page title="Home" component={<Home />} />}
        />
        <Route
          exact
          path="/crm"
          element={<Page title="CRM" component={<Crm />} />}
        />
        <Route
          exact
          path="/Inventory"
          element={
            <Page title="Inventory" component={<InventoryManagement />} />
          }
        />
        <Route
          exact
          path="/Purchase"
          element={<Page title="Purchase" component={<PurchaseManagement />} />}
        />

        <Route
          exact
          path="/CallToAction"
          element={<Page title="CallToAction" component={<CallToAction />} />}
        />
        <Route
          exact
          path="/Manufacturing"
          element={
            <Page
              title="Manufacturing"
              component={<ManufacturingManagement />}
            />
          }
        />
        <Route
          exact
          path="/Sales"
          element={<Page title="Sales" component={<SalesManagement />} />}
        />

        <Route
          exact
          path="/WorkFlow"
          element={<Page title="WorkFlow" component={<WorkFlowManagement />} />}
        />
        <Route
          exact
          path="/ExternalPortal"
          element={
            <Page title="ExternalPortal" component={<ExternalPortal />} />
          }
        />
        <Route
          exact
          path="/AdministrationAcess"
          element={
            <Page
              title="AdministrationAcess"
              component={<AdministrationAcess />}
            />
          }
        />
        <Route
          exact
          path="/FinancialAccounting"
          element={
            <Page
              title="FinancialAccounting"
              component={<FinancialAccounting />}
            />
          }
        />
        <Route
          exact
          path="/BusinessIntelligence"
          element={
            <Page
              title="BusinessIntelligence"
              component={<BusinessIntelligence />}
            />
          }
        />
        <Route
          exact
          path="/OurClients"
          element={<Page title="OurClients" component={<OurClients />} />}
        />

        <Route
          exact
          path="/Partners"
          element={<Page title="Partners" component={<OurPartners />} />}
        />
           <Route
          exact
          path="/ContactUS"
          element={<Page title="ContactUS" component={<ContactUs />} />}
        />
        
        <Route path="*" element={<Page title="Not found" />} />
      </Routes>
    </Router>
  );
};

export default RoutesMap;
