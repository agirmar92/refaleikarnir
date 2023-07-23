import { getTeamColorsWithWins } from "@/utils/proccessData";
import classNames from "classnames";
import TeamEmblem from "@/components/TeamEmblem";

const TeamsLeaderboard = () => {
  const teamColorsWithWins = getTeamColorsWithWins();

  return (
    <div className="grid grid-cols-3">
      {teamColorsWithWins.map((teamData, iTeamData) => (
        <>
          <span
            className={classNames("col-span-2", {
              "border-b border-winter pb-3":
                iTeamData !== teamColorsWithWins.length - 1,
              "pt-3": iTeamData !== 0,
            })}
          >
            <TeamEmblem team={teamData.color} />
          </span>
          <span
            key={`${teamData.color}-wins`}
            className={classNames("flex flex-col justify-center", {
              "border-b border-winter pb-3":
                iTeamData !== teamColorsWithWins.length - 1,
              "pt-3": iTeamData !== 0,
            })}
          >
            {teamData.wins} sigrar
          </span>
        </>
      ))}
    </div>
  );
};

export default TeamsLeaderboard;
