import { generateOpengraphImage } from '@/utils/generateOpengraphImage'
import { results } from '@/data/results'

export const runtime = 'edge'

export const alt = 'Game results OpenGraph image'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ yearAndSeason: string }>
}) {
  const { yearAndSeason } = await params

  const [year, season] = yearAndSeason.split('-')
  const gamesIndex = results.findIndex(
    (result) =>
      result.year === Number(year) &&
      (season === undefined || season === result.season)
  )

  if (gamesIndex === -1) {
    // No results found with that slug
    return null
  }

  const { coverPhotoUrl } = results[gamesIndex]

  return generateOpengraphImage({ photoUrl: coverPhotoUrl, size })
}
