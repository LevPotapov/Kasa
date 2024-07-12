import styles from "./Banner.module.scss";

const Banner = ({ src, text = "" }) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={text ? styles.withText : styles.withoutText}
    >
      {text && <h1 className={styles.textOverlay}>{text}</h1>}
    </div>
  );
};

export { Banner };
