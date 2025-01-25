import { Metadata, ResolvedMetadata } from 'next'
import { notFound } from 'next/navigation'
import { results } from '@/data/results'
import { YearResults, getYearResultsMetadata } from './YearResults'

type PageProps = {
  params: Promise<{ yearAndSeason: string }>
}

export const generateMetadata = async (
  props: PageProps,
  parent: ResolvedMetadata
): Promise<Metadata> => {
  const [{ yearAndSeason }, parentMetadata] = await Promise.all([
    props.params,
    parent,
  ])
  const [year, season] = yearAndSeason.split('-')
  const gamesIndex = results.findIndex(
    (result) =>
      result.year === Number(year) &&
      (season === undefined || season === result.season)
  )
  return getYearResultsMetadata(gamesIndex, parentMetadata)
}

export const generateStaticParams = () => {
  const yearAndSeasonSlugs = results.map((result) => ({
    yearAndSeason: `${result.year}${result.season ? `-${result.season}` : ''}`,
  }))

  return yearAndSeasonSlugs
}

export const dynamicParams = false

const YearResultsPage = async (props: PageProps) => {
  const params = await props.params

  const { yearAndSeason } = params

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
