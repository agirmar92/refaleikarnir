import { PlayerDetails, PlayerName, TeamColor } from "./types";

export const players: Record<PlayerName, PlayerDetails> = {
  AEGIR: {
    name: "Ægir",
    slug: "aegir",
  },
  ARNAR: {
    name: "Arnar",
    slug: "arnar",
  },
  ATLI: {
    name: "Atli",
    slug: "atli",
  },
  DANNI: {
    name: "Danni",
    slug: "danni",
  },
  GAUI: {
    name: "Gaui",
    slug: "gaui",
  },
  MAGGI: {
    name: "Maggi",
    slug: "maggi",
  },
  VIKINGUR: {
    name: "Víkingur",
    slug: "vikingur",
  },
  JONNI: {
    name: "Jonni",
    slug: "jonni",
  },
  KRISSI: {
    name: "Krissi",
    slug: "krissi",
  },
};

export const actualTeamNames: Record<TeamColor, string> = {
  BLACK: "Svartir refir",
  RED: "Rauðir refir",
  WHITE: "Hvítir refir",
  SILVER: "Silfur refir",
};
