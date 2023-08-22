import Link from "next/link";
import { PlayerDetails } from "@/types";
import DynamicPlayerPortrait from "./DynamicPlayerPortrait";

const PlayerPortrait = ({
  player,
  reverseContent = false,
}: {
  player: PlayerDetails;
  reverseContent?: boolean;
}) => {
  let content = [
    <p key={`playerName-${player.slug}`}>{player.name}</p>,
    <DynamicPlayerPortrait
      key={`playerPhoto-${player.slug}`}
      player={player}
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
