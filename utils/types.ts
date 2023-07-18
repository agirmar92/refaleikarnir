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

export type EventResults = {
  challenges: string[];
  teamPlacement: { team: TeamColor; place: 0 | 1 | 2 | 3 }[];
};

export type Result = {
  year: number;
  teams: { [key in TeamColor]?: PlayerDetails[] };
  winter: EventResults;
  summer: EventResults;
};
