import { useState } from "react";
import { useResize } from "../../hooks/useResize";
import styles from "./Collapse.module.scss";

const Collapse = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobileScreen = useResize(576);

  return (
    <div className={styles.collapseContainer}>
      <div className={styles.title}>
        <p>{title}</p>
        <img
          src={`./src/assets/logos/${
            isMobileScreen ? "Vector_mobile" : "Vector"
          }.svg`}
          onClick={() => setIsOpen(!isOpen)}
          className={
            isOpen ? `${styles.flecheDown} ${styles.fleche}` : styles.fleche
          }
        />
      </div>
      <p
        className={isOpen ? `${styles.text} ${styles.activeText}` : styles.text}
      >
        {typeof text === "string" ? (
          <span>{text}</span>
        ) : (
          text.map((el, idx) => (
            <div key={idx}>
              <span>{el}</span>
              <br />
            </div>
          ))
        )}
      </p>
    </div>
  );
};

export { Collapse };
