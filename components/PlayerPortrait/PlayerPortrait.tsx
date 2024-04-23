import Link from 'next/link'
import classNames from 'classnames'
import { PlayerDetails, TeamColor } from '@/types'
import DynamicPlayerPortrait from './DynamicPlayerPortrait'

const PlayerPortrait = ({
  player,
  reverseContent = false,
  color,
}: {
  player: PlayerDetails
  reverseContent?: boolean
  color?: TeamColor
}) => {
  let content = [
    <p key={`playerName-${player.slug}`}>{player.name}</p>,
    <DynamicPlayerPortrait
      key={`playerPhoto-${player.slug}`}
      player={player}
      color={color}
    />,
  ]
  if (reverseContent) {
    content = content.reverse()
  }

  return (
    <Link
      className={classNames(
        'flex items-center space-x-2 rounded-full transition-colors hover:shadow-md',
        {
          'pl-3': !reverseContent,
          'hover:bg-winter hover:text-white': color === undefined,
          'hover:bg-black hover:text-white': color === 'BLACK',
          'hover:bg-fox-silver': color === 'SILVER',
          'hover:bg-fox-red hover:text-white': color === 'RED',
          'hover:bg-white hover:text-black': color === 'WHITE',
        }
      )}
      href={`/player/${player.slug}`}
    >
      {content.map((child) => child)}
    </Link>
  )
}

export default PlayerPortrait
