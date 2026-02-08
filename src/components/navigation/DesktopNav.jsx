import { NavLink } from "react-router-dom";
import "./DesktopNav.css";

const navItems = [
  { label: "Projects", path: "/" },
  { label: "About me", path: "/about" },
  { label: "Get in touch", path: "/contact" },
];

export default function DesktopNav() {
  return (
    <nav className="desktopnav">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li className="nav-item" key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `menu-item ${isActive ? "active" : ""} ${
                  item.label === "Projects" || item.label === "About me"
                    ? "double-border"
                    : ""
                }`
              }
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
