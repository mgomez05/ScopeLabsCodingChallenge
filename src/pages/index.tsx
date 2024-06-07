import VideoGallery from '@/components/VideoGallery';
import React from 'react';
import LearnwellHeader from '@/components/LearnwellHeader';
import { useRouter } from 'next/router';

import useFetchVideos from '@/components/hooks/useFetchVideos';

export default function Home() {
  const router = useRouter();

  const { allVideos } = useFetchVideos();

  return (
    <main className={`min-h-screen px-24`}>
      <LearnwellHeader />
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
    </main>
  );
}
