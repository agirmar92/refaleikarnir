import { Metadata } from 'next'
import ChallengesPlayed from '@/components/ChallengesPlayed'
import CoverPhoto from '@/components/CoverPhoto'
import Scoreboard from '@/components/Scoreboard'
import Tile from '@/components/Tile'
import TileTitle from '@/components/TileTitle'
import YearSelector from '@/components/YearSelector'
import { results } from '@/data/results'
import Carousel from '@/components/Carousel'

export const getYearResultsMetadata = (gamesIndex: number): Metadata => {
  if (gamesIndex !== -1) {
    const { year, season } = results[gamesIndex]
    return {
      title: `${year}${
        season ? ` - ${season === 'summer' ? 'Sumar' : 'Vetur'}` : ''
      } | Refaleikarnir`,
    }
  }

  return { title: 'Refaleikarnir' }
}

export const YearResults = ({ gamesIndex }: { gamesIndex: number }) => {
  const { coverPhotoUrl } = results[gamesIndex]

  return (
    <>
      <CoverPhoto coverPhotoUrl={coverPhotoUrl} />
      <div className="space-y-3 p-3 bg-winter relative z-10 mt-[100vw] sm:mt-[640px]">
        <YearSelector gamesIndex={gamesIndex} />
        <TileTitle>Þrautir</TileTitle>
        <Tile>
          <ChallengesPlayed gamesIndex={gamesIndex} />
        </Tile>
        <TileTitle>Niðurstöður</TileTitle>
        <Scoreboard gamesIndex={gamesIndex} />
        <TileTitle>Myndir</TileTitle>
        <Tile>
          <Carousel
            slides={Array.from(Array(5).keys())}
            options={{ align: 'start' }}
          />
        </Tile>
      </div>
    </>
  )
}
