import React from 'react';
import VideoCard, { VideoCardProps } from './VideoCard';

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
    <>
      {/* If there are videos to display, render them
          Otherwise show an error message */}
      {videoList.length > 0 ? (
        <div className={className}>
          {/* Render the list of videos */}
          {videoList.map((video, index) => (
            <div
              onClick={() => {
                onVideoClick(video.videoMetaData.video_id);
              }}
            >
              <VideoCard key={index} videoMetaData={video.videoMetaData} />
            </div>
          ))}
        </div>
      ) : (
        // If there are no videos to display, show an error message to the user
        <p className='text-lg font-semibold text-center'>
          No videos could be retrieved from the server, please try again later
        </p>
      )}
    </>
  );
};

export default VideoGallery;
