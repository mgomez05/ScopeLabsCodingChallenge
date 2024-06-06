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
  // True - if we are currently loading comments from the server
  // False - if we haven't requested comments yet from the server, or
  //       if the GET /videeos/comments request has completed (i.e. regardless of we
  //       actually got comments from it or not)
  const [isLoadingComments, setIsLoadingComments] = useState<boolean>(false);

  const [comments, setComments] = useState<GetVideoCommentsResponse | null>(
    null
  );

  const onShowCommentsButtonClicked = async () => {
    // Start showing a loading indicator while we fetch the comments
    setIsLoadingComments(true);

    // Fetch all comments for the video from the server
    try {
      const response = await axios.get(`/videos/comments?video_id=${video_id}`);

      // If it's a success response, parse the data from the response
      // Otherwise, log an error message
      if (response.status === 200) {
        // Update the comments variable with the comments retrieved from the server
        const commentsFromServer = response.data;
        setComments(commentsFromServer);
      } else {
        console.error(
          `ERROR: Error retrieving video comments from the server, server returned error code ${response.status}, and response ${response}`
        );
      }
    } catch (error) {
      console.error(
        'ERROR: Error retrieving all region stats in MapboxComponent:',
        error
      );
    }

    // Stop showing the loading indicator, since we finished fetching the comments
    setIsLoadingComments(false);
  };

  return (
    <div>
      {/* Button to Show the Comments Section */}
      <button
        className='border border-black rounded-lg py-2 px-2'
        onClick={onShowCommentsButtonClicked}
      >
        Show Comments
      </button>

      {/* If comments were retrieved from the server (i.e. comments !== null), 
          show the Comments Section */}
      {comments && <VideoCommentList comments={comments} />}

      {/* If we are currently loading comments from the server, 
          show a loading indicator */}
      {isLoadingComments && <p>Loading Comments...</p>}
    </div>
  );
};

export default VideoCommentsSection;
