import React from 'react';

interface VideoCardProps {}

const VideoCard: React.FC<VideoCardProps> = ({}) => {
  return (
    <div className='border border-black rounded-lg px-3 bg-white'>
      <div className='flex flex-col items-center'>
        <p>Title</p>
        <p>Author</p>
      </div>
      <video controls>
        <source src='SampleVideo_1280x720_1mb.mp4' type='video/mp4' />
      </video>
      <p>Description</p>
    </div>
  );
};

export default VideoCard;
