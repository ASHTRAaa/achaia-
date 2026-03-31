import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {useState,useEffect} from "react";
import Sidebar from "../sidebar/Sidebar";
import {FaBars,FaTimes} from "react-icons/fa";
const Navbar = () => {
  const [openMenu,setOpenMenu] = useState(false);
  useEffect(()=>{
    if(openMenu){
      document.body.style.overflow="hidden";
    }else{
      document.body.style.overflow="auto";
    }
  },[openMenu]);
  return (
    <div className="nav">
      <div className="compName">
        <h1>AgENCY</h1>
      </div>
      <nav className="navbar">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "navlink"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "navlink"
          }
        >
          Our Work
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "navlink"
          }
        >
          Contact Us
        </NavLink>
      </nav>
      <div className="button">
        <NavLink to="/cyp">
          <button className="cta-btn">COST YOUR PROJECT</button>
        </NavLink>
      </div>
      {openMenu && (
        <div className="overlay" onClick={() => setOpenMenu(false)} />
      )}
      <button className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? <FaTimes /> : <FaBars />}
      </button>
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};

export default Navbar;
