import { PlayerDetails, PlayerSlug, TeamColor } from "@/types";
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
          (playerWithWinData) => playerWithWinData.slug === player.slug,
        );
        if (playerToUpdate) {
          playerToUpdate.apps = playerToUpdate.apps + 1;
        }
      }),
    );

    // Increase games won for players that won the current game
    const winningTeams = gameResult.teams.filter(
      (team) => team.teamPlace === 0,
    );
    winningTeams.forEach((team) => {
      team.teamPlayers.forEach((player) => {
        const playerToUpdate = playersWithData.find(
          (playerWithWinData) => playerWithWinData.slug === player.slug,
        );
        if (playerToUpdate) {
          playerToUpdate.wins = playerToUpdate.wins + 1;
        }
      });
    });
  });

  return playersWithData.sort(
    (playerA, playerB) => playerB.wins - playerA.wins,
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
      (team) => team.teamPlace === 0,
    );
    winningTeams.forEach((team) => {
      teamsWithWins[team.teamColor].wins =
        teamsWithWins[team.teamColor].wins + 1;
    });
  });

  return Object.values(teamsWithWins).sort(
    (teamA, teamB) => teamB.wins - teamA.wins,
  );
};

export const getTeamColorsWithPlayedCountByPlayer = (slug: PlayerSlug) => {
  const teamColorsWithPlayedCount: Record<
    TeamColor,
    { color: TeamColor; count: number }
  > = {
    BLACK: { color: "BLACK", count: 0 },
    WHITE: { color: "WHITE", count: 0 },
    RED: { color: "RED", count: 0 },
    SILVER: { color: "SILVER", count: 0 },
  };
  results.forEach((result) => {
    const playerTeam = result.teams.find((team) =>
      team.teamPlayers.some((player) => player.slug === slug),
    );
    if (!playerTeam) {
      return;
    }
    teamColorsWithPlayedCount[playerTeam.teamColor].count =
      teamColorsWithPlayedCount[playerTeam.teamColor].count + 1;
  });
  return Object.values(teamColorsWithPlayedCount).sort(
    (teamA, teamB) => teamB.count - teamA.count,
  );
};

export const getOverallResultsStatsByPlayer = (slug: PlayerSlug) => {
  const overallResultsStats = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  };
  results.forEach((result) => {
    const playerTeam = result.teams.find((team) =>
      team.teamPlayers.some((player) => player.slug === slug),
    );
    if (!playerTeam) {
      return;
    }
    overallResultsStats[playerTeam.teamPlace] =
      overallResultsStats[playerTeam.teamPlace] + 1;
  });
  return overallResultsStats;
};

export const getTeammateCountByPlayer = (slug: PlayerSlug) => {
  const otherPlayersWithCount: { slug: PlayerSlug; count: number }[] =
    Object.values(players)
      .filter((player) => player.slug !== slug)
      .map((player) => {
        return { slug: player.slug, count: 0 };
      });

  results.forEach((result) => {
    const playerTeam = result.teams.find((team) =>
      team.teamPlayers.some((player) => player.slug === slug),
    );
    if (!playerTeam) {
      return;
    }
    playerTeam.teamPlayers.forEach((player) => {
      if (player.slug !== slug) {
        const teammate = otherPlayersWithCount.find(
          (playerWithCount) => playerWithCount.slug === player.slug,
        );
        if (!teammate) {
          return;
        }
        teammate.count = teammate.count + 1;
      }
    });
  });

  return otherPlayersWithCount.sort(
    (playerA, playerB) => playerB.count - playerA.count,
  );
};
