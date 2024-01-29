import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Application from './pages/Application.jsx'
import OprationAndMaintanence from './components/services/OprationAndMaintanence.jsx'
import Contact from './components/contact/Contact.jsx'
import Amc from './components/services/Amc.jsx'
import Rental from './components/services/Rental.jsx'
import Instrument from './components/services/Instrument.jsx'
import Revamping from './components/services/Revamping.jsx'
import Aeration from './components/products/Aeration.jsx'
import Oxygination from './components/products/Oxygination.jsx'
import Ifas from './components/products/Ifas.jsx'
import Screening from './components/products/Screening.jsx'
import Grit from './components/products/Grit.jsx'
import Sludge from './components/products/Sludge.jsx'
import PackageTratment from './components/products/PackageTratment.jsx'
import WasteWaterTreatment from './components/solutions/WasteWaterTreatment.jsx'
import AquaCulture from './components/solutions/AquaCulture.jsx'
import WetlandPreservation from './components/solutions/WetlandPreservation.jsx'
import Rejuvenation from './components/solutions/Rejuvenation.jsx'
import Water_Treatment from './components/solutions/Water_Treatment.jsx'
import Integrated from './components/solutions/Integrated.jsx'
import Floating_Wetlands from './components/products/Floating_Wetlands.jsx'
import Tech_Process from './components/services/Tech_Process.jsx'
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "application",
          children:[
            {
              path : "service",
              children : [
                {
                  path : "operation_maitanence",
                  element : <OprationAndMaintanence />
                },
                {
                  path : "annual_maintanance_contract",
                  element : <Amc />
                },
                {
                  path : "rental",
                  element : <Rental />
                },
                {
                  path : "instrumentation_automation",
                  element : <Instrument />
                },
                {
                  path : "technology_Process",
                  element : <Tech_Process />
                },
                {
                  path : "revamping_retrofitting",
                  element : <Revamping />
                },
              ]
            },
            {
              path : "product",
              children : [
                {
                  path : "aeration",
                  element : <Aeration />
                },
                {
                  path : "oxigination_technology",
                  element : <Oxygination />
                },
                {
                  path : "ifas",
                  element : <Ifas />
                },
                {
                  path : "screening",
                  element : <Screening />
                },
                {
                  path : "grit_mechanism",
                  element : <Grit />
                },
                {
                  path : "sludge",
                  element : <Sludge />
                },
                {
                  path : "Floating_Wetlands",
                  element : <Floating_Wetlands />
                },
                {
                  path : "package_treatment_plant",
                  element : <PackageTratment />
                },
              ]
            },
            {
            path : "Solution",
              children : [
                {
                  path : "waste_water_treatment",
                  element : <WasteWaterTreatment />
                },
                {
                  path : "Water_Treatment",
                  element : <Water_Treatment />
                },
                {
                  path : "AquaCulture",
                  element : <AquaCulture />
                },
                {
                  path : "Integrated",
                  element : <Integrated />
                },
                {
                  path : "WetLands_Preservation",
                  element : <WetlandPreservation />
                },
                {
                  path : "Rejuvenation",
                  element : <Rejuvenation />
                },
              ]
          }
          ]
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
<ToastContainer />
  </React.StrictMode>,
)
