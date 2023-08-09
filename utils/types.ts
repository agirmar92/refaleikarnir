export type TeamColor = "BLACK" | "WHITE" | "RED" | "SILVER";

export type PlayerSlug =
  | "aegir"
  | "arnar"
  | "atli"
  | "danni"
  | "gaui"
  | "maggi"
  | "vikingur"
  | "jonni"
  | "krissi";

export type PlayerDetails = { name: string; slug: PlayerSlug };

export type ChallengeAndResults = {
  name: string;
  emoji: string;
  teamResults: { color: TeamColor; points: number | null }[];
};

export type Result = {
  year: number;
  teams: {
    teamPlayers: PlayerDetails[];
    teamPlace: 0 | 1 | 2 | 3;
    teamColor: TeamColor;
  }[];
  challenges: ChallengeAndResults[] | string[];
  season?: "summer" | "winter" | undefined;
};
