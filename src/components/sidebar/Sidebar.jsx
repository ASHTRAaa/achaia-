import "./Sidebar.css"
import { NavLink } from "react-router-dom";
const Sidebar = ({openMenu,setOpenMenu}) => {
  return (
    <div className={`sidebar ${openMenu ? "active" : ""}`}>
      <NavLink to="/" onClick={() => setOpenMenu(false)}>
        Home
      </NavLink>
      <NavLink to="/work" onClick={() => setOpenMenu(false)}>
        Our Work
      </NavLink>
      <NavLink to="/contact" onClick={() => setOpenMenu(false)}>
        Contact Us
      </NavLink>
      <NavLink to="/cyp" onClick={()=>setOpenMenu(false)}>
        <button className="cta-btn mobile-btn">COST YOUR PROJECT</button>
      </NavLink>
    </div>
  );
}

export default Sidebar
