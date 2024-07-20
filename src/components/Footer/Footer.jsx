import "./Footer.module.scss";

/**
 * Footer component to display the site's footer.
 *
 * @component
 * @example
 * return <Footer />;
 *
 * @returns {JSX.Element} Footer component.
 */

const Footer = () => {
  let now = new Date().getFullYear();
  return (
    <footer>
      <img src="./src/assets/logos/Logo_white.svg" alt="Logo Kasa" />
      <p>&copy; {now} Kasa. All right reserved</p>
    </footer>
  );
};

export { Footer };
