import { notFound } from 'next/navigation'
import { players } from '@/constants'
import { PlayerSlug } from '@/types'
import Tile from '@/components/Tile'
import TileTitle from '@/components/TileTitle'
import PlayerOverallStats from '@/components/PlayerOverallStats'
import PlayerTeammatesList from '@/components/PlayerTeammatesList'
import CoverPhoto from '@/components/CoverPhoto'
import { DynamicallyPositionedContent } from './DynamicallyPositionedContent'

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>
}) => {
  const params = await props.params
  if (players[params.slug as PlayerSlug]) {
    const { name } = players[params.slug as PlayerSlug]
    return { title: `${name} | Refaleikarnir` }
  } else {
    return { title: 'Refaleikarnir' }
  }
}

export const generateStaticParams = () => {
  const playerArray = Object.values(players)
  return playerArray.map((player) => ({ slug: player.slug }))
}

export const dynamicParams = false

const PlayerPage = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params
  if (!players[params.slug as PlayerSlug]) {
    // No player found with that slug - shouldn't happen due to `dynamicParams = false`
    notFound()
  }
  const { name, slug, coverPhotoUrl } = players[params.slug as PlayerSlug]

  return (
    <>
      <CoverPhoto coverPhotoUrl={coverPhotoUrl} />
      <div className="p-3 space-y-3 z-10 relative bg-winter mt-[100vw] sm:mt-[640px]">
        <DynamicallyPositionedContent>
          <h1 className="text-center text-4xl font-extrabold small-caps">
            {name}
          </h1>
        </DynamicallyPositionedContent>
        <TileTitle>Tölfræði</TileTitle>
        <Tile>
          <PlayerOverallStats slug={slug} />
        </Tile>
        <TileTitle>Liðsfélagar</TileTitle>
        <Tile>
          <PlayerTeammatesList slug={slug} />
        </Tile>
      </div>
    </>
  )
}

export default PlayerPage
