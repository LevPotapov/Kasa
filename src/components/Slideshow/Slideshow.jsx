import { useState } from "react";
import styles from "./Slideshow.module.scss";
import { useEffect, useRef } from "react";

const TRANSITION_DURATION = 250;

const Slideshow = ({ pictures }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState();
  const [width, setWidth] = useState();
  const [transitionDuration, setTransitionDuration] =
    useState(TRANSITION_DURATION);

  const windowElRef = useRef();

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

  useEffect(() => {
    if (transitionDuration === 0) {
      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION);
      }, TRANSITION_DURATION);
    }
  }, [transitionDuration]);

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

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };

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

export { Slideshow };
