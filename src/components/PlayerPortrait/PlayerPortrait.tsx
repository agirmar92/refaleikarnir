import { players } from "@/constants";
import { PlayerName } from "@/types";

const PlayerPortrait = ({ player }: { player: PlayerName }) => {
  const playerDetails = players[player];

  return (
    <div className="flex justify-end items-center space-x-2">
      <p>{playerDetails.name}</p>
      <div
        className={`w-10 h-10 bg-${playerDetails.slug} bg-no-repeat bg-black bg-contain bg-center rounded-full`}
      />
    </div>
  );
};

export default PlayerPortrait;
