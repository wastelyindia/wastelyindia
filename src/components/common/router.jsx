

import { createBrowserRouter } from "react-router-dom";

import App from "../../App";

// ======================================================
// PAGES
// ======================================================

import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import IndustriesPage from "../../pages/IndustriesPage";
import TechnologiesPage from "../../pages/TechnologiesPage";
import CaseStudiesPage from "../../pages/CaseStudiesPage";
import PageNotFound from "../../pages/PageNotFound";

import SolutionsPage from "../../pages/SolutionsPage";
import ServicesPage from "../../pages/ServicesPage";
// import ProductsPage from "../../pages/ProductsPage";

// ======================================================
// SOLUTIONS
// ======================================================

import WasteWaterTreatment from "../solutions/WasteWaterTreatment";
import WaterTreatment from "../solutions/Water_Treatment";
import IntegratedWaterSystem from "../solutions/IntegratedWaterSystem";
import AquaCulture from "../solutions/AquaCulture";
import Rejuvenation from "../solutions/Rejuvenation";
import WaterBodyRestoration from "../solutions/WetlandPreservation";
import BiowishAquaFOG from "../solutions/BiowishAquaFOG";

// ======================================================
// PRODUCTS
// ======================================================

import AerationTechnology from "../technologies/AerationTechnology";
import IFASMembrane from "../technologies/IFASMembrane";
import FloatingWetlands from "../technologies/FloatingWetlands";
import PackageTreatmentUnits from "../technologies/PackageTreatmentUnits";
import AlgaeControlSystem from "../technologies/AlgaeControlSystem";
import SludgeManagement from "../technologies/SludgeManagement";
import HydroDis from "../technologies/HydroDis";

// ======================================================
// SERVICES
// ======================================================

import TechnologyProcess from "../services/TechnologyProcess";
import OperationMaintenance from "../services/OperationMaintenance";
import AMCServices from "../services/AMCServices";
import RevampingRetrofitting from "../services/RevampingRetrofitting";

import IndustryDetailPage from "../Industries/IndustryDetailPage";
import { industryData } from "../Industries/industryData";


// ======================================================
// ROUTER
// ======================================================

export const router = createBrowserRouter([
  {
    path: "/",  
    element: <App />,

    children: [
      // ======================================================
      // MAIN PAGES
      // ======================================================

      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "about",
        element: <AboutPage />,
      },

      {
        path: "contact",
        element: <ContactPage />,
      },

      // ======================================================
      // INDUSTRY DETAIL PAGES
      // ======================================================
      {
        path: "industries",
        element: <IndustriesPage />,
      },

      {
        path: "industries/industrial",
        element: (
          <IndustryDetailPage
            industry={industryData.industrial}
          />
        ),
      },

      {
        path: "industries/municipal",
        element: (
          <IndustryDetailPage
            industry={industryData.municipal}
          />
        ),
      },

      {
        path: "industries/healthcare-pharma",
        element: (
          <IndustryDetailPage
            industry={industryData["healthcare-pharma"]}
          />
        ),
      },

      {
        path: "industries/hospitality-commercial",
        element: (
          <IndustryDetailPage
            industry={industryData["hospitality-commercial"]}
          />
        ),
      },

      {
        path: "industries/smart-urban-water",
        element: (
          <IndustryDetailPage
            industry={industryData["smart-urban-water"]}
          />
        ),
      },

      {
        path: "industries/aquaculture-water-bodies",
        element: (
          <IndustryDetailPage
            industry={industryData["aquaculture-water-bodies"]}
          />
        ),
      },


      {
        path: "technologies",
        element: <TechnologiesPage />,
      },

      {
        path: "case-studies",
        element: <CaseStudiesPage />,
      },

      // ======================================================
      // SOLUTIONS
      // ======================================================
      {
        path: "solutions",
        element: <SolutionsPage />,
      },

      {
        path: "solutions/wastewater-treatment",
        element: <WasteWaterTreatment />,
      },

      {
        path: "solutions/water-treatment",
        element: <WaterTreatment />,
      },

      {
        path: "solutions/integrated-water-system",
        element: <IntegratedWaterSystem />,
      },

      {
        path: "solutions/aquaculture",
        element: <AquaCulture />,
      },

      {
        path: "solutions/lake-pond-rejuvenation",
        element: <Rejuvenation />,
      },

      {
        path: "solutions/water-body-restoration",
        element: <WaterBodyRestoration />,
      },
      {
        path: "solutions/biowish-aqua-fog",
        element: <BiowishAquaFOG />,
      },

      // ======================================================
      // TECHNOLOGIES
      // ======================================================

      {
        path: "technologies",
        element: <TechnologiesPage />,
      },

      {
        path: "technologies/aeration-oxygenation",
        element: <AerationTechnology />,
      },

      {
        path: "technologies/ifas-membrane",
        element: <IFASMembrane />,
      },

      {
        path: "technologies/floating-wetlands",
        element: <FloatingWetlands />,
      },

      {
        path: "technologies/sludge-management",
        element: <SludgeManagement />,
      },

      {
        path: "technologies/package-treatment-units",
        element: <PackageTreatmentUnits />,
      },

      {
        path: "technologies/algae-control",
        element: <AlgaeControlSystem />,
      },

      {
        path: "technologies/hydro-dis",
        element: <HydroDis />,
      },

      // ======================================================
      // SERVICES
      // ======================================================

      {
        path: "services",
        element: <ServicesPage />,
      },

      {
        path: "services/technology-process",
        element: <TechnologyProcess />,
      },

      {
        path: "services/operation-maintenance",
        element: <OperationMaintenance />,
      },

      {
        path: "services/amc-services",
        element: <AMCServices />,
      },

      {
        path: "services/revamping-retrofitting",
        element: <RevampingRetrofitting />,
      },

      // ======================================================
      // 404
      // ======================================================

      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);