import FoxIcon from "@/icons/FoxIcon";
import MenuIcon from "@/icons/MenuIcon";

const Header = () => {
  return (
    <header className="flex justify-between h-[72px] px-5 items-center z-10 absolute top-0 left-0 w-full">
      <div className="flex space-x-1">
        <FoxIcon />
        <h1 className="small-caps text-xl font-medium">Refaleikarnir</h1>
      </div>
      <MenuIcon />
    </header>
  );
};

export default Header;
