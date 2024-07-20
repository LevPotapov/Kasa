import styles from "./Banner.module.scss";
import PropTypes from "prop-types";
/**
 * Banner component to display a banner with an image and optional text.
 *
 * @component
 * @example
 * const image = "exampleImage";
 * const text = "Example text";
 * return <Banner image={image} text={text} />;
 *
 * @param {Object} props - Component properties.
 * @param {string} props.image - The name of the image to display (without extension).
 * @param {string} [props.text] - Optional text to display over the image.
 *
 * @returns {JSX.Element} Banner component.
 */

const Banner = ({ image, text = "" }) => {
  const src = "./src/assets/images/";
  return (
    <div
      style={{ backgroundImage: `url(${src}${image}.png)` }}
      className={text ? styles.withText : styles.withoutText}
    >
      {text ? (
        <h1 className={styles.textOverlay}>{text}</h1>
      ) : (
        <div className={styles.banner}></div>
      )}
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export { Banner };
