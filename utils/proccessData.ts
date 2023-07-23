import { PlayerDetails, TeamColor } from "@/types";
import { players } from "@/constants";
import { results } from "@/data/results";

export const getPlayersWithWinsAndApps = () => {
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

export const getTeamColorsWithWins = () => {
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
