import ChallengesPlayed from '@/components/ChallengesPlayed';
import CoverPhoto from '@/components/CoverPhoto';
import Scoreboard from '@/components/Scoreboard';
import Tile from '@/components/Tile';
import TileTitle from '@/components/TileTitle';
import YearSelector from '@/components/YearSelector';

const RefaleikarnirFrontPage = () => (
  <>
    <CoverPhoto />
    <div className='space-y-3 p-3 bg-winter relative z-10'>
      <YearSelector />
      <TileTitle>Þrautir</TileTitle>
      <Tile>
        <ChallengesPlayed />
      </Tile>
      <TileTitle>Niðurstöður</TileTitle>
      <Scoreboard />
    </div>
  </>
);

export default RefaleikarnirFrontPage;
