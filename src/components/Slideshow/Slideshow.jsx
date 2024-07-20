import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Slideshow.module.scss";
import { useEffect, useRef } from "react";

const TRANSITION_DURATION = 250;

/**
 * Slideshow component displaying images in a loop with the ability to switch between them.
 *
 * @component
 * @example
 * const pictures = ["image1.jpg", "image2.jpg", "image3.jpg"];
 * return <Slideshow pictures={pictures} />;
 *
 * @param {Object} props - Component properties.
 * @param {string[]} props.pictures - Array of image URLs.
 *
 * @returns {JSX.Element} Slideshow component.
 */

const Slideshow = ({ pictures }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState();
  const [width, setWidth] = useState();
  const [transitionDuration, setTransitionDuration] =
    useState(TRANSITION_DURATION);

  const windowElRef = useRef();

  /**
   * Hook for creating an array of slideshow pages.
   *
   * Creates an array of pages, each representing an image from the `pictures` array.
   * Adds duplicates of the first and last image at the beginning and end of the array to create a cyclical animation.
   *
   */

  useEffect(() => {
    let i = 1;
    setPages([
      <div
        className={styles.page}
        key={0}
        style={{
          height: "100%",
          minWidth: "100%",
          maxWidth: "100%",
          backgroundImage: `url(${pictures[pictures.length - 1]})`,
        }}
      >
        <span>
          {pictures.length}/{pictures.length}
        </span>
      </div>,
      ...pictures.map((el) => {
        return (
          <div
            className={styles.page}
            key={i++}
            style={{
              height: "100%",
              minWidth: "100%",
              maxWidth: "100%",
              backgroundImage: `url(${el})`,
            }}
          >
            <span>
              {i}/{pictures.length}
            </span>
          </div>
        );
      }),
      <div
        className={styles.page}
        key={i}
        style={{
          height: "100%",
          minWidth: "100%",
          maxWidth: "100%",
          backgroundImage: `url(${pictures[0]})`,
        }}
      >
        <span>1/{pictures.length}</span>
      </div>,
    ]);
    return;
  }, [pictures]);

  /**
   * Hook for handling window resize.
   *
   * Updates the slide width (`width`) and offset (`offset`) when the window is resized.
   *
   */

  useEffect(() => {
    const resizeHandler = () => {
      const _width = windowElRef.current.offsetWidth;

      setWidth(_width);
      setOffset(-1 * width);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [width]);

  /**
   * Hook for managing transitions (animations).
   *
   * Sets the value of `transitionDuration` to `TRANSITION_DURATION`
   * after it has been set to 0.
   *
   */

  useEffect(() => {
    if (transitionDuration === 0) {
      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION);
      }, TRANSITION_DURATION);
    }
  }, [transitionDuration]);

  /**
   * Hook for managing slide positions.
   *
   * Moves slides to the beginning or end when they reach the end.
   *
   */

  useEffect(() => {
    if (offset == 0) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-(width * pictures.length));
      }, TRANSITION_DURATION);
      return;
    }

    if (offset == -(width * (pictures.length + 1))) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-1 * width);
      }, TRANSITION_DURATION);
      return;
    }
  }, [offset, width, pictures.length]);

  /**
   * Left arrow click event handler.
   *
   */

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };

  /**
   * Right arrow click event handler.
   *
   */

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (pages.length + 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return pictures.length > 1 ? (
    <div className={styles.mainContainer}>
      <img
        src="./src/assets/logos/Vector_left.svg"
        className={styles.arrowLeft}
        onClick={handleLeftArrowClick}
      />
      <div className={styles.window} ref={windowElRef}>
        <div
          className={styles.allPagesContainer}
          style={{
            transitionDuration: `${transitionDuration}ms`,
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <img
        src="./src/assets/logos/Vector_right.svg"
        className={styles.arrowRight}
        onClick={handleRightArrowClick}
      />
    </div>
  ) : (
    <div className={styles.mainContainer}>
      <div className={styles.window} ref={windowElRef}>
        <div className={styles.allPagesContainer}>
          <div
            className={styles.page}
            style={{
              height: "100%",
              minWidth: "100%",
              maxWidth: "100%",
              backgroundImage: `url(${pictures[0]})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

Slideshow.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export { Slideshow };
