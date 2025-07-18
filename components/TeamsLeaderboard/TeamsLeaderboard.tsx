import { Fragment } from 'react'
import { getTeamColorsWithWinsAndParticipation } from '@/utils/proccessData'
import classNames from 'classnames'
import TeamEmblem from '@/components/TeamEmblem'
import { actualTeamNames } from '@/utils/constants'

const TeamsLeaderboard = () => {
  const teamColorsWithWins = getTeamColorsWithWinsAndParticipation()

  return (
    <div className="grid grid-cols-3">
      {teamColorsWithWins.map((teamData, iTeamData) => (
        <Fragment key={`${teamData.color}-wins`}>
          <span
            className={classNames('col-span-2', {
              'border-b border-winter pb-3':
                iTeamData !== teamColorsWithWins.length - 1,
              'pt-3': iTeamData !== 0,
            })}
          >
            <TeamEmblem team={teamData.color} />
          </span>
          <span
            className={classNames('flex flex-col justify-center', {
              'border-b border-winter pb-3':
                iTeamData !== teamColorsWithWins.length - 1,
              'pt-3': iTeamData !== 0,
            })}
          >
            <span>
              {teamData.wins} {teamData.wins === 1 ? 'sigur' : 'sigrar'}
            </span>
            <span>({teamData.appearances} leikar)</span>
          </span>
        </Fragment>
      ))}
    </div>
  )
}

export const TeamsLeaderboardSkeleton = () => {
  const teams = Object.keys(actualTeamNames)

  return (
    <div className="grid grid-cols-3">
      {teams.map((_, iTeam) => (
        <Fragment key={`team-${iTeam}`}>
          <span
            className={classNames('col-span-2', {
              'border-b border-winter pb-3': iTeam !== teams.length - 1,
              'pt-3': iTeam !== 0,
            })}
          >
            <div className="h-24 w-16 m-auto bg-gray-400 animate-pulse rounded-sm" />
          </span>
          <span
            className={classNames('flex flex-col justify-center', {
              'border-b border-winter pb-3': iTeam !== teams.length - 1,
              'pt-3': iTeam !== 0,
            })}
          >
            <div className="bg-gray-400 animate-pulse rounded-sm h-6 w-2/3" />
          </span>
        </Fragment>
      ))}
    </div>
  )
}

export default TeamsLeaderboard
