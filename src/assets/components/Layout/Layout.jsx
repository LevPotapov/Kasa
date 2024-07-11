import { Outlet } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import "./Layout.module.scss";
import { Footer } from "../Footer/Footer";

function Layout() {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}

export { Layout };
