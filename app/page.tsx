import { YearResults, getYearResultsMetadata } from './[year]/YearResults'
import { getLatestGameResultsIndex } from '@/utils/proccessData'

export const generateMetadata = () => {
  const latestGameResultsIndex = getLatestGameResultsIndex()
  return getYearResultsMetadata(latestGameResultsIndex)
}

const RefaleikarnirFrontPage = () => {
  const latestGameResultsIndex = getLatestGameResultsIndex()
  return <YearResults gamesIndex={latestGameResultsIndex} />
}

export default RefaleikarnirFrontPage
