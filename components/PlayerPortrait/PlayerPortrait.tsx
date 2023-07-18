import { players } from "@/constants";
import { PlayerName } from "@/types";

const bgClassNameByPlayerName: Record<PlayerName, string> = {
  AEGIR: "bg-aegir",
  ARNAR: "bg-arnar",
  GAUI: "bg-gaui",
  DANNI: "bg-danni",
  VIKINGUR: "bg-vikingur",
  MAGGI: "bg-maggi",
  KRISSI: "bg-krissi",
  ATLI: "bg-atli",
  JONNI: "bg-jonni",
};

const PlayerPortrait = ({ player }: { player: PlayerName }) => {
  const playerDetails = players[player];

  return (
    <div className="flex justify-end items-center space-x-2">
      <p>{playerDetails.name}</p>
      <div
        className={`w-10 h-10 ${bgClassNameByPlayerName[player]} bg-no-repeat bg-black bg-contain bg-center rounded-full`}
      />
    </div>
  );
};

export default PlayerPortrait;
