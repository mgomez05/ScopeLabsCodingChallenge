import VideoGallery from '@/components/VideoGallery';
import React from 'react';
import LearnwellHeader from '@/components/LearnwellHeader';
import { useRouter } from 'next/router';

import useFetchVideos from '@/components/hooks/useFetchVideos';
import CreateVideoButton from '@/components/CreateVideoButton';

export default function Home() {
  const router = useRouter();

  const { allVideos } = useFetchVideos();

  const [shouldShowCreateVideoForm, setShouldShowCreateVideoForm] =
    React.useState(false);

  return (
    <>
      <LearnwellHeader
        leftSideText='Check out our videos!'
        buttonText='Upload'
        onButtonClick={() => {
          setShouldShowCreateVideoForm(!shouldShowCreateVideoForm);
        }}
      />
      <div className='h-full'>
        {/* Video Gallery */}
        <div className='p-4 max-h-[750px] overflow-y-auto'>
          <VideoGallery
            onVideoClick={(videoId) => {
              router.push({
                pathname: '/video',
                query: { video_id: videoId },
              });
            }}
            videoList={allVideos}
            className='grid grid-cols-3 gap-4'
          />
        </div>

        {/* Show/Hide the Create Video Form when 
            the user clicks on the Upload button in the header */}
        {shouldShowCreateVideoForm && <CreateVideoButton />}
      </div>
    </>
  );
}
