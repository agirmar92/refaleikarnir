import { ReactNode } from "react";

const CoverPhoto = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[100vw] h-[100vw] relative z-0">
      <div className="absolute bottom-0 left-0 right-0 z-20 m-3 box-border">{children}</div>
      <div className="w-full h-[100vw] bg-winter opacity-50 fixed z-10" />
      <div className="w-full h-[100vw] bg-coverPhoto opacity-50 bg-contain fixed" />
    </div>
  );
};

export default CoverPhoto;
