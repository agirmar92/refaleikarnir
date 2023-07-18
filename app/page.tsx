import CoverPhoto from "@/components/CoverPhoto";
import Tile from "@/components/Tile";
import TileTitle from "@/components/TileTitle";
import YearSelector from "@/components/YearSelector";

const RefaleikarnirFrontPage = () => (
  <>
    <CoverPhoto>
      <YearSelector />
    </CoverPhoto>
    <div className="flex flex-col space-y-3 p-3 bg-winter relative z-10">
      <TileTitle>Niðurstöður</TileTitle>
      <Tile>
        <p className="text-center">Svartir</p>
      </Tile>
      <Tile>
        <p className="text-center">Silfur</p>
      </Tile>
      <Tile>
        <p className="text-center">Rauðir</p>
      </Tile>
      <Tile>
        <p className="text-center">Hvítir</p>
      </Tile>
      <TileTitle>Þrautir</TileTitle>
      <Tile>
        <p className="text-center">GT - Black Ops - Boule</p>
      </Tile>
    </div>
  </>
);

export default RefaleikarnirFrontPage;
