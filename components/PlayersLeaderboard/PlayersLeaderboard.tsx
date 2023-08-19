import { getPlayersWithWinsAndApps } from "@/utils/proccessData";
import classNames from "classnames";
import PlayerPortrait from "@/components/PlayerPortrait";
import { players } from "@/utils/constants";

const PlayersLeaderboard = () => {
  const playersWithWinsAndApps = getPlayersWithWinsAndApps();

  return (
    <div className="grid grid-cols-5">
      {playersWithWinsAndApps.map((playerData, iPlayerData) => (
        <>
          <span
            className={classNames("col-span-2", {
              "border-b border-winter pb-3":
                iPlayerData !== playersWithWinsAndApps.length - 1,
              "pt-3": iPlayerData !== 0,
            })}
          >
            <PlayerPortrait player={playerData} reverseContent />
          </span>
          <span
            key={`${playerData.slug}-wins-and-apps`}
            className={classNames("col-span-3 flex flex-col justify-center", {
              "border-b border-winter pb-3":
                iPlayerData !== playersWithWinsAndApps.length - 1,
              "pt-3": iPlayerData !== 0,
            })}
          >
            {playerData.wins} {playerData.wins === 1 ? "sigur" : "sigrar"} í{" "}
            {playerData.apps} {playerData.apps > 1 ? "leikjum" : "leik"}
          </span>
        </>
      ))}
    </div>
  );
};

export const PlayersLeaderboardSkeleton = () => {
  const allPlayers = Object.keys(players);

  return (
    <div className="grid grid-cols-5">
      {allPlayers.map((_, iPlayer) => (
        <>
          <span
            key={`player-${iPlayer}`}
            className={classNames("col-span-2", {
              "border-b border-winter pb-3": iPlayer !== allPlayers.length - 1,
              "pt-3": iPlayer !== 0,
            })}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-no-repeat bg-gray-400 animate-pulse rounded-full" />
              <div className="bg-gray-400 animate-pulse rounded h-6 w-1/2" />
            </div>
          </span>
          <span
            className={classNames("col-span-3  flex flex-col justify-center", {
              "border-b border-winter pb-3": iPlayer !== allPlayers.length - 1,
              "pt-3": iPlayer !== 0,
            })}
          >
            <div className="bg-gray-400 animate-pulse rounded h-6 w-full" />
          </span>
        </>
      ))}
    </div>
  );
};

export default PlayersLeaderboard;
