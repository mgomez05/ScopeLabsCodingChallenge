import React from 'react';
import VideoCard, { SAMPLE_VIDEO_META_DATA, VideoCardProps } from './VideoCard';
import CreateVideoButton from './CreateVideoButton';

interface VideoGalleryProps {
  videoList: VideoCardProps[];
  onVideoClick: (videoId: string) => void;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({
  videoList,
  onVideoClick,
}) => {
  return (
    <div className='grid grid-cols-3 gap-4 overflow-y-auto'>
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
