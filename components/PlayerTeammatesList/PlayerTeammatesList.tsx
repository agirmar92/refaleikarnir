import classNames from "classnames";
import { getTeammateCountByPlayer } from "@/utils/proccessData";
import { PlayerSlug } from "@/utils/types";
import PlayerPortrait from "@/components/PlayerPortrait";
import { players } from "@/utils/constants";

const PlayerTeammatesList = ({ slug }: { slug: PlayerSlug }) => {
  const otherPlayersWithCount = getTeammateCountByPlayer(slug);

  return (
    <div className="grid grid-cols-5">
      {otherPlayersWithCount.map((player, iPlayer) => (
        <div key={player.slug} className="contents">
          <span
            className={classNames("col-span-2 col-start-2", {
              "border-b border-winter pb-3":
                iPlayer !== otherPlayersWithCount.length - 1,
              "pt-3": iPlayer !== 0,
            })}
          >
            <PlayerPortrait player={players[player.slug]} reverseContent />
          </span>
          <span
            className={classNames(
              "col-span-1 text-center flex flex-col justify-center",
              {
                "border-b border-winter pb-3":
                  iPlayer !== otherPlayersWithCount.length - 1,
                "pt-3": iPlayer !== 0,
              },
            )}
          >
            x {player.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PlayerTeammatesList;
