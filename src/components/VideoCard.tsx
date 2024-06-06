import React from 'react';

interface VideoCardProps {}

const VideoCard: React.FC<VideoCardProps> = ({}) => {
  return (
    <video controls>
      <source src='SampleVideo_1280x720_1mb.mp4' type='video/mp4' />
    </video>
  );
};

export default VideoCard;
