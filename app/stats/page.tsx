import Tile from "@/components/Tile";
import TileTitle from "@/components/TileTitle";
import PlayersLeaderboard, {
  PlayersLeaderboardSkeleton,
} from "@/components/PlayersLeaderboard";
import TeamsLeaderboard, {
  TeamsLeaderboardSkeleton,
} from "@/components/TeamsLeaderboard";
import { Suspense } from "react";

export const metadata = {
  title: "Tölfræði | Refaleikarnir",
};

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
);

export default StatsPage;
