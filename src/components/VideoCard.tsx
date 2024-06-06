import React from 'react';
import VideoCommentsSection from './VideoCommentsSection';

export const EXAMPLE_COMMENTS = [
  {
    commentAuthor: 'Johnny Appleseed',
    commentText: 'This is a great video!',
  },
  {
    commentAuthor: 'Jane Doe',
    commentText: 'I love this video!',
  },
  {
    commentAuthor: 'John Smith',
    commentText: 'This video is amazing!',
  },
];

export const SAMPLE_VIDEO_META_DATA: VideoMetaData = {
  user_id: 'asdg7a98sd7g9a87dg',
  description:
    'This is a story of a great battle as a strange animal comes out of his home',
  video_thumbnail: 'asdgasdgasdg',
  title: 'The Animal that Comes Out of The Whole',
  video_id: 'asd8ga7s98a7sgd',
};

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

interface VideoCardProps {
  videoMetaData: VideoMetaData;
  videoDataURI?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoMetaData,
  videoDataURI,
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
    <div className='border border-black rounded-lg px-3 bg-white'>
      <div className='flex flex-col items-center'>
        <p>{videoMetaData.title}</p>
        <p>{videoMetaData.user_id}</p>
      </div>
      {/* Show the video if we've retrieved the videoDataURI from the server
          Otherwise, show the video thumbnail */}
      {videoCardContent}
      <p>{videoMetaData.description}</p>

      <VideoCommentsSection video_id={videoMetaData.video_id} />
    </div>
  );
};

export default VideoCard;
