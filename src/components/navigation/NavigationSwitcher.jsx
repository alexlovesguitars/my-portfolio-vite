import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";
import useMediaQuery from "../../hooks/useMediaQuery.jsx";

export default function NavigationSwitcher() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? <DesktopNav /> : <MobileNav />;
}
