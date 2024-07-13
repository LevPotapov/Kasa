import { NavLink } from "react-router-dom";
import { Error404 } from "../../components/Errors/Error404/Error404";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <>
      <Error404 />
      <div className={styles.notFoundLink}>
        <NavLink>Retourner sur la page d&apos;accueil</NavLink>
      </div>
    </>
  );
};

export { NotFound };
