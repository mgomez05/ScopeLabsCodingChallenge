import React, { useState } from 'react';
import VideoCommentList from './VideoCommentList';

const EXAMPLE_COMMENTS = [
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
  const [shouldShowComments, setShouldComments] = useState<boolean>(false);
  // If we have a videoDataURI from the server, show the video
  // Otherwise, show the video thumbnail
  const videoCardContent = videoDataURI ? (
    <video controls>
      <source src={videoDataURI} type='video/mp4' />
    </video>
  ) : (
    <img src={videoMetaData.video_thumbnail} alt={videoMetaData.title}></img>
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

      {/* Button to Show/Hide the Comments Section */}

      <button
        className='border border-black rounded-lg py-2 px-2'
        onClick={() => setShouldComments(!shouldShowComments)}
      >
        {shouldShowComments ? 'Hide Comments' : 'Show Comments'}
      </button>

      {/* Show the Comments Section if the user clicked the Show Comments Button*/}
      {shouldShowComments && <VideoCommentList comments={EXAMPLE_COMMENTS} />}
    </div>
  );
};

export default VideoCard;
