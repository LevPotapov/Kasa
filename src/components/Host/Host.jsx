import styles from "./Host.module.scss";

const Host = ({ host }) => {
  const { name, picture } = host;

  const nameArray = name.split(" ");

  return (
    <div className={styles.hostContainer}>
      <p className={styles.name}>
        <span>{nameArray[0]}</span>
        <br />
        <span>{nameArray[1]}</span>
      </p>
      <div
        className={styles.hostImage}
        style={{
          backgroundImage: `url(${picture})`,
        }}
      ></div>
    </div>
  );
};

export { Host };
