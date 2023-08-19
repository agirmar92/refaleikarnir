import Tile from "@/components/Tile";
import TileTitle from "@/components/TileTitle";
import { PlayersLeaderboardSkeleton } from "@/components/PlayersLeaderboard";
import { TeamsLeaderboardSkeleton } from "@/components/TeamsLeaderboard";

const StatsPageLoading = () => {
  return (
    <div className="p-3 space-y-3">
      <TileTitle>Flestir sigrar (leikmenn)</TileTitle>
      <Tile>
        <PlayersLeaderboardSkeleton />
      </Tile>
      <TileTitle>Flestir sigrar (litur)</TileTitle>
      <Tile>
        <TeamsLeaderboardSkeleton />
      </Tile>
    </div>
  );
};

export default StatsPageLoading;
