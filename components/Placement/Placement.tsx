import TrophyIcon from "@/icons/TrophyIcon";

const Placement = ({ place }: { place: 0 | 1 | 2 | 3 }) => {
  if (place === 0) {
    return <TrophyIcon />;
  }

  return (
    <div className="text-center">
      <p className="text-4xl font-bold">{place + 1}</p>
      <p className="text-sm -mt-1">sæti</p>
    </div>
  );
};

export default Placement;
