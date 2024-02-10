"use client";

import classNames from "classnames";
import { useYear } from "@/contexts/YearContext";
import { results } from "@/data/results";
import FoxIcon from "@/icons/FoxIcon";
import { ChallengeAndResults } from "@/utils/types";

const SimpleChallengesPlayed = ({
  challengesPlayed,
}: {
  challengesPlayed: string[];
}) => {
  return (
    <div className="space-y-2">
      {challengesPlayed.map((challenge, iChallenge) => (
        <p
          key={`simple-challenge-${iChallenge}`}
          className="text-center font-semibold"
        >
          {challenge}
        </p>
      ))}
    </div>
  );
};

const DetailedChallengesPlayed = ({
  challengesPlayed,
}: {
  challengesPlayed: ChallengeAndResults[];
}) => {
  const teamsThatPlayed = challengesPlayed[0].teamResults;

  return (
    <div
      className={classNames("grid grid-flow-row-dense gap-y-2", {
        "grid-cols-7": teamsThatPlayed.length === 2,
        "grid-cols-8": teamsThatPlayed.length === 3,
        "grid-cols-9": teamsThatPlayed.length === 4,
      })}
    >
      <div className="contents text-center">
        <span className="col-span-5" />
        {teamsThatPlayed.map((team) => (
          <span
            key={`team-${team.color}-emblem`}
            className="flex justify-center"
          >
            <FoxIcon color={team.color} />
          </span>
        ))}
      </div>
      {challengesPlayed.map((challenge, iChallenge) => (
        <div key={`challenge-${iChallenge}`} className="contents">
          <span className="text-center text-xl flex items-center justify-center">
            {challenge.emoji}
          </span>
          <span className="col-span-4 flex items-center font-semibold">
            {challenge.name}
          </span>
          {challenge.teamResults.map((team, iTeam) => (
            <div
              key={`challenge-${iChallenge}-team-${team.color}-points`}
              className="contents text-center"
            >
              <span
                className={classNames(
                  "flex items-center justify-center border-r",
                  {
                    "border-l": iTeam === 0,
                  },
                )}
              >
                {team.points}
              </span>
            </div>
          ))}
        </div>
      ))}
      <div className="contents">
        <span className="col-span-1" />
        <span className="col-span-4">Lokastig</span>
        {teamsThatPlayed.map((team, iTeam) => {
          const teamTotalPoints = challengesPlayed.reduce(
            (prev, currChallenge) =>
              prev + (currChallenge.teamResults[iTeam].points || 0),
            0,
          );
          return (
            <span
              key={`challenge-totalPoints-${team.color}`}
              className={classNames("text-center bg-white", {
                "rounded-s-md": iTeam === 0,
                "rounded-e-md": iTeam === teamsThatPlayed.length - 1,
              })}
            >
              {teamTotalPoints}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const ChallengesPlayed = () => {
  const { gamesIndex } = useYear();

  if (typeof results[gamesIndex].challenges[0] === "string") {
    return (
      <SimpleChallengesPlayed
        challengesPlayed={results[gamesIndex].challenges as string[]}
      />
    );
  } else {
    return (
      <DetailedChallengesPlayed
        challengesPlayed={
          results[gamesIndex].challenges as ChallengeAndResults[]
        }
      />
    );
  }
};

export default ChallengesPlayed;
