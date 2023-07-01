import React, { Component, Fragment } from "react";
import { List, Map } from "immutable";
import classNames from "classnames";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { TEAMS } from "../Data/Data";
import "./Foxlympics.css";

class Foxlympics extends Component {
  renderTeamTooltip(team, members) {
    const actualTeamNames = {
      [TEAMS.BLACK]: "Svartir refir",
      [TEAMS.RED]: "Rauðir refir",
      [TEAMS.WHITE]: "Hvítir refir",
      [TEAMS.SILVER]: "Silfur refir",
    };
    const color = team.get("team");
    const membersNames = members
      .map((member) => `<p class="text-base">${member.get("name")}</p>`)
      .join("");
    return `
      <div>
        <h3 class="text-base underline">${actualTeamNames[color]}</h3>
        ${membersNames}
      </div>
    `;
  }

  renderTeamPlacement() {
    const { results, teams } = this.props;
    const placement = results
      .get("teamPlacement")
      .sortBy((team) => team.get("place"));
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
                data-tooltip-html={this.renderTeamTooltip(team, members)}
                data-tooltip-place="top"
              >
                <div className="Foxlympics__portraitImageContainer">
                  {members.map((member) => (
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
  }

  render() {
    const { isWinter, isSummer, results } = this.props;

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
                {results.get("challenges", List()).map((challenge, i) => (
                  <span className="Foxlympics__challenge" key={i}>
                    {challenge}
                  </span>
                ))}
              </div>
              {this.renderTeamPlacement()}
            </Fragment>
          ) : (
            <p>Þessir leikar hafa ekki verið spilaðir enn</p>
          )}
        </div>
      </div>
    );
  }
}

export default Foxlympics;
