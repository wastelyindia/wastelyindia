import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../../assets/wastely_logo.png'
import NavLinks from "./NavLink";


const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 md:w-auto w-full flex justify-between items-center max-sm:px-5">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-24 max-sm:h-12" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          {/* <Button /> */}
          {/* get started */}
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0 z-20" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
          <div className="py-5">
            {/* <Button /> */}
            {/* get started */}
          </div>
        </ul>
      </div>
    </nav>
  );
};


export default NavBar