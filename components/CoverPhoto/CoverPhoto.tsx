'use client';

import { useYear } from '@/contexts/YearContext';
import { results } from '@/data/results';
import DynamicCoverPhoto from './DynamicCoverPhoto';

const CoverPhoto = () => {
  const { gamesIndex } = useYear();
  const coverPhotoUrl = results[gamesIndex].coverPhotoUrl;

  return (
    <div className='w-[100vw] h-[100vw] sm:w-full sm:h-[638px] sticky top-0'>
      <div className='w-full h-full bg-winter opacity-50 sticky z-10' />
      <DynamicCoverPhoto photoSrc={coverPhotoUrl} />
    </div>
  );
};

export default CoverPhoto;
