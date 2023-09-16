import { useEffect, useState } from "react";

const useMainContentWidth = () => {
  const [mainContentWidth, setMainContentWidth] = useState<
    number | undefined
  >();

  useEffect(() => {
    const contentElement = document.getElementById("main-content");
    if (contentElement === null) {
      return;
    }

    const handleResize = () => {
      setMainContentWidth(contentElement.clientWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mainContentWidth;
};

export default useMainContentWidth;
