import { Suspense } from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import Tile from '@/components/Tile'
import TileTitle from '@/components/TileTitle'
import PlayersLeaderboard, {
  PlayersLeaderboardSkeleton,
} from '@/components/PlayersLeaderboard'
import TeamsLeaderboard, {
  TeamsLeaderboardSkeleton,
} from '@/components/TeamsLeaderboard'

export const generateMetadata = async (
  _: never,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const parentMetadata = await parent

  return {
    title: 'Tölfræði | Refaleikarnir',
    // No need to remove the images from the parent metadata for this route
    openGraph: {
      ...parentMetadata.openGraph,
      url: 'https://www.refaleikarnir.fun/stats',
    },
  }
}

const StatsPage = () => (
  <div className="p-3 space-y-3 mt-16">
    <TileTitle>Flestir sigrar (leikmenn)</TileTitle>
    <Tile>
      <Suspense fallback={<PlayersLeaderboardSkeleton />}>
        <PlayersLeaderboard />
      </Suspense>
    </Tile>
    <TileTitle>Flestir sigrar (litur)</TileTitle>
    <Tile>
      <Suspense fallback={<TeamsLeaderboardSkeleton />}>
        <TeamsLeaderboard />
      </Suspense>
    </Tile>
  </div>
)

export default StatsPage
