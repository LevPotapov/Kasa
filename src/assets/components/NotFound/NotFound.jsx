import { NavLink } from "react-router-dom";
import { useResize } from "../../utils/useResize";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const isMobileScreen = useResize(576);

  return (
    <>
      <h1 className={styles.notFoundTitle}>404</h1>
      {isMobileScreen ? (
        <p className={styles.notFoundParagraph}>
          Oups!La page que
          <br />
          vous demandez n&apos;existe pas.
        </p>
      ) : (
        <p className={styles.notFoundParagraph}>
          Oups!La page que vous demandez n&apos;existe pas.
        </p>
      )}
      <div className={styles.notFoundLink}>
        <NavLink>Retourner sur la page d&apos;accueil</NavLink>
      </div>
    </>
  );
};

export { NotFound };
