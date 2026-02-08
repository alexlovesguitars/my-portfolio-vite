import { useState } from "react";
import { NavLink } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../navigation/MobileNav.css";
import mobileMenu from "../../assets/icons/mobile_menu.svg";
import menuClose from "../../assets/icons/close-menu.svg";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const handleNavigate = () => setOpen(false);

  return (
    <>
      <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
        <img src={mobileMenu} alt="menu" />
      </button>

      <SlidingPane
        isOpen={open}
        from="right"
        width="100%"
        hideHeader
        onRequestClose={() => setOpen(false)}
        contentClassName="mobile-pane"
        overlayClassName="mobile-overlay"
      >
        <nav className="mobile-menu">
          <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <img src={menuClose} alt="close-menu" />
          </button>

          <NavLink to="/" onClick={handleNavigate}>
            Projects
          </NavLink>
          <NavLink to="/about" onClick={handleNavigate}>
            About Me
          </NavLink>
          <NavLink to="/contact" onClick={handleNavigate}>
            Get In Touch
          </NavLink>
        </nav>
      </SlidingPane>
    </>
  );
}
