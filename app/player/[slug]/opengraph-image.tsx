import { players } from '@/utils/constants'
import { PlayerSlug } from '@/utils/types'
import { generateOpengraphImage } from '@/utils/generateOpengraphImage'

export const runtime = 'edge'

export const alt = 'Player OpenGraph portrait'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!players[slug as PlayerSlug]) {
    // No player found with that slug
    return null
  }
  const { coverPhotoUrl } = players[slug as PlayerSlug]

  return generateOpengraphImage({ photoUrl: coverPhotoUrl, size })
}
