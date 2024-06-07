import VideoGallery from '@/components/VideoGallery';
import React from 'react';
import { SAMPLE_VIDEO_META_DATA } from '@/components/VideoCard';

export default function Home() {
  return (
    <main className={`min-h-screen px-24`}>
      <div className='flex flex-row items-center justify-between'>
        <p>Check out our videos!</p>
        <img src='full_logo_color.png' alt='Learnwell Logo'></img>
        <button>Click me</button>
      </div>
      <VideoGallery
        onVideoClick={(videoId) => {
          console.log(`Clicked on video with ID: ${videoId}`);
        }}
        videoList={[
          {
            videoMetaData: SAMPLE_VIDEO_META_DATA,
            videoDataURI: 'SampleVideo_1280x720_1mb.mp4',
          },
          {
            videoMetaData: SAMPLE_VIDEO_META_DATA,
            videoDataURI: 'SampleVideo_1280x720_1mb.mp4',
          },
          {
            videoMetaData: SAMPLE_VIDEO_META_DATA,
            videoDataURI: 'SampleVideo_1280x720_1mb.mp4',
          },
          {
            videoMetaData: SAMPLE_VIDEO_META_DATA,
            videoDataURI: 'SampleVideo_1280x720_1mb.mp4',
          },
          {
            videoMetaData: SAMPLE_VIDEO_META_DATA,
            videoDataURI: 'SampleVideo_1280x720_1mb.mp4',
          },
          {
            videoMetaData: SAMPLE_VIDEO_META_DATA,
            videoDataURI: 'SampleVideo_1280x720_1mb.mp4',
          },
        ]}
      />
    </main>
  );
}
