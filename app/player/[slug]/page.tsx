import { redirect } from 'next/navigation';
import { players } from '@/constants';
import { PlayerSlug } from '@/types';
import Tile from '@/components/Tile';
import TileTitle from '@/components/TileTitle';
import PlayerCoverPhoto from '@/components/PlayerCoverPhoto';
import PlayerOverallStats from '@/components/PlayerOverallStats';
import PlayerTeammatesList from '@/components/PlayerTeammatesList';
import { DynamicallyPositionedContent } from '@/components/PlayerCoverPhoto/PlayerCoverPhoto';

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  if (players[params.slug as PlayerSlug]) {
    const { name } = players[params.slug as PlayerSlug];
    return { title: `${name} | Refaleikarnir` };
  } else {
    return { title: 'Refaleikarnir' };
  }
};

const PlayerPage = ({ params }: { params: { slug: string } }) => {
  if (!players[params.slug as PlayerSlug]) {
    // No player found with that slug
    redirect('/');
  }
  const { name, slug, coverPhotoUrl } = players[params.slug as PlayerSlug];

  return (
    <>
      <PlayerCoverPhoto coverPhotoUrl={coverPhotoUrl} />
      <div className='p-3 space-y-3 z-10 relative bg-winter mt-[100vw] sm:mt-[640px]'>
        <DynamicallyPositionedContent>
          <h1 className='text-center text-4xl font-extrabold small-caps'>
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
  );
};

export default PlayerPage;
