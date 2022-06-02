import Hands from "./Hands";
import Ad from "./Ad";
import DragBackground from "./DragBackground";
import About from "./About";
import { useState, useCallback, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";

const useMediaQueryWidth = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);

    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};
const useMediaQueryHeight = (height) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-height: ${height}px)`);

    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

const HomePage = ({ router }) => {
  const isSmallWidth = useMediaQueryWidth(961);
  const isSmallHeight = useMediaQueryHeight(650);

  return (
    <>
      {isSmallWidth ? (
        <div
          className="absolute top-0 left-0 bg-[#e9ebf0] w-[100%] h-[100%] "
          style={{ overflow: "hidden" }}
        ></div>
      ) : (
        <DragBackground />
      )}

      {!isSmallHeight && <Ad />}
      <motion.div
        layout
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <About isSmallWidth={isSmallWidth} />
      </motion.div>

      {isSmallWidth || isMobile || isSmallHeight ? null : <Hands />}
    </>
  );
};

export default HomePage;
