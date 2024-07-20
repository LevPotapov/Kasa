import housings from "../../data/housings.json";
import { Banner } from "../../components/Banner/Banner";
import { Card } from "../../components/Card/Card";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

/**
 * Home page displaying a banner and a gallery of cards using Card and Banner components.
 *
 * @component
 * @example
 * return <Home />;
 *
 * @returns {JSX.Element} Home page.
 */

const Home = () => {
  const housingList = JSON.parse(JSON.stringify(housings));

  return (
    <>
      <Banner image="home_banner" text="Chez vous, partout et ailleurs" />
      <div className={styles.gallery}>
        {housingList.map((el) => {
          return (
            <Link key={el.id} to={`${el.id}`}>
              <Card title={el.title} src={el.cover} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export { Home };
