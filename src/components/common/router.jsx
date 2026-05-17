// import { createBrowserRouter } from "react-router-dom";

// import App from "../../App";

// // Pages
// import HomePage from "../../pages/HomePage";
// import AboutPage from "../../pages/AboutPage";
// import ContactPage from "../../pages/ContactPage";
// import IndustriesPage from "../../pages/IndustriesPage";
// import TechnologiesPage from "../../pages/TechnologiesPage";
// import PageNotFound from "../../pages/PageNotFound";

// // Solutions
// import WasteWaterTreatment from "../solutions/WasteWaterTreatment";
// import Water_Treatment from "../solutions/Water_Treatment";
// import IntegratedWaterSystem from "../solutions/IntegratedWaterSystem";
// import AquaCulture from "../solutions/AquaCulture";
// import Rejuvenation from "../solutions/Rejuvenation";
// import WetlandPreservation from "../solutions/WetlandPreservation"

// // Products
// import AerationTechnology from "../products/AerationTechnology";
// import IFASMembrane from "../products/IFASMembrane";
// import FloatingWetlands from "../products/FloatingWetlands";
// import SludgeDewatering from "../products/SludgeDewatering";
// import PackageTreatmentUnits from "../products/PackageTreatmentUnits";

// // Services
// import TechnologyProcess from "../services/TechnologyProcess";
// import OperationMaintenance from "../services/OperationMaintenance";
// import AMCServices from "../services/AMCServices";
// import RevampingRetrofitting from "../services/RevampingRetrofitting";
// import AlgaeControlSystem from "../products/AlgaeControlSystem";
// import CaseStudies from "../../pages/CaseStudiesPage";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,

//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },

//       {
//         path: "about",
//         element: <AboutPage />,
//       },

//       {
//         path: "contact",
//         element: <ContactPage />,
//       },

//       {
//         path: "industries",
//         element: <IndustriesPage />,
//       },

//       {
//         path: "technologies",
//         element: <TechnologiesPage />,
//       },

//       {
//         path: "case-studies",
//         element: <CaseStudies />,
//       },

//       // ====================================
//       // SOLUTIONS
//       // ====================================

//       {
//         path: "solutions/wastewater-treatment",
//         element: <WasteWaterTreatment />,
//       },

//       {
//         path: "solutions/water-treatment",
//         element: <Water_Treatment />,
//       },

//       {
//         path: "solutions/integrated-water-system",
//         element: <IntegratedWaterSystem />,
//       },

//       {
//         path: "solutions/aquaculture",
//         element: <AquaCulture />,
//       },

//       {
//         path: "solutions/lake-pond-rejuvenation",
//         element: <Rejuvenation />,
//       },
//       // {
//       //   path: "solutions/lake-pond-rejuvenation",
//       //   element: <WetlandPreservation />,
//       // },
//       {
//         path: "solutions/water-body-restoration",
//         element: <WetlandPreservation />,
//       },

//       // ====================================
//       // PRODUCTS
//       // ====================================

//       {
//         path: "products/aeration-oxygenation",
//         element: <AerationTechnology />,
//       },

//       {
//         path: "products/ifas-membrane",
//         element: <IFASMembrane />,
//       },

//       {
//         path: "products/floating-wetlands",
//         element: <FloatingWetlands />,
//       },

//       {
//         path: "products/sludge-dewatering-unit",
//         element: <SludgeDewatering />,
//       },

//       {
//         path: "products/package-treatment-units",
//         element: <PackageTreatmentUnits />,
//       },
//       {
//         path: "products/alge-control-system",
//         element: <AlgaeControlSystem />,
//       },

//       // ====================================
//       // SERVICES
//       // ====================================

//       {
//         path: "services/technology-process",
//         element: <TechnologyProcess />,
//       },

//       {
//         path: "services/operation-maintenance",
//         element: <OperationMaintenance />,
//       },

//       {
//         path: "services/amc-services",
//         element: <AMCServices />,
//       },

//       {
//         path: "services/revamping-retrofitting",
//         element: <RevampingRetrofitting />,
//       },

//       // ====================================
//       // 404
//       // ====================================

//       {
//         path: "*",
//         element: <PageNotFound />,
//       },
//     ],
//   },
// ]);


























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

// ======================================================
// SOLUTIONS
// ======================================================

import WasteWaterTreatment from "../solutions/WasteWaterTreatment";
import WaterTreatment from "../solutions/Water_Treatment";
import IntegratedWaterSystem from "../solutions/IntegratedWaterSystem";
import AquaCulture from "../solutions/AquaCulture";
import Rejuvenation from "../solutions/Rejuvenation";
import WaterBodyRestoration from "../solutions/WetlandPreservation";

// ======================================================
// PRODUCTS
// ======================================================

import AerationTechnology from "../products/AerationTechnology";
import IFASMembrane from "../products/IFASMembrane";
import FloatingWetlands from "../products/FloatingWetlands";
import SludgeDewatering from "../products/SludgeDewatering";
import PackageTreatmentUnits from "../products/PackageTreatmentUnits";
import AlgaeControlSystem from "../products/AlgaeControlSystem";

// ======================================================
// SERVICES
// ======================================================

import TechnologyProcess from "../services/TechnologyProcess";
import OperationMaintenance from "../services/OperationMaintenance";
import AMCServices from "../services/AMCServices";
import RevampingRetrofitting from "../services/RevampingRetrofitting";

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

      {
        path: "industries",
        element: <IndustriesPage />,
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

      // ======================================================
      // PRODUCTS
      // ======================================================

      {
        path: "products/aeration-oxygenation",
        element: <AerationTechnology />,
      },

      {
        path: "products/ifas-membrane",
        element: <IFASMembrane />,
      },

      {
        path: "products/floating-wetlands",
        element: <FloatingWetlands />,
      },

      {
        path: "products/sludge-dewatering-unit",
        element: <SludgeDewatering />,
      },

      {
        path: "products/package-treatment-units",
        element: <PackageTreatmentUnits />,
      },

      {
        path: "products/algae-control-system",
        element: <AlgaeControlSystem />,
      },

      // ======================================================
      // SERVICES
      // ======================================================

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