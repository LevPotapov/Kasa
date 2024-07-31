import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Slideshow.module.scss";

/**
 * Slideshow Component
 *
 * A component that displays a slideshow of images with navigation controls to cycle through the images.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string[]} props.pictures - An array of image URLs to be displayed in the slideshow.
 *
 * @example
 * // Example usage:
 * const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
 * <Slideshow pictures={images} />
 *
 * @returns {JSX.Element} The Slideshow component.
 */

const Slideshow = ({ pictures }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(pictures.length - 1);
  const [nextImage, setNextImage] = useState(1);
  const [moveCurrent, setMoveCurrent] = useState();
  const [movePrev, setMovePrev] = useState();
  const [moveNext, setMoveNext] = useState();

  const handleLeftArrowClick = () => {
    setMoveCurrent(styles.right);
    setMovePrev(styles.center);
    setTimeout(() => {
      setMoveCurrent();
      setMovePrev();
      setCurrentImage(prevImage);
      setNextImage(currentImage);
      setPrevImage(prevImage === 0 ? pictures.length - 1 : prevImage - 1);
    }, 350);
  };

  const handleRightArrowClick = () => {
    setMoveCurrent(styles.left);
    setMoveNext(styles.left);
    setTimeout(() => {
      setMoveCurrent();
      setMoveNext();
      setCurrentImage(nextImage);
      setNextImage(nextImage === pictures.length - 1 ? 0 : nextImage + 1);
      setPrevImage(currentImage);
    }, 350);
  };

  return pictures.length > 1 ? (
    <div className={styles.mainContainer}>
      <div
        className={`${styles.prevImage} ${movePrev}`}
        style={{
          backgroundImage: `url(${pictures[prevImage]})`,
        }}
      >
        <span>{`${prevImage + 1}/${pictures.length}`}</span>
      </div>
      <img
        src="./src/assets/logos/Vector_left.svg"
        className={styles.arrowLeft}
        onClick={handleLeftArrowClick}
      />
      <div
        className={`${styles.currentImage} ${moveCurrent}`}
        style={{
          backgroundImage: `url(${pictures[currentImage]})`,
        }}
      >
        <span>{`${currentImage + 1}/${pictures.length}`}</span>
      </div>
      <img
        src="./src/assets/logos/Vector_right.svg"
        className={styles.arrowRight}
        onClick={handleRightArrowClick}
      />
      <div
        className={`${styles.nextImage} ${moveNext}`}
        style={{
          backgroundImage: `url(${pictures[nextImage]})`,
        }}
      >
        <span>{`${nextImage + 1}/${pictures.length}`}</span>
      </div>
    </div>
  ) : (
    <div className={styles.mainContainer}>
      <div
        className={styles.currentImage}
        style={{
          backgroundImage: `url(${pictures[0]})`,
        }}
      ></div>
    </div>
  );
};

Slideshow.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export { Slideshow };
