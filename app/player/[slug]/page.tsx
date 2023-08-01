"use client";

import { useRouter } from "next/navigation";
import { players } from "@/constants";
import { PlayerSlug } from "@/types";
import Tile from "@/components/Tile";
import TileTitle from "@/components/TileTitle";
import PlayerCoverPhoto from "@/components/PlayerCoverPhoto";
import PlayerOverallStats from "@/components/PlayerOverallStats";
import { getTeammateCountByPlayer } from "@/utils/proccessData";
import PlayerTeammatesList from "@/components/PlayerTeammatesList";

const PlayerPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  if (!players[params.slug as PlayerSlug]) {
    // No player found with that slug
    return router.push("/");
  }
  const { name, slug } = players[params.slug as PlayerSlug];

  const bla = getTeammateCountByPlayer(slug);

  return (
    <>
      <PlayerCoverPhoto backgroundClassName={`bg-${slug}`}>
        <h1 className="text-center text-4xl font-extrabold small-caps">
          {name}
        </h1>
      </PlayerCoverPhoto>
      <div className="p-3 space-y-3 z-10 relative bg-winter">
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
