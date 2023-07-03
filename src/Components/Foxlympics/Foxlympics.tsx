import React, { Fragment } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { List, Map } from "immutable";
import classNames from "classnames";
import { TEAMS } from "../../Data/Data";

const renderTeamTooltip = (team: any, members: any) => {
  const actualTeamNames = {
    [TEAMS.BLACK]: "Svartir refir",
    [TEAMS.RED]: "Rauðir refir",
    [TEAMS.WHITE]: "Hvítir refir",
    [TEAMS.SILVER]: "Silfur refir",
  };
  const color = team.get("team");
  const membersNames = members
    .map((member: any) => `<p class="text-base">${member.get("name")}</p>`)
    .join("");
  return `
    <div>
      <h3 class="text-base underline">${actualTeamNames[color]}</h3>
      ${membersNames}
    </div>
  `;
};

const renderTeamPlacement = (results: any, teams: any) => {
  const placement = results
    .get("teamPlacement")
    .sortBy((team: any) => team.get("place"));
  const text = ["Sigurvegarar", "Annað sæti", "Þriðja sæti", "Fjórða sæti"];
  const placementOrder = teams.size === 3 ? [1, 0, 2] : [0, 1, 2, 3];

  return (
    <div className="flex justify-center">
      <ReactTooltip id="teamMembersTooltip" />
      {placementOrder.map((place) => {
        const team = placement.get(place, Map());
        const members = teams.get(team.get("team"));
        return !team.isEmpty() ? (
          <div className="m-2.5 flex flex-col justify-between" key={place}>
            <div
              className={classNames("flex rounded-[30%]", {
                "bg-black": team.get("team") === "black",
                "bg-white": team.get("team") === "white",
                "bg-fox-red": team.get("team") === "red",
                "bg-fox-silver": team.get("team") === "silver",
                "h-[100px] sm:h-[140px] w-[100px] sm:w-[140px] mt-0":
                  team.get("place") === 0,
                "h-[80px] sm:h-[100px] w-[80px] sm:w-[100px] mt-2.5 sm:mt-5":
                  team.get("place") !== 0,
              })}
              data-tooltip-id="teamMembersTooltip"
              data-tooltip-html={renderTeamTooltip(team, members)}
              data-tooltip-place="top"
            >
              <div className="flex overflow-hidden w-[86%] h-[86%] rounded-[30%] m-auto">
                {members.map((member: any) => (
                  <div
                    key={member.get("slug")}
                    className={classNames("w-[50%] h-full bg-cover bg-center", {
                      "bg-aegir": member.get("slug") === "aegir",
                      "bg-arnar": member.get("slug") === "arnar",
                      "bg-atli": member.get("slug") === "atli",
                      "bg-danni": member.get("slug") === "danni",
                      "bg-gaui": member.get("slug") === "gaui",
                      "bg-jonni": member.get("slug") === "jonni",
                      "bg-krissi": member.get("slug") === "krissi",
                      "bg-maggi": member.get("slug") === "maggi",
                      "bg-vikingur": member.get("slug") === "vikingur",
                    })}
                  />
                ))}
              </div>
            </div>
            <p className="!leading-7 sm:!leading-7 text-sm sm:text-base whitespace-nowrap">
              {text[team.get("place")]}
            </p>
          </div>
        ) : null;
      })}
    </div>
  );
};

interface FoxlympicsProps {
  season: "summer" | "winter";
  results: any;
  teams: any;
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
        {!results.get("teamPlacement", List()).isEmpty() ? (
          <Fragment>
            <div className="text-lg max-w-[100vw] p-[10px] gap-1.5 flex flex-wrap justify-center">
              {results
                .get("challenges", List())
                .map((challenge: any, i: number) => (
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
