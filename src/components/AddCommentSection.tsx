import React, { ChangeEvent, useState } from 'react';
import Button from './Button';
import axios from 'axios';
import { ServerVideoComment } from './VideoCommentsSection';

const SOME_OTHER_USER_ID = 'john_smitherson';
const GENERIC_COMMENT_ERROR_MESSAGE =
  'There was an error sending your comment, please try again later';

type AddCommentSectionProps = {
  video_id: string;
};

const AddCommentSection: React.FC<AddCommentSectionProps> = ({ video_id }) => {
  const [newCommentText, setNewCommentText] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Attempts to send the comment to the server
  // - If the server gives us a 200 or 201 status code, we show a success message
  // - Otherwise, we show an error message
  const onCommentButtonClicked = async () => {
    try {
      const newServerVideoComment: ServerVideoComment = {
        user_id: SOME_OTHER_USER_ID,
        content: newCommentText,
        video_id: video_id,
      };
      const response = await axios.post(
        `/videos/comments`,
        newServerVideoComment
      );

      // If it's a success response, display a success message and reset the comment textbox
      // Otherwise, log an error message and display an error message
      if (response.status == 200 || response.status === 201) {
        // Show a success message
        setSuccessMessage('Your comment has been sent!');

        // Reset the comment textbox
        setNewCommentText('');
      } else {
        setErrorMessage(GENERIC_COMMENT_ERROR_MESSAGE);
        console.error(
          `ERROR: Error adding a comment for the video with id '${video_id}', status code was`,
          response.status
        );
      }
    } catch (error) {
      setErrorMessage(GENERIC_COMMENT_ERROR_MESSAGE);
      console.error(
        `ERROR: Error adding a comment for the video with id '${video_id}', here's the error:`,
        error
      );
    }
  };

  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex flex-row justify-end px-2'>
        <input
          type='text'
          placeholder='Add a comment...'
          className='w-full px-6 py-3 bg-black-opacity-10-percent rounded-3xl'
          value={newCommentText}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setNewCommentText(event.target.value)
          }
        />
        <div className='ml-1'>
          <Button
            onClick={() => onCommentButtonClicked()}
            disabled={!newCommentText}
          >
            Comment
          </Button>
        </div>
      </div>
      {errorMessage && <p className='text-center'>{errorMessage}</p>}
      {successMessage && <p className='text-center'>{successMessage}</p>}
    </div>
  );
};

export default AddCommentSection;
