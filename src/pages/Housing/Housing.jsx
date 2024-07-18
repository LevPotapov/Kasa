import { Slideshow } from "../../components/Slideshow/Slideshow";
import housings from "../../data/housings.json";
import "./Housing.scss";

const Housing = () => {
  const housingsList = JSON.parse(JSON.stringify(housings));

  return <Slideshow pictures={housingsList[1].pictures} />;
};

export { Housing };
