import React from 'react';

export type VideoPlaceholderFromAPI = {
  user_id: string;
  description: string;
  image_thumbnail: string;
  title: string;
  video_id: string;
};

interface VideoCardProps {
  videoPlaceholder: VideoPlaceholderFromAPI;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoPlaceholder }) => {
  return (
    <div className='border border-black rounded-lg px-3 bg-white'>
      <div className='flex flex-col items-center'>
        <p>{videoPlaceholder.title}</p>
        <p>{videoPlaceholder.user_id}</p>
      </div>
      <video controls>
        <source src='SampleVideo_1280x720_1mb.mp4' type='video/mp4' />
      </video>
      <p>{videoPlaceholder.description}</p>
    </div>
  );
};

export default VideoCard;
