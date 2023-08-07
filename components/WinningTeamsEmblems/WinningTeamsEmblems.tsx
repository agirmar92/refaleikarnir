"use client";

import { useYear } from "@/contexts/YearContext";
import { results } from "@/data/results";
import FoxIcon from "@/icons/FoxIcon";

const WinningTeamsEmblems = () => {
  const { gamesIndex } = useYear();
  const winningTeams = results[gamesIndex].teams.filter(
    (team) => team.teamPlace === 0
  );

  return (
    <div className="flex justify-center">
      <span className="flex space-x-1 bg-winter-light p-1 rounded-lg">
        {winningTeams.map((team) => (
          <FoxIcon key={team.teamColor} color={team.teamColor} />
        ))}
      </span>
    </div>
  );
};

export default WinningTeamsEmblems;
