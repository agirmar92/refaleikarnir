import { generateOpengraphImage } from '@/utils/generateOpengraphImage'
import { results } from '@/data/results'

export const runtime = 'edge'

export const alt = 'Game results OpenGraph image'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const { coverPhotoUrl } = results[results.length - 1]

  return generateOpengraphImage({ photoUrl: coverPhotoUrl, size })
}
