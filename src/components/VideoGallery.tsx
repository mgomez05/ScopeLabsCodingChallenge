import React from 'react';
import VideoCard, { VideoCardProps } from './VideoCard';
import CreateVideoButton from './CreateVideoButton';

interface VideoGalleryProps {
  videoList: VideoCardProps[];
  onVideoClick: (videoId: string) => void;
  className?: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({
  videoList,
  onVideoClick,
  className,
}) => {
  return (
    <div className={className}>
      {/* Render the list of videos */}
      {videoList.map((video, index) => (
        <div
          onClick={() => {
            onVideoClick(video.videoMetaData.video_id);
          }}
        >
          <VideoCard
            key={index}
            videoMetaData={video.videoMetaData}
            videoDataURI={index % 2 === 0 ? 'SampleVideo_1280x720_1mb.mp4' : ''}
          />
        </div>
      ))}

      <CreateVideoButton />
    </div>
  );
};

export default VideoGallery;
