export type TeamColor = "BLACK" | "WHITE" | "RED" | "SILVER";

export type PlayerName =
  | "AEGIR"
  | "ARNAR"
  | "ATLI"
  | "DANNI"
  | "GAUI"
  | "MAGGI"
  | "VIKINGUR"
  | "JONNI"
  | "KRISSI";

export type PlayerDetails = { name: string; slug: string };

export type EventResults = {
  challenges: string[];
  teamPlacement: { team: TeamColor; place: number }[];
};

export type Result = {
  year: number;
  teams: { [key in TeamColor]?: PlayerDetails[] };
  winter: EventResults;
  summer: EventResults;
};
