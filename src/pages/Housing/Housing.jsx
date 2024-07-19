import { useNavigate, useParams } from "react-router-dom";
import { Host } from "../../components/Host/Host";
import { Rating } from "../../components/Rating/Rating";
import { Slideshow } from "../../components/Slideshow/Slideshow";
import { Collapse } from "../../components/Collapse/Collapse";
import { Tag } from "../../components/Tag/Tag";
import housings from "../../data/housings.json";
import styles from "./Housing.module.scss";
import { useEffect } from "react";

const Housing = () => {
  const housingsList = JSON.parse(JSON.stringify(housings));
  const params = useParams();
  const navigate = useNavigate();

  const housing = housingsList.find((el) => el.id === params.housing);

  useEffect(() => {
    if (!housing) {
      navigate("/error", { relative: "patch" });
    }
  }, [housing, navigate]);

  return (
    housing && (
      <>
        <div className={styles.slideshow}>
          <Slideshow pictures={housing.pictures} />
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.definition}>
            <h1 className={styles.title}>{housing.title}</h1>
            <p className={styles.location}>{housing.location}</p>
            <div className={styles.tagsContainer}>
              {housing.tags.map((el, idx) => (
                <Tag key={idx} title={el} />
              ))}
            </div>
          </div>
          <div className={styles.hostRatingContainer}>
            <Host host={housing.host} />
            <Rating rating={housing.rating} />
          </div>
        </div>
        <div className={styles.collapseContainer}>
          <Collapse title="Description" text={housing.description} />
          <Collapse title="Équipements" text={housing.equipments} />
        </div>
      </>
    )
  );
};

export { Housing };
