import { redirect } from 'next/navigation'
import { results } from '@/data/results'
import { YearResults, getYearResultsMetadata } from './YearResults'

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
  return getYearResultsMetadata(gamesIndex)
}

const YearResultsPage = ({
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

  return <YearResults gamesIndex={gamesIndex} />
}

export default YearResultsPage
