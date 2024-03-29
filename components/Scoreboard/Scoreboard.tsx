import TeamResult from '@/components/TeamResult'
import Tile from '@/components/Tile'
import { results } from '@/data/results'

const Scoreboard = ({ gamesIndex }: { gamesIndex: number }) => {
  const teamPlacement = results[gamesIndex].teams.sort(
    (teamA, teamB) => teamA.teamPlace - teamB.teamPlace
  )
  return (
    <>
      {teamPlacement.map((team) => {
        const { teamColor, teamPlace, teamPlayers } = team

        return (
          <Tile key={teamColor}>
            <TeamResult
              team={teamColor}
              teamMembers={teamPlayers}
              place={teamPlace}
            />
          </Tile>
        )
      })}
    </>
  )
}

export default Scoreboard
