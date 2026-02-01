import logoAP from "../../assets/logo_AP.svg";
import NavigationSwitcher from "../navigation/NavigationSwitcher.jsx";
import "./header.css";

export default function Header() {
  return (
    <header className="container-fluid Header">
      <img className="Logo" src={logoAP} alt="logo" />
      <div className="nav-wrapper">
        <NavigationSwitcher />
      </div>
    </header>
  );
}
