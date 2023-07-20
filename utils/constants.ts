import { PlayerDetails, PlayerSlug, TeamColor } from "./types";

export const players: Record<PlayerSlug, PlayerDetails> = {
  aegir: {
    name: "Ægir",
    slug: "aegir",
  },
  arnar: {
    name: "Arnar",
    slug: "arnar",
  },
  atli: {
    name: "Atli",
    slug: "atli",
  },
  danni: {
    name: "Danni",
    slug: "danni",
  },
  gaui: {
    name: "Gaui",
    slug: "gaui",
  },
  maggi: {
    name: "Maggi",
    slug: "maggi",
  },
  vikingur: {
    name: "Víkingur",
    slug: "vikingur",
  },
  jonni: {
    name: "Jonni",
    slug: "jonni",
  },
  krissi: {
    name: "Krissi",
    slug: "krissi",
  },
};

export const actualTeamNames: Record<TeamColor, string> = {
  BLACK: "Svartir Refir",
  RED: "Rauðir Refir",
  WHITE: "Hvítir Refir",
  SILVER: "Silfur Refir",
};
