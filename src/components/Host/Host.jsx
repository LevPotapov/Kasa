import styles from "./Host.module.scss";
import PropTypes from "prop-types";

/**
 * Host component to display host information, including name and picture.
 *
 * @component
 * @example
 * const host = { name: "John Doe", picture: "path/to/picture.jpg" };
 * return <Host host={host} />;
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.host - Object containing host information.
 * @param {string} props.host.name - Host's name.
 * @param {string} props.host.picture - URL of the host's picture.
 *
 * @returns {JSX.Element} Host component.
 */

const Host = ({ host }) => {
  const { name, picture } = host;

  const names = name.split(" ");

  return (
    <div className={styles.hostContainer}>
      <p className={styles.name}>
        <span>{names[0]}</span>
        <br />
        <span>{names[1]}</span>
      </p>
      <div
        className={styles.hostImage}
        style={{
          backgroundImage: `url(${picture})`,
        }}
      ></div>
    </div>
  );
};

Host.propTypes = {
  host: PropTypes.object.isRequired,
};

export { Host };
