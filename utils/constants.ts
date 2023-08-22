import { PlayerDetails, PlayerSlug, TeamColor } from "./types";

export const players: Record<PlayerSlug, PlayerDetails> = {
  aegir: {
    name: "Ægir",
    slug: "aegir",
    coverPhotoUrl:
      "https://drive.google.com/uc?id=1ebicq-cQL8DNptESeyShpAgK9tNYLe9q",
  },
  arnar: {
    name: "Arnar",
    slug: "arnar",
    coverPhotoUrl:
      "https://drive.google.com/uc?id=17d-mPSUhtwqXCRKoTvT5LnJR8AaEYbXf",
  },
  atli: {
    name: "Atli",
    slug: "atli",
    coverPhotoUrl:
      "https://drive.google.com/uc?id=19cOqcmx9xIK6CJPYGp6JmFrsEfeNcaQa",
  },
  danni: {
    name: "Danni",
    slug: "danni",
    coverPhotoUrl:
      "https://drive.google.com/uc?id=16DklA-TBW3XcINXDkMlBOgZFzpQPK278",
  },
  gaui: {
    name: "Gaui",
    slug: "gaui",
    coverPhotoUrl:
      "https://drive.google.com/uc?id=1I8IhLdh8C6BBx7nM2n4fYZCaP1hAbJOA",
  },
  jonni: {
    name: "Jonni",
    slug: "jonni",
    coverPhotoUrl:
      "https://drive.google.com/uc?id=1n9xfi1H9Ydd8z1r3sSv67-5T5ozGiek6",
  },
  krissi: {
    name: "Krissi",
    slug: "krissi",
    coverPhotoUrl:
      "https://drive.google.com/uc?id=1nf4KGckqyyfXPSeS7o_A4fJ_fz-9MbCg",
  },
  maggi: {
    name: "Maggi",
    slug: "maggi",
    coverPhotoUrl:
      "https://drive.google.com/uc?id=1u3L3qqoAQoyjT1MOUpcJHN9G0WdW_wNr",
  },
  vikingur: {
    name: "Víkingur",
    slug: "vikingur",
    coverPhotoUrl:
      "https://drive.google.com/uc?id=1fpJLwtmT3IuYvpDQMbSx5L-EBwT7LA7x",
  },
};

export const actualTeamNames: Record<TeamColor, string> = {
  BLACK: "Svartir Refir",
  RED: "Rauðir Refir",
  WHITE: "Hvítir Refir",
  SILVER: "Silfur Refir",
};
