import Tile from "@/components/Tile";
import TileTitle from "@/components/TileTitle";
import PlayersLeaderboard from "@/components/PlayersLeaderboard";
import TeamsLeaderboard from "@/components/TeamsLeaderboard";

const StatsPage = () => (
  <div className="p-3 space-y-3">
    <TileTitle>Flestir sigrar (leikmenn)</TileTitle>
    <Tile>
      <PlayersLeaderboard />
    </Tile>
    <TileTitle>Flestir sigrar (litur)</TileTitle>
    <Tile>
      <TeamsLeaderboard />
    </Tile>
  </div>
);

export default StatsPage;
