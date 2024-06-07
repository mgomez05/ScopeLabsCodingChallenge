import VideoGallery from '@/components/VideoGallery';
import React from 'react';
import LearnwellHeader from '@/components/LearnwellHeader';
import { useRouter } from 'next/router';

import useFetchVideos from '@/components/hooks/useFetchVideos';
import CreateVideoButton from '@/components/CreateVideoButton';

export default function Home() {
  const router = useRouter();

  const { allVideos } = useFetchVideos();

  return (
    <div className='grid grid-rows-3 min-h-screen'>
      <LearnwellHeader />

      {/* Video Gallery */}
      <div className='row-span-2 p-4'>
        <VideoGallery
          onVideoClick={(videoId) => {
            router.push({
              pathname: '/video',
              query: { video_id: videoId },
            });
          }}
          videoList={allVideos}
          className='grid grid-cols-3 gap-4 overflow-y-auto'
        />
      </div>

      {/* Create Video Form */}
      <div className='row-span-1 p-4'>
        <CreateVideoButton />
      </div>
    </div>
  );
}
