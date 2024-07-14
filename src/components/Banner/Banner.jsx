import styles from "./Banner.module.scss";

const Banner = ({ image, text = "" }) => {
  const src = "./src/assets/images/";
  return (
    <div
      style={{ backgroundImage: `url(${src}${image}.png)` }}
      className={text ? styles.withText : styles.withoutText}
    >
      {text ? (
        <h1 className={styles.textOverlay}>{text}</h1>
      ) : (
        <div className={styles.banner}></div>
      )}
    </div>
  );
};

export { Banner };
