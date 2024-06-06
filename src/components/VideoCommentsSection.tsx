import React, { useState } from 'react';
import VideoCommentList from './VideoCommentList';
import { EXAMPLE_COMMENTS } from './VideoCard';

interface VideoCommentsSectionProps {
  video_id: string;
}

const VideoCommentsSection: React.FC<VideoCommentsSectionProps> = ({
  video_id,
}) => {
  const [shouldShowComments, setShouldComments] = useState<boolean>(false);

  return (
    <div>
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

export default VideoCommentsSection;
