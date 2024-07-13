import styles from "./Card.module.scss";

const Card = ({ src, title }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgb(0%, 0%, 0%, 0), rgba(10, 10, 10, 0), rgba(4, 4, 4, 0.2), rgba(0, 0, 0, 0.5)), url(${src})`,
      }}
      className={styles.card}
    >
      <h2>{title}</h2>
    </div>
  );
};

export { Card };
