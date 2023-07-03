import React, { Fragment } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import classNames from "classnames";
import { TEAMS } from "../../constants";
import { results } from "../../Data/results";
import type { TeamColor } from "../../types";

type Results =
  | (typeof results)[number]["winter"]
  | (typeof results)[number]["summer"];
type Teams = (typeof results)[number]["teams"];

const renderTeamTooltip = (
  teamColor: TeamColor,
  members: {
    name: string;
    slug: string;
  }[]
) => {
  const actualTeamNames = {
    [TEAMS.BLACK]: "Svartir refir",
    [TEAMS.RED]: "Rauðir refir",
    [TEAMS.WHITE]: "Hvítir refir",
    [TEAMS.SILVER]: "Silfur refir",
  } as const;
  const membersNames = members
    .map((member) => `<p class="text-base">${member.name}</p>`)
    .join("");
  return `
    <div>
      <h3 class="text-base underline">${actualTeamNames[teamColor]}</h3>
      ${membersNames}
    </div>
  `;
};

const renderTeamPlacement = (results: Results, teams: Teams) => {
  const placement = results.teamPlacement.sort((teamA, teamB) => teamA.place - teamB.place);
  const text = ["Sigurvegarar", "Annað sæti", "Þriðja sæti", "Fjórða sæti"];
  const placementOrder =
    Object.keys(teams).length === 3 ? [1, 0, 2] : [0, 1, 2, 3];

  return (
    <div className="flex justify-center">
      <ReactTooltip id="teamMembersTooltip" />
      {placementOrder.map((place) => {
        const team = placement[place];
        if (!team) {
          return null;
        }
        const members = teams[team.team];
        if (!members) {
          return null;
        }
        return (
          <div className="m-2.5 flex flex-col justify-between" key={place}>
            <div
              className={classNames("flex rounded-[30%]", {
                "bg-black": team.team === "black",
                "bg-white": team.team === "white",
                "bg-fox-red": team.team === "red",
                "bg-fox-silver": team.team === "silver",
                "h-[100px] sm:h-[140px] w-[100px] sm:w-[140px] mt-0":
                  team.place === 0,
                "h-[80px] sm:h-[100px] w-[80px] sm:w-[100px] mt-2.5 sm:mt-5":
                  team.place !== 0,
              })}
              data-tooltip-id="teamMembersTooltip"
              data-tooltip-html={renderTeamTooltip(team.team, members)}
              data-tooltip-place="top"
            >
              <div className="flex overflow-hidden w-[86%] h-[86%] rounded-[30%] m-auto">
                {members.map((member) => (
                  <div
                    key={member.slug}
                    className={classNames("w-[50%] h-full bg-cover bg-center", {
                      "bg-aegir": member.slug === "aegir",
                      "bg-arnar": member.slug === "arnar",
                      "bg-atli": member.slug === "atli",
                      "bg-danni": member.slug === "danni",
                      "bg-gaui": member.slug === "gaui",
                      "bg-jonni": member.slug === "jonni",
                      "bg-krissi": member.slug === "krissi",
                      "bg-maggi": member.slug === "maggi",
                      "bg-vikingur": member.slug === "vikingur",
                    })}
                  />
                ))}
              </div>
            </div>
            <p className="!leading-7 sm:!leading-7 text-sm sm:text-base whitespace-nowrap">
              {text[team.place]}
            </p>
          </div>
        );
      })}
    </div>
  );
};

interface FoxlympicsProps {
  season: "summer" | "winter";
  results: Results;
  teams: Teams;
}

const Foxlympics = ({ season, results, teams }: FoxlympicsProps) => {
  return (
    <div
      className={classNames("flex text-center flex-1 w-full", {
        "bg-winter": season === "winter",
        "bg-summer text-fox-black": season === "summer",
      })}
    >
      <div className="m-auto max-w-[500px]">
        {results.teamPlacement.length > 0 ? (
          <Fragment>
            <div className="text-lg max-w-[100vw] p-[10px] gap-1.5 flex flex-wrap justify-center">
              {results.challenges.map((challenge, i) => (
                <span className="whitespace-nowrap" key={i}>
                  {challenge}
                </span>
              ))}
            </div>
            {renderTeamPlacement(results, teams)}
          </Fragment>
        ) : (
          <p>Þessir leikar hafa ekki verið spilaðir enn</p>
        )}
      </div>
    </div>
  );
};

export default Foxlympics;
