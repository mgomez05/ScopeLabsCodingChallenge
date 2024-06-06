import React, { useState } from 'react';
import VideoCommentList from './VideoCommentList';
import { EXAMPLE_COMMENTS } from './VideoCard';
import axios from 'axios';

interface VideoCommentsSectionProps {
  video_id: string;
}

const VideoCommentsSection: React.FC<VideoCommentsSectionProps> = ({
  video_id,
}) => {
  const [shouldShowComments, setShouldComments] = useState<boolean>(false);

  const onShowCommentsButtonClicked = async () => {
    // Fetch all comments for the video from the server
    try {
      const response = await axios.get(`/videos/comments?video_id=${video_id}`);

      // If it's a success response, parse the data from the response
      // Otherwise, log an error message
      if (response.status === 200) {
        setShouldComments(true);
      } else {
        console.error(
          `ERROR: Error retrieving video comments from the server, server returned error code ${response.status}, and response ${response}`
        );
        setShouldComments(false);
      }
    } catch (error) {
      console.error(
        'ERROR: Error retrieving all region stats in MapboxComponent:',
        error
      );
      setShouldComments(false);
    }
  };

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
