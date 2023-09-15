import { useEffect, useState } from "react";

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);
  const element = document.querySelector("div#main-content");

  useEffect(() => {
    if (element === null) {
      return;
    }

    const handleScroll = () => {
      setScrollY(element.scrollTop);
    };

    handleScroll();

    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [element]);

  return scrollY;
};

export default useScrollY;
