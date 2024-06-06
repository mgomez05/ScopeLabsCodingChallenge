import React from 'react';

export const SAMPLE_VIDEO_PLACAEHOLDER_FROM_API: VideoPlaceholderFromAPI = {
  user_id: 'asdg7a98sd7g9a87dg',
  description:
    'This is a story of a great battle as a strange animal comes out of his home',
  image_thumbnail: 'asdgasdgasdg',
  title: 'The Animal that Comes Out of The Whole',
  video_id: 'asd8ga7s98a7sgd',
};

export type VideoPlaceholderFromAPI = {
  user_id: string;
  description: string;
  image_thumbnail: string;
  title: string;
  video_id: string;
};

interface VideoCardProps {
  videoPlaceholder: VideoPlaceholderFromAPI;
  videoDataURI?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoPlaceholder,
  videoDataURI,
}) => {
  // If we have a videoDataURI from the server, show the video
  // Otherwise, show the video thumbnail
  const videoCardContent = videoDataURI ? (
    <video controls>
      <source src={videoDataURI} type='video/mp4' />
    </video>
  ) : (
    <img
      src={videoPlaceholder.image_thumbnail}
      alt={videoPlaceholder.title}
    ></img>
  );

  return (
    <div className='border border-black rounded-lg px-3 bg-white'>
      <div className='flex flex-col items-center'>
        <p>{videoPlaceholder.title}</p>
        <p>{videoPlaceholder.user_id}</p>
      </div>

      {/* Show the video if we've retrieved the videoDataURI from the server
          Otherwise, show the video thumbnail */}
      {videoCardContent}

      <p>{videoPlaceholder.description}</p>
    </div>
  );
};

export default VideoCard;
