import VideoGallery from '@/components/VideoGallery';
import React from 'react';
import LearnwellHeader from '@/components/LearnwellHeader';
import { SAMPLE_VIDEO_LIST } from '@/sampleData/sampleData';

export default function Home() {
  return (
    <main className={`min-h-screen px-24`}>
      <LearnwellHeader />
      <VideoGallery
        onVideoClick={(videoId) => {
          console.log(`Clicked on video with ID: ${videoId}`);
        }}
        videoList={SAMPLE_VIDEO_LIST}
        className='grid grid-cols-3 gap-4 overflow-y-auto'
      />
    </main>
  );
}
