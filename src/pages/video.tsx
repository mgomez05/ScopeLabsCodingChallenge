import LearnwellHeader from '@/components/LearnwellHeader';
import VideoCard from '@/components/VideoCard';
import VideoGallery from '@/components/VideoGallery';
import { SAMPLE_VIDEO_LIST } from '@/sampleData/sampleData';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useRouter } from 'next/router';
import useFetchVideos from '@/components/hooks/useFetchVideos';

// The expected data structure for a single video retrieved
// from the GET /videos/single request
export type SingleVideoData = {
  user_id: string;
  description: string;
  video_url: string;
  title: string;
  video_id: string;
};

// A page for showing a single video, with a vertical list of videos
// on the right hand side
export default function VideoPage() {
  const router = useRouter();

  const { video_id } = router.query;

  // Fetch all videos from the server that will be shown in the vertical list
  const { allVideos } = useFetchVideos();

  // The video data for the main video being shown on the page
  const [videoData, setVideoData] = useState<SingleVideoData | null>(null);

  const fetchVideoFromServer = async (video_id: string) => {
    // Fetch the video's data from the server
    try {
      const response = await axios.get(`/videos/single?video_id=${video_id}`);

      // If it's a success response, parse the data from the response
      // Otherwise, log an error message
      if (response.status === 200) {
        // Update the videoData variable with the video data retrieved from the server
        // - NOTE: We use JSON.parse() since the api spec this endpoint returns a string
        //         with media type application/json
        const videoDataFromServer = JSON.parse(response.data);
        setVideoData(videoDataFromServer);
      } else {
        console.error(
          `ERROR: Error retrieving video data from the server for video with id '${video_id}', server returned error code ${response.status}, and response ${response}`
        );
      }
    } catch (error) {
      console.error(
        `ERROR: Error retrieving video data from the server for video with id '${video_id}', here is the error:`,
        error
      );
    }
  };

  // Fetch the data for the main video when the page first loads
  useEffect(() => {
    if (video_id) {
      fetchVideoFromServer(video_id as string);
    }
  }, [video_id]);

  return (
    <div className='flex flex-col'>
      {/* Page Header */}
      <LearnwellHeader />
      <div className='grid grid-cols-3 gap-4'>
        {/* Main Video */}
        <div className='col-span-2 p-4'>
          {/* If we have videoData, show the video
              Otherwise, show a video card telling the user to try another video */}
          {videoData ? (
            <VideoCard
              videoDataURI={videoData?.video_url}
              videoMetaData={{ ...videoData, video_thumbnail: '' }}
              showVideoComments
            />
          ) : (
            <VideoCard
              videoMetaData={{
                user_id: 'Learnwell',
                description: 'Sorry! Please try selecting another video',
                video_thumbnail: '',
                title: 'The requested video could not be loaded',
                video_id: video_id as string,
              }}
            />
          )}
        </div>

        {/* Vertical List of Videos on the Right Hand Side */}
        <div className='p-4 flex flex-col justify-center'>
          <VideoGallery
            className='flex flex-col gap-y-4'
            videoList={allVideos}
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
