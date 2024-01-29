import { Outlet } from 'react-router-dom';
import './App.css'

import NavBar from "./components/common/navBar/NavBar";
import Footer from "./components/common/footer/Footer";


function App() {

  


  return (
    <>
      <>
          <NavBar />
          <Outlet />
          <Footer />
      </>
    </>
  )
}

export default App
