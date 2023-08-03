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
    <div className="flex justify-center space-x-1">
      {winningTeams.map((team) => (
        <span key={team.teamColor} className="bg-winter-light p-1 rounded-lg">
          <FoxIcon color={team.teamColor} />
        </span>
      ))}
    </div>
  );
};

export default WinningTeamsEmblems;
