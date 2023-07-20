import { actualTeamNames } from "@/constants";
import { TeamColor } from "@/types";
import FoxIcon from "@/icons/FoxIcon";

const TeamEmblem = ({ team }: { team: TeamColor }) => {
  const teamName = actualTeamNames[team].split(" ");

  return (
    <div className="flex flex-col space-y-1 flex-wrap content-center justify-center">
      <FoxIcon size="lg" color={team} />
      <h3 className="text-center small-caps font-semibold text-lg leading-4">
        {teamName[0]}
        <br />
        {teamName[1]}
      </h3>
    </div>
  );
};

export default TeamEmblem;
