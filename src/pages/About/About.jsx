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
      <div className={styles.bannerContainer}>
        <Banner image="about_banner" />
      </div>
      <div className={styles.container}>
        {aboutList.map((el, idx) => (
          <Collapse key={idx} text={el.content} title={el.title} />
        ))}
      </div>
    </>
  );
};

export { About };
