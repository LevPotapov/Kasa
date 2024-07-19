import styles from "./Tag.module.scss";

const Tag = ({ title }) => {
  return (
    <div className={styles.tag}>
      <span>{title}</span>
    </div>
  );
};

export { Tag };
