import logements from "../../data/logements.json";
import { useResize } from "../../utils/useResize";
import { Banner } from "../Banner/Banner";
import { Card } from "../Card/Card";
import styles from "./Home.module.scss";

const Home = () => {
  const housingList = JSON.parse(JSON.stringify(logements));
  const isMobileScreen = useResize(576);
  console.log(isMobileScreen);
  return (
    <>
      <Banner
        src="./src/assets/images/banners/Image_home.png"
        text="Chez vous, partout et ailleurs"
      />
      <div className={styles.gallery}>
        {housingList.map((el) => {
          return <Card key={el.id} title={el.title} src={el.cover} />;
        })}
      </div>
    </>
  );
};

export { Home };
