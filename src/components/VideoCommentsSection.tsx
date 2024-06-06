import React, { useState } from 'react';
import VideoCommentList from './VideoCommentList';
import { EXAMPLE_COMMENTS } from './VideoCard';
import axios from 'axios';

interface VideoCommentsSectionProps {
  video_id: string;
}

// Represents the way video comments are
// stored on the server
export type ServerVideoComment = {
  video_id: string;
  content: string;
  user_id: string;
};

// Represents the server's 200 OK response to a GET /videos/comments request
type GetVideoCommentsResponse = ServerVideoComment[];

const VideoCommentsSection: React.FC<VideoCommentsSectionProps> = ({
  video_id,
}) => {
  const [shouldShowComments, setShouldComments] = useState<boolean>(false);
  const [comments, setComments] = useState<GetVideoCommentsResponse>([]);

  const onShowCommentsButtonClicked = async () => {
    // Fetch all comments for the video from the server
    try {
      const response = await axios.get(`/videos/comments?video_id=${video_id}`);

      // If it's a success response, parse the data from the response
      // Otherwise, log an error message
      if (response.status === 200) {
        // Update the comments variable with the comments retrieved from the server
        const commentsFromServer = response.data;
        setComments(commentsFromServer);

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
      {shouldShowComments && <VideoCommentList comments={comments} />}
    </div>
  );
};

export default VideoCommentsSection;
