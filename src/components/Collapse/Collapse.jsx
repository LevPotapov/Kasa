import PropTypes from "prop-types";
import { useState } from "react";
import { useResize } from "../../hooks/useResize";
import styles from "./Collapse.module.scss";
/**
 * Collapse component to display a title and text with collapsible/expandable functionality.
 *
 * @component
 * @example
 * const title = "Title";
 * const text = "Text";
 * return <Collapse title={title} text={text} />;
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title to display.
 * @param {string|string[]} props.text - The text to display, can be a string or an array of strings.
 *
 * @returns {JSX.Element} Collapse component.
 */

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
            <span key={idx}>
              <span>{el}</span>
              <br />
            </span>
          ))
        )}
      </p>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export { Collapse };
