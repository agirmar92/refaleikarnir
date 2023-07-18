import TeamEmblem from "@/components/TeamEmblem";
import PlayerPortrait from "@/components/PlayerPortrait";
import Placement from "@/components/Placement";
import { PlayerDetails, TeamColor } from "@/types";

const TeamResult = ({
  team,
  teamMembers,
  place,
}: {
  team: TeamColor;
  teamMembers: PlayerDetails[];
  place: 0 | 1 | 2 | 3;
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
        {teamMembers.map((player) => (
          <PlayerPortrait key={player.slug} player={player} />
        ))}
      </span>
    </div>
  );
};

export default TeamResult;
