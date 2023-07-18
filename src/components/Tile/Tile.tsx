import { ReactNode } from "react";

const Tile = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="text-black w-full h-40 bg-tile rounded-[4px] shadow-lg p-3">
      {children}
    </div>
  );
};

export default Tile;
