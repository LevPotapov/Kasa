import PropTypes from "prop-types";
import styles from "./Tag.module.scss";

/**
 * Tag component displaying text in a stylized block.
 *
 * @component
 * @example
 * const title = "Tag";
 * return <Tag title={title} />;
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - Text of the tag.
 *
 * @returns {JSX.Element} Tag component.
 */

const Tag = ({ title }) => {
  return (
    <div className={styles.tag}>
      <span>{title}</span>
    </div>
  );
};

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};

export { Tag };
