import { Banner } from "../../components/Banner/Banner";
import { Collapse } from "../../components/Collapse/Collapse";
import { aboutList } from "../../data/about-list";
import styles from "./About.module.scss";

const About = () => {
  return (
    <>
      <Banner image="about_banner" />
      <div className={styles.container}>
        {aboutList.map((el, idx) => (
          <div key={idx} className={styles.items}>
            <Collapse text={el.content} title={el.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export { About };
