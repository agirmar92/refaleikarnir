import { PLAYERS, TEAMS } from "../constants";

export const results = [
  {
    year: "2014",
    teams: {
      [TEAMS.WHITE]: [PLAYERS.DANNI, PLAYERS.MAGGI],
      [TEAMS.BLACK]: [PLAYERS.GAUI, PLAYERS.VIKINGUR],
      [TEAMS.RED]: [PLAYERS.AEGIR, PLAYERS.ARNAR],
    },
    winter: {
      challenges: ["Borðtennis 🏓", "Keila 🎳", "FIFA ⚽"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 2,
        },
        {
          team: TEAMS.BLACK,
          place: 0,
        },
        {
          team: TEAMS.RED,
          place: 1,
        },
      ],
    },
    summer: {
      challenges: ["Bogfimi 🏹", "Lazer tag 🟩", "Píla 🎯"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 0,
        },
        {
          team: TEAMS.BLACK,
          place: 2,
        },
        {
          team: TEAMS.RED,
          place: 1,
        },
      ],
    },
  },
  {
    year: "2015",
    teams: {
      [TEAMS.WHITE]: [PLAYERS.DANNI, PLAYERS.MAGGI],
      [TEAMS.BLACK]: [PLAYERS.VIKINGUR, PLAYERS.ARNAR],
      [TEAMS.RED]: [PLAYERS.GAUI, PLAYERS.AEGIR],
    },
    winter: {
      challenges: ["Badminton 🏸", "Pool 🎱", "FIFA ⚽"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 0,
        },
        {
          team: TEAMS.BLACK,
          place: 0,
        },
        {
          team: TEAMS.RED,
          place: 0,
        },
      ],
    },
    summer: {
      challenges: ["Körfubolti 🏀", "Keila 🎳", "Minute to Win it ⏲️"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 2,
        },
        {
          team: TEAMS.BLACK,
          place: 1,
        },
        {
          team: TEAMS.RED,
          place: 0,
        },
      ],
    },
  },
  {
    year: "2016",
    teams: {
      [TEAMS.WHITE]: [PLAYERS.DANNI, PLAYERS.GAUI],
      [TEAMS.BLACK]: [PLAYERS.MAGGI, PLAYERS.AEGIR],
      [TEAMS.RED]: [PLAYERS.VIKINGUR, PLAYERS.ARNAR],
    },
    winter: {
      challenges: ["Skotfimi 🔫", "Borðtennis 🏓", "Black Ops 🎮"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 2,
        },
        {
          team: TEAMS.BLACK,
          place: 1,
        },
        {
          team: TEAMS.RED,
          place: 0,
        },
      ],
    },
    summer: {
      challenges: ["Folf 🥏", "Kubbur 👑", "Capture the Flag 🏴"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 2,
        },
        {
          team: TEAMS.BLACK,
          place: 0,
        },
        {
          team: TEAMS.RED,
          place: 1,
        },
      ],
    },
  },
  {
    year: "2017",
    teams: {
      [TEAMS.WHITE]: [PLAYERS.AEGIR, PLAYERS.ARNAR],
      [TEAMS.BLACK]: [PLAYERS.VIKINGUR, PLAYERS.GAUI],
      [TEAMS.RED]: [PLAYERS.DANNI, PLAYERS.MAGGI],
    },
    winter: {
      challenges: ["Go Kart 🏁", "Píla 🎯", "Mario Kart 🍄"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 2,
        },
        {
          team: TEAMS.BLACK,
          place: 0,
        },
        {
          team: TEAMS.RED,
          place: 1,
        },
      ],
    },
    summer: {
      challenges: ["Strandblak 🏐", "Pool 🎱", "Rocket League 🏎️"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 0,
        },
        {
          team: TEAMS.BLACK,
          place: 0,
        },
        {
          team: TEAMS.RED,
          place: 2,
        },
      ],
    },
  },
  {
    year: "2018",
    teams: {
      [TEAMS.WHITE]: [PLAYERS.MAGGI, PLAYERS.GAUI, PLAYERS.DANNI],
      [TEAMS.BLACK]: [PLAYERS.AEGIR, PLAYERS.ARNAR, PLAYERS.VIKINGUR],
    },
    winter: {
      challenges: ["Fótbolti ⚽", "Keila 🎳", "Black Ops 🎮"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 0,
        },
        {
          team: TEAMS.BLACK,
          place: 1,
        },
      ],
    },
    summer: {
      challenges: ["Skotfimi 🔫", "Pútt ⛳", "Beer Pong 🍻"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 1,
        },
        {
          team: TEAMS.BLACK,
          place: 0,
        },
      ],
    },
  },
  {
    year: "2019",
    teams: {
      [TEAMS.WHITE]: [PLAYERS.DANNI, PLAYERS.MAGGI],
      [TEAMS.BLACK]: [PLAYERS.AEGIR, PLAYERS.GAUI],
      [TEAMS.RED]: [PLAYERS.ARNAR, PLAYERS.VIKINGUR],
    },
    winter: {
      challenges: ["Foosball ⚽", "Dota 2 🎮", "Overwatch 🔫"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 2,
        },
        {
          team: TEAMS.BLACK,
          place: 0,
        },
        {
          team: TEAMS.RED,
          place: 1,
        },
      ],
    },
    summer: {
      challenges: ["Tennis 🎾", "Golfhermir 🏌️‍♂️", "Píla 🎯"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 0,
        },
        {
          team: TEAMS.BLACK,
          place: 2,
        },
        {
          team: TEAMS.RED,
          place: 0,
        },
      ],
    },
  },
  {
    year: "2020",
    teams: {
      [TEAMS.WHITE]: [PLAYERS.DANNI, PLAYERS.AEGIR],
      [TEAMS.BLACK]: [PLAYERS.GAUI, PLAYERS.MAGGI],
      [TEAMS.RED]: [PLAYERS.ARNAR, PLAYERS.VIKINGUR],
    },
    winter: {
      challenges: ["Keila 🎳", "Borðtennis 🏓", "Minute to Win it ⏲️"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 2,
        },
        {
          team: TEAMS.BLACK,
          place: 0,
        },
        {
          team: TEAMS.RED,
          place: 1,
        },
      ],
    },
    summer: {
      challenges: ["Folf 🥏", "Körfubolti (trick shots) 🏀", "Kubbur 👑"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 1,
        },
        {
          team: TEAMS.BLACK,
          place: 0,
        },
        {
          team: TEAMS.RED,
          place: 2,
        },
      ],
    },
  },
  {
    year: "2022",
    teams: {
      [TEAMS.WHITE]: [PLAYERS.DANNI, PLAYERS.VIKINGUR],
      [TEAMS.BLACK]: [PLAYERS.AEGIR, PLAYERS.MAGGI],
      [TEAMS.RED]: [PLAYERS.ARNAR, PLAYERS.GAUI],
      [TEAMS.SILVER]: [PLAYERS.KRISSI, PLAYERS.JONNI],
    },
    winter: {
      challenges: [],
      teamPlacement: [],
    },
    summer: {
      challenges: ["Padel 🎾", "Fall Guys 🎮", "Minute to Win it ⏲️"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 2,
        },
        {
          team: TEAMS.BLACK,
          place: 0,
        },
        {
          team: TEAMS.RED,
          place: 3,
        },
        {
          team: TEAMS.SILVER,
          place: 1,
        },
      ],
    },
  },
  {
    year: "2023",
    teams: {
      [TEAMS.WHITE]: [PLAYERS.GAUI, PLAYERS.KRISSI],
      [TEAMS.BLACK]: [PLAYERS.VIKINGUR, PLAYERS.ARNAR],
      [TEAMS.RED]: [PLAYERS.DANNI, PLAYERS.MAGGI],
      [TEAMS.SILVER]: [PLAYERS.AEGIR, PLAYERS.ATLI],
    },
    winter: {
      challenges: [],
      teamPlacement: [],
    },
    summer: {
      challenges: ["GT 🏎️", "Black Ops 🎮", "Boccia/Boule 👴🏻"],
      teamPlacement: [
        {
          team: TEAMS.WHITE,
          place: 3,
        },
        {
          team: TEAMS.BLACK,
          place: 0,
        },
        {
          team: TEAMS.RED,
          place: 2,
        },
        {
          team: TEAMS.SILVER,
          place: 1,
        },
      ],
    },
  },
];
