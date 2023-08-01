import {
  getOverallResultsStatsByPlayer,
  getTeamColorsWithPlayedCountByPlayer,
} from "@/utils/proccessData";
import { PlayerSlug } from "@/utils/types";
import Placement from "@/components/Placement";
import FoxIcon from "@/icons/FoxIcon";

const PlayerOverallStats = ({ slug }: { slug: PlayerSlug }) => {
  const teamColorsWithPlayedCount = getTeamColorsWithPlayedCountByPlayer(slug);
  const overallResultsStats = getOverallResultsStatsByPlayer(slug);

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col items-center border-r border-winter">
        {Object.values(overallResultsStats).map((countInPlace, place) => {
          if (place < 0 || place > 3) return;
          return (
            <span className="flex items-center" key={`${slug}-place-${place}`}>
              <span className="w-[60px]">
                <Placement place={place as 0 | 1 | 2 | 3} />
              </span>
              x {countInPlace}
            </span>
          );
        })}
      </div>
      <div className="flex flex-col items-center">
        {teamColorsWithPlayedCount.map((team) => (
          <span
            className="flex items-center space-x-2"
            key={`${slug}-team-${team.color}`}
          >
            <FoxIcon color={team.color} size="lg" />
            <span>x {team.count}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default PlayerOverallStats;
