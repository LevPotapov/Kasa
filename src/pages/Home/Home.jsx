import housings from "../../data/housings.json";
import { Banner } from "../../components/Banner/Banner";
import { Card } from "../../components/Card/Card";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

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
