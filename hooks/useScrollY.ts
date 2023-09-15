import { useEffect, useState } from "react";

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const element = document.querySelector("div#main-content");

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
  }, [document]);

  return scrollY;
};

export default useScrollY;
