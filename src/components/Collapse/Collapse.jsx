import { useState } from "react";
import styles from "./Collapse.module.scss";

const Collapse = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={styles.title}>
        <p>{title}</p>
        <img
          src="./src/assets/logos/Vector.svg"
          onClick={() => setIsOpen(!isOpen)}
          className={
            isOpen ? `${styles.flecheDown} ${styles.fleche}` : styles.fleche
          }
        />
      </div>
      <p
        className={isOpen ? `${styles.text} ${styles.activeText}` : styles.text}
      >
        <span>{text}</span>
      </p>
    </div>
  );
};

export { Collapse };
