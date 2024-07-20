import styles from "./Card.module.scss";
import PropTypes from "prop-types";

/**
 * Card component to display a card with an image background and a title.
 *
 * @component
 * @example
 * const src = "exampleImage.png";
 * const title = "Card Title";
 * return <Card src={src} title={title} />;
 *
 * @param {Object} props - Component properties.
 * @param {string} props.src - URL of the image for the card background.
 * @param {string} props.title - Title of the card.
 *
 * @returns {JSX.Element} Card component.
 */

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

Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { Card };
