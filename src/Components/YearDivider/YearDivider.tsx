import classNames from "classnames";
import React from "react";

const beforeClassNames =
  "before:content-['Vetur'] before:right-[calc(50%+60px)] before:bottom-4 before:absolute before:text-[22px] before:font-gantari";
const afterClassNames =
  "after:content-['Sumar'] after:left-[calc(50%+60px)] after:top-4 after:absolute after:text-[22px] after:font-gantari";

const YearDivider = ({ year }: { year: string }) => {
  return (
    <div
      className={classNames(
        "absolute w-screen text-[42px] leading-[42px] text-center z-10 text-white text-shadow font-tilliana",
        beforeClassNames,
        afterClassNames
      )}
    >
      {year}
    </div>
  );
};

export default YearDivider;
