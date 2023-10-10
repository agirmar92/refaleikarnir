'use client';

import { useYear } from '@/contexts/YearContext';
import { results } from '@/data/results';
import DynamicCoverPhoto from './DynamicCoverPhoto';

const CoverPhoto = () => {
  const { gamesIndex } = useYear();
  const coverPhotoUrl = results[gamesIndex].coverPhotoUrl;

  return (
    <div className='w-[100vw] h-[100vw] max-w-screen-sm max-h-[640px] fixed top-0'>
      <div className='w-full h-full max-w-screen-sm max-h-[640px] bg-winter opacity-50 z-10 fixed top-0' />
      <DynamicCoverPhoto photoSrc={coverPhotoUrl} />
    </div>
  );
};

export default CoverPhoto;
