import React, { Component, Fragment } from 'react';
import { List, Map } from 'immutable';
import classNames from 'classnames';
import './Foxlympics.css';

class Foxlympics extends Component {
  renderTeamPlacement() {
    const { results, teams } = this.props;
    const placement = results
      .get('teamPlacement')
      .sortBy(team => team.get('place'));
    const text = ['Sigurvegarar', 'Annað sæti', 'Þriðja sæti'];

    return (
      <div className="Foxlympics__teamPlacement">
        {[1, 0, 2].map(place => {
          const team = placement.get(place, Map());
          const members = teams.get(team.get('team'));
          console.log(
            'TCL: Foxlympics -> renderTeamPlacement -> members',
            members
          );
          return !team.isEmpty() ? (
            <div className="Foxlympics__teamPortraitContainer" key={place}>
              <div
                className={
                  'Foxlympics__teamPortrait Foxlympics__teamPortrait--' +
                  team.get('team') +
                  (team.get('place') === 0
                    ? ' Foxlympics__teamPortrait--winners'
                    : '')
                }
              >
                <div className="Foxlympics__portraitImageContainer">
                  {members.map(member => (
                    <div
                      className={
                        'Foxlympics__portraitImage Foxlympics__portraitImage--' +
                        member.get('slug')
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="Foxlympics__teamPortraitText">
                {text[team.get('place')]}
              </p>
            </div>
          ) : null;
        })}
      </div>
    );
  }

  render() {
    const { isWinter, isSummer, results, year } = this.props;

    return (
      <div
        className={classNames('Foxlympics', {
          'Foxlympics--winter': isWinter,
          'Foxlympics--summer': isSummer,
        })}
      >
        {year && <div className="Foxlympics__year">{year}</div>}
        <div className="Foxlympics__content">
          {results ? (
            <Fragment>
              <div className="Foxlympics__challenges">
                {results.get('challenges', List()).map((challenge, i) => (
                  <span key={i}>
                    {i !== 0 && ' - '}
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
