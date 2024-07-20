import { Banner } from "../../components/Banner/Banner";
import { Collapse } from "../../components/Collapse/Collapse";
import { aboutList } from "../../data/about-list";
import styles from "./About.module.scss";

/**
 * "About" page displaying a banner and a list of information using Collapse components.
 *
 * @component
 * @example
 * return <About />;
 *
 * @returns {JSX.Element} "About" page.
 */

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
