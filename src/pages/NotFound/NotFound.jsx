import { NavLink } from "react-router-dom";
import { Error404 } from "../../components/Errors/Error404/Error404";
import styles from "./NotFound.module.scss";

/**
 * 404 error page displaying an error component and a link to the home page.
 *
 * @component
 * @example
 * return <NotFound />;
 *
 * @returns {JSX.Element} 404 error page.
 */

const NotFound = () => {
  return (
    <>
      <Error404 />
      <div className={styles.notFoundLink}>
        <NavLink to="/">Retourner sur la page d&apos;accueil</NavLink>
      </div>
    </>
  );
};

export { NotFound };
