import { Metadata, ResolvingMetadata } from 'next'
import { getLatestGameResultsIndex } from '@/utils/proccessData'
import {
  getYearResultsMetadata,
  YearResults,
} from './[yearAndSeason]/YearResults'

export const generateMetadata = async (
  _: never,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const parentMetadata = await parent
  const latestGameResultsIndex = getLatestGameResultsIndex()

  return getYearResultsMetadata(latestGameResultsIndex, parentMetadata)
}

const RefaleikarnirFrontPage = () => {
  const latestGameResultsIndex = getLatestGameResultsIndex()
  return <YearResults gamesIndex={latestGameResultsIndex} />
}

export default RefaleikarnirFrontPage
