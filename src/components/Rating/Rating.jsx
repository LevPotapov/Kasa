import styles from "./Rating.module.scss";

const Rating = ({ rating }) => {
  return (
    <div className={styles.starsContainer}>
      {Array(5)
        .fill()
        .map((_, idx) => {
          return idx < rating ? (
            <img
              className={styles.star}
              src="./src/assets/logos/star-active.svg"
            />
          ) : (
            <img
              className={styles.star}
              src="./src/assets/logos/star-inactive.svg"
            />
          );
        })}
    </div>
  );
};

export { Rating };
