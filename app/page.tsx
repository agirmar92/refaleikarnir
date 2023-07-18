import CoverPhoto from "@/components/CoverPhoto";
import TeamResult from "@/components/TeamResult";
import Tile from "@/components/Tile";
import TileTitle from "@/components/TileTitle";
import YearSelector from "@/components/YearSelector";

const RefaleikarnirFrontPage = () => (
  <>
    <CoverPhoto>
      <YearSelector />
    </CoverPhoto>
    <div className="flex flex-col space-y-3 p-3 bg-winter relative z-10">
      <TileTitle>Þrautir</TileTitle>
      <Tile>
        <p className="text-center">GT - Black Ops - Boule</p>
      </Tile>
      <TileTitle>Niðurstöður</TileTitle>
      <Tile>
        <TeamResult team="BLACK" place={1} />
      </Tile>
      <Tile>
        <TeamResult team="SILVER" place={2} />
      </Tile>
      <Tile>
        <TeamResult team="RED" place={3} />
      </Tile>
      <Tile>
        <TeamResult team="WHITE" place={4} />
      </Tile>
    </div>
  </>
);

export default RefaleikarnirFrontPage;
