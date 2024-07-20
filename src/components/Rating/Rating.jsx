import styles from "./Rating.module.scss";
import PropTypes from "prop-types";

/**
 * Rating component displaying stars.
 *
 * @component
 * @example
 * const rating = 4;
 * return <Rating rating={rating} />;
 *
 * @param {Object} props - Component properties.
 * @param {number} props.rating - Rating value (from 1 to 5).
 *
 * @returns {JSX.Element} Rating component.
 */

const Rating = ({ rating }) => {
  return (
    <div className={styles.starsContainer}>
      {Array(5)
        .fill()
        .map((_, idx) => {
          return (
            <img
              key={idx}
              className={styles.star}
              src={`./src/assets/logos/star-${
                idx < rating ? "" : "in"
              }active.svg`}
            />
          );
        })}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export { Rating };
