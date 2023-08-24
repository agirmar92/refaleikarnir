import { PlayerDetails, PlayerSlug, TeamColor } from "./types";

export const players: Record<PlayerSlug, PlayerDetails> = {
  aegir: {
    name: "Ægir",
    slug: "aegir",
    coverPhotoUrl:
      "https://refaleikarnir.sirv.com/playerPhotos/aegir.jpg",
  },
  arnar: {
    name: "Arnar",
    slug: "arnar",
    coverPhotoUrl:
      "https://refaleikarnir.sirv.com/playerPhotos/arnar.jpg",
  },
  atli: {
    name: "Atli",
    slug: "atli",
    coverPhotoUrl:
      "https://refaleikarnir.sirv.com/playerPhotos/atli.jpg",
  },
  danni: {
    name: "Danni",
    slug: "danni",
    coverPhotoUrl:
      "https://refaleikarnir.sirv.com/playerPhotos/danni.jpg",
  },
  gaui: {
    name: "Gaui",
    slug: "gaui",
    coverPhotoUrl:
      "https://refaleikarnir.sirv.com/playerPhotos/gaui.jpg",
  },
  jonni: {
    name: "Jonni",
    slug: "jonni",
    coverPhotoUrl:
      "https://refaleikarnir.sirv.com/playerPhotos/jonni.jpg",
  },
  krissi: {
    name: "Krissi",
    slug: "krissi",
    coverPhotoUrl:
      "https://refaleikarnir.sirv.com/playerPhotos/krissi.jpg",
  },
  maggi: {
    name: "Maggi",
    slug: "maggi",
    coverPhotoUrl:
      "https://refaleikarnir.sirv.com/playerPhotos/maggi.jpg",
  },
  vikingur: {
    name: "Víkingur",
    slug: "vikingur",
    coverPhotoUrl:
      "https://refaleikarnir.sirv.com/playerPhotos/vikingur.jpg",
  },
};

export const actualTeamNames: Record<TeamColor, string> = {
  BLACK: "Svartir Refir",
  RED: "Rauðir Refir",
  WHITE: "Hvítir Refir",
  SILVER: "Silfur Refir",
};
