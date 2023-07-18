import ArrowIcon from "@/icons/ArrowIcon";

const YearSelector = () => {
  return (
    <div className="uppercase text-center text-4xl font-extrabold flex">
      <ArrowIcon orientation="left" />
      <h2 className="flex-1">2023</h2>
      <ArrowIcon orientation="right" />
    </div>
  );
};

export default YearSelector;
