import Link from "next/link";
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

const PlayerPortrait = ({
  player,
  reverseContent = false,
}: {
  player: PlayerDetails;
  reverseContent?: boolean;
}) => {
  let content = [
    <p key={`playerName-${player.slug}`}>{player.name}</p>,
    <div
      key={`playerPhoto-${player.slug}`}
      className={`w-10 h-10 ${
        bgClassNameByPlayerSlug[player.slug]
      } bg-no-repeat bg-black bg-contain bg-center rounded-full`}
    />,
  ];
  if (reverseContent) {
    content = content.reverse();
  }

  return (
    <Link
      className="flex items-center space-x-2"
      href={`/player/${player.slug}`}
    >
      {content.map((child) => child)}
    </Link>
  );
};

export default PlayerPortrait;
