import { notFound } from 'next/navigation'
import { results } from '@/data/results'
import { YearResults, getYearResultsMetadata } from './YearResults'

type PageParams = {
  params: { yearAndSeason: string }
}

export const generateMetadata = ({ params: { yearAndSeason } }: PageParams) => {
  const [year, season] = yearAndSeason.split('-')
  const gamesIndex = results.findIndex(
    (result) =>
      result.year === Number(year) &&
      (season === undefined || season === result.season)
  )
  return getYearResultsMetadata(gamesIndex)
}

export const generateStaticParams = () => {
  const yearAndSeasonSlugs = results.map((result) => ({
    yearAndSeason: `${result.year}${result.season ? `-${result.season}` : ''}`,
  }))

  return yearAndSeasonSlugs
}

export const dynamicParams = false

const YearResultsPage = ({ params: { yearAndSeason } }: PageParams) => {
  const [year, season] = yearAndSeason.split('-')
  const gamesIndex = results.findIndex(
    (result) =>
      result.year === Number(year) &&
      (season === undefined || season === result.season)
  )

  if (gamesIndex === -1) {
    // No games found for given params - shouldn't happen due to `dynamicParams = false`
    notFound()
  }

  return <YearResults gamesIndex={gamesIndex} />
}

export default YearResultsPage
