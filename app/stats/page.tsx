import PlayerPortrait from "@/components/PlayerPortrait";
import TeamEmblem from "@/components/TeamEmblem";
import Tile from "@/components/Tile";
import TileTitle from "@/components/TileTitle";
import { players } from "@/constants";
import { results } from "@/data/results";
import { PlayerDetails, TeamColor } from "@/types";
import classNames from "classnames";

const getPlayersWithWinsAndApps = () => {
  // Initialize player data with wins and apps
  const playersWithData: (PlayerDetails & { wins: number; apps: number })[] =
    Object.values(players).map((player) => {
      return { ...player, wins: 0, apps: 0 };
    });

  // Loop through all games and add results needed
  results.forEach((gameResult) => {
    // Increase appearance for players in current game
    gameResult.teams.forEach((team) =>
      team.teamPlayers.forEach((player) => {
        const playerToUpdate = playersWithData.find(
          (playerWithWinData) => playerWithWinData.slug === player.slug
        );
        if (playerToUpdate) {
          playerToUpdate.apps = playerToUpdate.apps + 1;
        }
      })
    );

    // Increase games won for players that won the current game
    const winningTeams = gameResult.teams.filter(
      (team) => team.teamPlace === 0
    );
    winningTeams.forEach((team) => {
      team.teamPlayers.forEach((player) => {
        const playerToUpdate = playersWithData.find(
          (playerWithWinData) => playerWithWinData.slug === player.slug
        );
        if (playerToUpdate) {
          playerToUpdate.wins = playerToUpdate.wins + 1;
        }
      });
    });
  });

  return playersWithData.sort(
    (playerA, playerB) => playerB.wins - playerA.wins
  );
};

const getTeamColorsWithWins = () => {
  // Initialize teams data with wins
  const teamsWithWins: Record<TeamColor, { color: TeamColor; wins: number }> = {
    BLACK: { color: "BLACK", wins: 0 },
    WHITE: { color: "WHITE", wins: 0 },
    RED: { color: "RED", wins: 0 },
    SILVER: { color: "SILVER", wins: 0 },
  };

  // Loop through all games and add results needed
  results.forEach((gameResult) => {
    // Increase games won for the team colors that won
    const winningTeams = gameResult.teams.filter(
      (team) => team.teamPlace === 0
    );
    winningTeams.forEach((team) => {
      teamsWithWins[team.teamColor].wins =
        teamsWithWins[team.teamColor].wins + 1;
    });
  });

  return Object.values(teamsWithWins).sort(
    (teamA, teamB) => teamB.wins - teamA.wins
  );
};

const StatsPage = () => {
  const playersWithWinsAndApps = getPlayersWithWinsAndApps();
  const teamColorsWithWins = getTeamColorsWithWins();

  return (
    <div className="p-3 space-y-3">
      <TileTitle>Flestir sigrar (leikmenn)</TileTitle>
      <Tile>
        <div className="grid grid-cols-5">
          {playersWithWinsAndApps.map((playerData, iPlayerData) => (
            <>
              <span
                className={classNames("col-span-2", {
                  "border-b border-winter pb-3":
                    iPlayerData !== playersWithWinsAndApps.length - 1,
                  "pt-3": iPlayerData !== 0,
                })}
              >
                <PlayerPortrait player={playerData} reverseContent />
              </span>
              <span
                key={`${playerData.slug}-wins-and-apps`}
                className={classNames(
                  "col-span-3 flex flex-col justify-center",
                  {
                    "border-b border-winter pb-3":
                      iPlayerData !== playersWithWinsAndApps.length - 1,
                    "pt-3": iPlayerData !== 0,
                  }
                )}
              >
                {playerData.wins} sigrar í {playerData.apps}{" "}
                {playerData.apps > 1 ? "leikjum" : "leik"}
              </span>
            </>
          ))}
        </div>
      </Tile>
      <TileTitle>Flestir sigrar (litur)</TileTitle>
      <Tile>
        <div className="grid grid-cols-3">
          {teamColorsWithWins.map((teamData, iTeamData) => (
            <>
              <span
                className={classNames("col-span-2", {
                  "border-b border-winter pb-3": iTeamData !== teamColorsWithWins.length - 1,
                  "pt-3": iTeamData !== 0,
                })}
              >
                <TeamEmblem team={teamData.color} />
              </span>
              <span
                key={`${teamData.color}-wins`}
                className={classNames("flex flex-col justify-center", {
                  "border-b border-winter pb-3": iTeamData !== teamColorsWithWins.length - 1,
                  "pt-3": iTeamData !== 0,
                })}
              >
                {teamData.wins} sigrar
              </span>
            </>
          ))}
        </div>
      </Tile>
    </div>
  );
};

export default StatsPage;
