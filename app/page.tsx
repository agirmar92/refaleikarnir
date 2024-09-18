import { getLatestGameResultsIndex } from '@/utils/proccessData'
import {
  getYearResultsMetadata,
  YearResults,
} from './[yearAndSeason]/YearResults'

export const generateMetadata = () => {
  const latestGameResultsIndex = getLatestGameResultsIndex()
  return getYearResultsMetadata(latestGameResultsIndex)
}

const RefaleikarnirFrontPage = () => {
  const latestGameResultsIndex = getLatestGameResultsIndex()
  return <YearResults gamesIndex={latestGameResultsIndex} />
}

export default RefaleikarnirFrontPage
