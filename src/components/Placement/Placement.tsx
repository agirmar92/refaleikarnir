import TrophyIcon from "@/icons/TrophyIcon";

const Placement = ({ place }: { place: 1 | 2 | 3 | 4 }) => {
  if (place === 1) {
    return <TrophyIcon />;
  }

  return (
    <div className="text-center">
      <p className="text-4xl font-bold">{place}</p>
      <p className="text-sm -mt-1">sæti</p>
    </div>
  );
};

export default Placement;
