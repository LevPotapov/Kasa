import { Host } from "../../components/Host/Host";
import { Rating } from "../../components/Rating/Rating";
import { Slideshow } from "../../components/Slideshow/Slideshow";
import { Collapse } from "../../components/Collapse/Collapse";
import { Tag } from "../../components/Tag/Tag";
import housings from "../../data/housings.json";
import styles from "./Housing.module.scss";

const Housing = () => {
  const housingsList = JSON.parse(JSON.stringify(housings));

  return (
    <>
      <div className={styles.slideshow}>
        <Slideshow pictures={housingsList[1].pictures} />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.definition}>
          <h1 className={styles.title}>{housingsList[1].title}</h1>
          <p className={styles.location}>{housingsList[1].location}</p>
          <div className={styles.tagsContainer}>
            <Tag title="Cozy" />
            <Tag title="Cozy" />
            <Tag title="Cozy" />
          </div>
        </div>
        <div className={styles.hostRatingContainer}>
          <Host host={housingsList[1].host} />
          <Rating rating={housingsList[1].rating} />
        </div>
      </div>
      <div className={styles.collapseContainer}>
        <Collapse title="Description" text={housingsList[1].description} />
        <Collapse title="Équipements" text={housingsList[1].equipments} />
      </div>
    </>
  );
};

export { Housing };
