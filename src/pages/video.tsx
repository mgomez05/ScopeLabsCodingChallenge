import LearnwellHeader from '@/components/LearnwellHeader';
import VideoCard from '@/components/VideoCard';
import VideoGallery from '@/components/VideoGallery';
import { SAMPLE_VIDEO_LIST } from '@/sampleData/sampleData';
import React from 'react';

import { useRouter } from 'next/router';

// A page for showing a single video,  with a vertical list of videos
// on the right hand side
export default function VideoPage() {
  const router = useRouter();

  return (
    <div className='flex flex-col'>
      {/* Page Header */}
      <LearnwellHeader />
      <div className='grid grid-cols-3 gap-4'>
        {/* Main Video */}
        <div className='col-span-2 p-4'>
          <VideoCard
            videoDataURI={SAMPLE_VIDEO_LIST[0].videoDataURI}
            videoMetaData={SAMPLE_VIDEO_LIST[0].videoMetaData}
            showVideoComments
          />
        </div>

        {/* Vertical List of Videos on the Right Hand Side */}
        <div className='p-4'>
          <VideoGallery
            className='flex flex-col gap-y-4'
            videoList={SAMPLE_VIDEO_LIST}
            onVideoClick={(video_id) => {
              router.push({
                pathname: '/video',
                query: { video_id: video_id },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
