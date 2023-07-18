import TeamEmblem from "@/components/TeamEmblem";
import PlayerPortrait from "@/components/PlayerPortrait";
import Placement from "@/components/Placement";
import { PlayerName, TeamColor } from "@/types";

const playersByTeam: Record<TeamColor, PlayerName[]> = {
  BLACK: ["VIKINGUR", "ARNAR"],
  SILVER: ["AEGIR", "ATLI"],
  RED: ["MAGGI", "DANNI"],
  WHITE: ["GAUI", "KRISSI"],
};

const TeamResult = ({
  team,
  place,
}: {
  team: TeamColor;
  place: 1 | 2 | 3 | 4;
}) => {
  return (
    <div className="flex h-full space-x-2">
      <span className="flex-1 self-center">
        <TeamEmblem team={team} />
      </span>
      <span className="w-[60px] flex flex-col justify-center">
        <Placement place={place} />
      </span>
      <span className="flex-1 self-center flex flex-col justify-center space-y-1">
        {playersByTeam[team].map((player) => (
          <PlayerPortrait player={player} />
        ))}
      </span>
    </div>
  );
};

export default TeamResult;
