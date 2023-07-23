import { getPlayersWithWinsAndApps } from "@/utils/proccessData";
import classNames from "classnames";
import PlayerPortrait from "@/components/PlayerPortrait";

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

export default PlayersLeaderboard;
