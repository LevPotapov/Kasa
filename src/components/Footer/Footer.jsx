import "./Footer.module.scss";

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
