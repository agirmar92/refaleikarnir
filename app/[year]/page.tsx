import { redirect } from 'next/navigation'
import ChallengesPlayed from '@/components/ChallengesPlayed'
import CoverPhoto from '@/components/CoverPhoto'
import Scoreboard from '@/components/Scoreboard'
import Tile from '@/components/Tile'
import TileTitle from '@/components/TileTitle'
import YearSelector from '@/components/YearSelector'
import { results } from '@/data/results'

type PageParams = {
  params: { year: string }
  searchParams: { season?: string }
}

export const generateMetadata = ({
  params: { year },
  searchParams: { season },
}: PageParams) => {
  const gamesIndex = results.findIndex(
    (result) =>
      result.year === Number(year) &&
      (season === undefined || season === result.season)
  )

  if (gamesIndex !== -1) {
    const { year, season } = results[gamesIndex]
    return {
      title: `${year}${
        season ? ` - ${season === 'summer' ? 'Sumar' : 'Vetur'}` : ''
      } | Refaleikarnir`,
    }
  } else {
    return { title: 'Refaleikarnir' }
  }
}

const RefaleikarnirFrontPage = ({
  params: { year },
  searchParams: { season },
}: PageParams) => {
  const gamesIndex = results.findIndex(
    (result) =>
      result.year === Number(year) &&
      (season === undefined || season === result.season)
  )

  if (gamesIndex === -1) {
    // No games found for given params - redirecting to home page root
    redirect('/')
  }

  return (
    <>
      <CoverPhoto gamesIndex={gamesIndex} />
      <div className="space-y-3 p-3 bg-winter relative z-10 mt-[100vw] sm:mt-[640px]">
        <YearSelector gamesIndex={gamesIndex} />
        <TileTitle>Þrautir</TileTitle>
        <Tile>
          <ChallengesPlayed gamesIndex={gamesIndex} />
        </Tile>
        <TileTitle>Niðurstöður</TileTitle>
        <Scoreboard gamesIndex={gamesIndex} />
      </div>
    </>
  )
}

export default RefaleikarnirFrontPage
