export type TeamColor = 'BLACK' | 'WHITE' | 'RED' | 'SILVER'

const playerSlugs = [
  'aegir',
  'arnar',
  'atli',
  'danni',
  'gaui',
  'maggi',
  'vikingur',
  'jonni',
  'krissi',
] as const
export type PlayerSlug = (typeof playerSlugs)[number]
export const isPlayerSlug = (slug: string): slug is PlayerSlug => {
  return playerSlugs.includes(slug as PlayerSlug)
}

export type PlayerDetails = {
  name: string
  slug: PlayerSlug
  coverPhotoUrl: string
}

export type ChallengeAndResults = {
  name: string
  emoji: string
  teamResults: { color: TeamColor; points: number | null }[]
}

export type Result = {
  year: number
  teams: {
    teamPlayers: PlayerDetails[]
    teamPlace: 0 | 1 | 2 | 3
    teamColor: TeamColor
  }[]
  challenges: ChallengeAndResults[] | string[]
  coverPhotoUrl: string
  season?: 'summer' | 'winter' | undefined
}
