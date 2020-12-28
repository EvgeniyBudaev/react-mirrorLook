import { useState, useCallback, useRef, useEffect } from "react";

const useWindowResize = ({ timerLength }) => {
  //console.log("useWindowResize");

  const [isOffset, setIsOffset] = useState(false);
  const timer = useRef();

  const handleScrollEvent = useCallback(() => {
    const offset = window.pageYOffset;
    setIsOffset(offset > 100);
  }, []);

  const handleScroll = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(handleScrollEvent, timerLength);
  }, [handleScrollEvent, timerLength]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, timerLength]);

  return isOffset;
};

export default useWindowResize


// Вариант №2 с использованием lodash

// import {debounce} from 'lodash'
// const useWindowResize = () => {
//   console.log("useWindowResize");
//
//   const [isOffset, setIsOffset] = useState(false);
//
//
//   const handleScrollEvent = useCallback(() => {
//     const offset = window.pageYOffset;
//     let isNewOffset;
//     offset > 100 ? isNewOffset = true : isNewOffset = false
//     setIsOffset(isNewOffset);
//   }, []);
//
//   useEffect(() => {
//     window.addEventListener("scroll", debounce(handleScrollEvent, 100))
//   }, []);
//
//   return isOffset;
// };
//
// export default useWindowResize
