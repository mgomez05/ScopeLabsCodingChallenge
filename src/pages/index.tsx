import VideoGallery from '@/components/VideoGallery';
import React from 'react';
import LearnwellHeader from '@/components/LearnwellHeader';
import { SAMPLE_VIDEO_LIST } from '@/sampleData/sampleData';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

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
        videoList={SAMPLE_VIDEO_LIST}
        className='grid grid-cols-3 gap-4 overflow-y-auto'
      />
    </main>
  );
}
