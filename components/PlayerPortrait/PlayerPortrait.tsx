import { PlayerDetails, PlayerSlug } from "@/types";

const bgClassNameByPlayerSlug: Record<PlayerSlug, string> = {
  aegir: "bg-aegir",
  arnar: "bg-arnar",
  gaui: "bg-gaui",
  danni: "bg-danni",
  vikingur: "bg-vikingur",
  maggi: "bg-maggi",
  krissi: "bg-krissi",
  atli: "bg-atli",
  jonni: "bg-jonni",
};

const PlayerPortrait = ({ player }: { player: PlayerDetails }) => {
  return (
    <div className="flex justify-end items-center space-x-2">
      <p>{player.name}</p>
      <div
        className={`w-10 h-10 ${
          bgClassNameByPlayerSlug[player.slug]
        } bg-no-repeat bg-black bg-contain bg-center rounded-full`}
      />
    </div>
  );
};

export default PlayerPortrait;
