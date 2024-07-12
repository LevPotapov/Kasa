import { Outlet } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import styles from "./Layout.module.scss";
import { Footer } from "../Footer/Footer";

function Layout() {
  return (
    <>
      <div className={styles.main}>
        <Menu />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export { Layout };
