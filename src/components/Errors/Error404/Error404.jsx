import { useResize } from "../../../hooks/useResize";
import styles from "./Error404.module.scss";

const Error404 = () => {
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
    </>
  );
};

export { Error404 };