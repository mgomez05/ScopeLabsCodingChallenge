import React, { useState } from 'react';
import VideoCommentList from './VideoCommentList';
import axios from 'axios';
import Button from './Button';

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

// An error message to be shown to the user if we can't retrieve
// comments for this user
const GENERIC_COMMENT_ERROR_MESSAGE =
  'Comments could not be retrieved from the server for this video, please try again later';

const VideoCommentsSection: React.FC<VideoCommentsSectionProps> = ({
  video_id,
}) => {
  // True - if we are currently loading comments from the server
  // False - if we haven't requested comments yet from the server, or
  //       if the GET /videeos/comments request has completed (i.e. regardless of we
  //       actually got comments from it or not)
  const [isLoadingComments, setIsLoadingComments] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>('');

  const [comments, setComments] = useState<GetVideoCommentsResponse | null>(
    null
  );

  const onShowCommentsButtonClicked = async () => {
    // Reset the error message before we fetch the comments
    setErrorMessage('');

    // Start showing a loading indicator while we fetch the comments
    setIsLoadingComments(true);

    // Fetch all comments for the video from the server
    try {
      const response = await axios.get(`/videos/comments?video_id=${video_id}`);

      // If it's a success response, parse the data from the response
      // Otherwise, log an error message
      if (response.status === 200) {
        // Update the comments variable with the comments retrieved from the server
        // - NOTE: We use JSON.parse() since the api spec this endpoint returns a string
        //         with media type application/json
        const commentsFromServer = JSON.parse(response.data);
        setComments(commentsFromServer);
      } else {
        setErrorMessage(GENERIC_COMMENT_ERROR_MESSAGE);
        console.error(
          `ERROR: Error retrieving video comments from the server for video with id '${video_id}', server returned error code ${response.status}, and response ${response}`
        );
      }
    } catch (error) {
      setErrorMessage(GENERIC_COMMENT_ERROR_MESSAGE);
      console.error(
        `ERROR: Error retrieving video comments from the server for video with id '${video_id}' here's the error:`,
        error
      );
    }

    // Stop showing the loading indicator, since we finished fetching the comments
    setIsLoadingComments(false);
  };

  return (
    <div>
      {/* Button to Show the Comments Section */}
      <Button onClick={onShowCommentsButtonClicked}>Show Comments</Button>

      {/* If comments were retrieved from the server (i.e. comments !== null), 
          show all the comments */}
      {comments && <VideoCommentList comments={comments} />}

      {/* If we are currently loading comments from the server, 
          show a loading indicator */}
      {isLoadingComments && <p>Loading Comments...</p>}

      {/* If there was an error retrieving comments from the server, 
          show an error message */}
      {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
    </div>
  );
};

export default VideoCommentsSection;
