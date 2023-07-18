"use client";

import TeamResult from "@/components/TeamResult";
import Tile from "@/components/Tile";
import { useYear } from "@/contexts/YearContext";
import { results } from "@/data/results";

const Scoreboard = () => {
  const { gamesIndex } = useYear();
  const { teams } = results[gamesIndex];
  const teamPlacement = results[gamesIndex].summer.teamPlacement.sort(
    (teamA, teamB) => teamA.place - teamB.place
  );
  return (
    <>
      {teamPlacement.map((team) => {
        const { team: teamColor, place } = team;
        const teamMembers = teams[teamColor];
        if (!teamMembers) {
          return null;
        }
        return (
          <Tile key={teamColor}>
            <TeamResult
              team={teamColor}
              teamMembers={teamMembers}
              place={place}
            />
          </Tile>
        );
      })}
    </>
  );
};

export default Scoreboard;
