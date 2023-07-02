import React, { Fragment } from "react";
import { List, Map } from "immutable";
import classNames from "classnames";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { TEAMS } from "../../Data/Data";
import "./Foxlympics.css";

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
    <div className="Foxlympics__teamPlacement">
      <ReactTooltip id="teamMembersTooltip" />
      {placementOrder.map((place) => {
        const team = placement.get(place, Map());
        const members = teams.get(team.get("team"));
        return !team.isEmpty() ? (
          <div className="Foxlympics__teamPortraitContainer" key={place}>
            <div
              className={
                "Foxlympics__teamPortrait Foxlympics__teamPortrait--" +
                team.get("team") +
                (team.get("place") === 0
                  ? " Foxlympics__teamPortrait--winners"
                  : "")
              }
              data-tooltip-id="teamMembersTooltip"
              data-tooltip-html={renderTeamTooltip(team, members)}
              data-tooltip-place="top"
            >
              <div className="Foxlympics__portraitImageContainer">
                {members.map((member: any) => (
                  <div
                    key={member.get("slug")}
                    className={
                      "Foxlympics__portraitImage Foxlympics__portraitImage--" +
                      member.get("slug")
                    }
                  />
                ))}
              </div>
            </div>
            <p className="Foxlympics__teamPortraitText">
              {text[team.get("place")]}
            </p>
          </div>
        ) : null;
      })}
    </div>
  );
};

interface FoxlympicsProps {
  isWinter?: boolean;
  isSummer?: boolean;
  results: any;
  teams: any;
}

const Foxlympics = ({
  isWinter,
  isSummer,
  results,
  teams,
}: FoxlympicsProps) => {
  return (
    <div
      className={classNames("Foxlympics", {
        "Foxlympics--winter": isWinter,
        "Foxlympics--summer": isSummer,
      })}
    >
      <div className="Foxlympics__content">
        {!results.get("teamPlacement", List()).isEmpty() ? (
          <Fragment>
            <div className="Foxlympics__challenges">
              {results.get("challenges", List()).map((challenge: any, i: number) => (
                <span className="Foxlympics__challenge" key={i}>
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
