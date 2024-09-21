import { generateOpengraphImage } from '@/utils/generateOpengraphImage'
import { results } from '@/data/results'
import { getLatestGameResultsIndex } from '@/utils/proccessData'

export const runtime = 'edge'

export const alt = 'Game results OpenGraph image'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const { coverPhotoUrl } = results[getLatestGameResultsIndex()]

  return generateOpengraphImage({ photoUrl: coverPhotoUrl, size })
}
