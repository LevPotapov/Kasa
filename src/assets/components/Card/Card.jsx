import styles from "./Card.module.scss";

const Card = ({ src, title }) => {
  return (
    <div style={{ backgroundImage: `url(${src})` }} className={styles.card}>
      <h2>{title}</h2>
    </div>
  );
};

export { Card };
