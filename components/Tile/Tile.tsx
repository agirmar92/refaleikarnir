import { ReactNode } from "react";

const Tile = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="text-black w-full bg-tile rounded-sm shadow-lg px-3 py-5">
      {children}
    </div>
  );
};

export default Tile;
