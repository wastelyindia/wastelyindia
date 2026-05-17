// import { Outlet } from 'react-router-dom';
// import './App.css'

// import NavBar from "./components/common/navBar/NavBar";
// import Footer from "./components/common/footer/Footer";


// function App() {

  


//   return (
//     <>
//       <>
//           <NavBar />
//           <Outlet />
//           <Footer />
//       </>
//     </>
//   )
// }

// export default App


import { Outlet } from "react-router-dom";
import "./App.css";

import NavBar from "./components/common/navBar/NavBar";
import Footer from "./components/common/footer/Footer";

/* GLOBAL EFFECTS */
import ScrollProgress from "./components/common/effects/ScrollProgress";
import CursorGlow from "./components/common/effects/CursorGlow";
import NoiseOverlay from "./components/common/effects/NoiseOverlay";

function App() {
  return (
    <>
    {/* GLOBAL EFFECTS */}
      <ScrollProgress />
      <CursorGlow />
      <NoiseOverlay />

      {/* WEBSITE */}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;