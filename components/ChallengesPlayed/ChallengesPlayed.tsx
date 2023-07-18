"use client";

import { useYear } from "@/contexts/YearContext";
import { results } from "@/data/results";

const ChallengesPlayed = () => {
  const { gamesIndex } = useYear();
  const challengesPlayed = results[gamesIndex].summer.challenges;

  return (
    <>
      {challengesPlayed.map((challenge) => (
        <p className="text-center font-semibold">{challenge}</p>
      ))}
    </>
  );
};

export default ChallengesPlayed;
