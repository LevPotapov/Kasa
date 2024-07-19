import { NavLink, useLocation } from "react-router-dom";
import styles from "./Menu.module.scss";
import { useResize } from "../../hooks/useResize";

const Menu = () => {
  const location = useLocation();

  const isMobileScreen = useResize(576);

  const src = isMobileScreen
    ? "./src/assets/logos/LOGO_mobile_orange.svg"
    : "./src/assets/logos/LOGO_desktop_orange.svg";

  return (
    <header>
      <img src={src} alt="Logo de Kasa" />
      <nav>
        <NavLink
          className={location.pathname === "/" ? styles.underline : ""}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={location.pathname === "./about" ? styles.underline : ""}
          to="/about"
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export { Menu };
