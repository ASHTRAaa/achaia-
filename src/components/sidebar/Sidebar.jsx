import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ openMenu, setOpenMenu }) => {
  return (
    <aside className={`sidebar-aside ${openMenu ? "active" : ""}`}>
      <div className="sidebar-links">
        <NavLink to="/" onClick={() => setOpenMenu(false)} className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={() => setOpenMenu(false)} className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
          Products
        </NavLink>
        <NavLink to="/work" onClick={() => setOpenMenu(false)} className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
          Work
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpenMenu(false)} className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
          Contact
        </NavLink>
        <NavLink to="/cyp" onClick={() => setOpenMenu(false)} className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
          Cost Your Project
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;

