"use client";

import { useYear } from "@/contexts/YearContext";
import { results } from "@/data/results";

const ChallengesPlayed = () => {
  const { gamesIndex } = useYear();
  const challengesPlayed = results[gamesIndex].summer.challenges;

  return (
    <>
      {challengesPlayed.map((challenge, iChallenge) => (
        <p
          key={`challenge-${iChallenge}`}
          className="text-center font-semibold"
        >
          {challenge}
        </p>
      ))}
    </>
  );
};

export default ChallengesPlayed;
