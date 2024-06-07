import React from 'react';
import VideoCommentsSection from './VideoCommentsSection';

// A type that helps represent expected response body from the GET /videos request
// - It is assumed that GET /videos request will return an array of
//   VideoPlaceholderFromAPI objects
// - We assume that the GET /videos request does NOT return the actual
//   video data, but only the metadata for the video (i.e. in order to avoid
// overloading the browser with multiple large files
export type VideoMetaData = {
  user_id: string;
  description: string;
  video_thumbnail: string;
  title: string;
  video_id: string;
};

export interface VideoCardProps {
  videoMetaData: VideoMetaData;
  videoDataURI?: string;
  showVideoComments?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoMetaData,
  videoDataURI,
  showVideoComments,
}) => {
  // If we have a videoDataURI from the server, show the video
  // Otherwise, show the video thumbnail
  const videoCardContent = videoDataURI ? (
    <video controls className='rounded-lg'>
      <source src={videoDataURI} type='video/mp4' />
    </video>
  ) : (
    // Show the video_thumbnail provided by the server if it exists,
    // otherwise show a placeholder image
    <img
      src={
        videoMetaData.video_thumbnail
          ? videoMetaData.video_thumbnail
          : 'video_thumbnail_placeholder.png'
      }
      alt={videoMetaData.title}
    ></img>
  );

  return (
    <div className='border border-black rounded-lg bg-white'>
      {/* Show the video if we've retrieved the videoDataURI from the server
          Otherwise, show the video thumbnail */}
      {videoCardContent}

      {/* Show the Title, User ID, and Description */}
      <div className='flex flex-col px-3 py-2 gap-y-2'>
        <p className='text-xl font-semibold'>{videoMetaData.title}</p>
        <div className='flex flex-row items-center'>
          <div className='rounded-full w-4 h-4 bg-blue-500 mr-2'></div>
          <p className='text-base font-normal'>{videoMetaData.user_id}</p>
        </div>
        <p className='text-base italic'>{videoMetaData.description}</p>
      </div>

      {showVideoComments && (
        <VideoCommentsSection video_id={videoMetaData.video_id} />
      )}
    </div>
  );
};

export default VideoCard;
