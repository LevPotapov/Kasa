import { Outlet } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import styles from "./Layout.module.scss";
import { Footer } from "../Footer/Footer";

/**
 * Layout component to display the main structure of the page with a menu, content, and footer.
 *
 * @component
 * @example
 * return <Layout />;
 *
 * @returns {JSX.Element} Layout component.
 */

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
