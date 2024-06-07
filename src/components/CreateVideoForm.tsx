import React, { ChangeEvent, useState, useRef } from 'react';
import Button from './Button';
import axios from 'axios';
import { MY_USER_ID } from '@/hooks/useFetchVideos';

const ERROR_UPLOADING_VIDEO_TO_SERVER_MESSAGE =
  'There was an error uploading the video to the server, please try again later';

const CreateVideoForm: React.FC = () => {
  const [fileAsBase64String, setFileAsBase64String] = useState<
    string | ArrayBuffer | null
  >('');

  const [videoTitle, setVideoTitle] = useState<string>('');
  const [videoDescription, setVideoDescription] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Remove the file that was uploaded to the file input field
  const resetFileInputField = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // To be called when a user uploads a file to the file input field
  // - Converts the uploaded file to a Base64 string so it can be sent to
  //   the server, setting the <fileAsBase64String> acccordingly
  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Read in the file from the file upload event
    const file = event.target.files && event.target.files[0];

    // Convert the file to a Base64 string
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        setFileAsBase64String(base64String);
      };

      reader.readAsDataURL(file);
    }
  };

  // Attempts to upload the video to the server with the details filled out in the form
  // - If the server gives us a 200 or 201 status code, we show a success message
  // - Otherwise, we show an error message
  const sendVideoToServer = async () => {
    try {
      const response = await axios.post(`/videos`, {
        user_id: MY_USER_ID,
        title: videoTitle,
        description: videoDescription,
        video_url: fileAsBase64String,
      });

      // If it's a success response, display a success message and reset the form fields
      // Otherwise, log an error message and display an error message
      if (response.status == 200 || response.status === 201) {
        // Show a success message
        setSuccessMessage('Video has been uploaded successfully!');

        // Reset the form fields
        setVideoTitle('');
        setVideoDescription('');
        resetFileInputField();
        setFileAsBase64String('');
      } else {
        setErrorMessage(ERROR_UPLOADING_VIDEO_TO_SERVER_MESSAGE);
        console.error(
          `ERROR: Error uploading the video to the server, status code was`,
          response.status
        );
      }
    } catch (error) {
      setErrorMessage(ERROR_UPLOADING_VIDEO_TO_SERVER_MESSAGE);
      console.error(
        `ERROR: Error uploading the video to the server, here's the error:`,
        error
      );
    }
  };

  const onSubmitButtonClicked = () => {
    // Reset the error message and success message
    // before we validate the form fields
    setErrorMessage('');
    setSuccessMessage('');

    if (!videoTitle) {
      setErrorMessage('Please fill out the Video Title field');
      return;
    } else if (!videoDescription) {
      setErrorMessage('Please fill out the Video Description field');
      return;
    } else if (!fileAsBase64String) {
      setErrorMessage(
        'There was an error reading the uploaded video, please try uploading the video again'
      );
      return;
    }

    // If we passed form validation, attempt to upload the video to the server
    sendVideoToServer();
  };

  return (
    <div className='w-[600px] flex flex-col gap-y-3 border border-black rounded-lg px-4 py-4'>
      {/* Form Title */}
      <p className='text-xl font-bold text-center'>Upload Your Video!</p>

      {/* Video Title Input */}
      <p className='text-lg font-bold'>Video Title</p>
      <input
        className='px-6 py-3 bg-black-opacity-10-percent rounded-3xl'
        value={videoTitle}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setVideoTitle(event.target.value)
        }
        type='text'
      />

      {/* Video Description Input */}
      <p className='text-lg font-bold'>Video Description</p>
      <textarea
        className='h-[100px] px-6 py-3 bg-black-opacity-10-percent rounded-3xl resize-none'
        value={videoDescription}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setVideoDescription(event.target.value)
        }
      />

      {/* Video File Upload Input */}
      <p className='text-lg font-bold'>Upload the Video</p>
      <input
        ref={fileInputRef}
        className='mb-2'
        type='file'
        onChange={handleFileInputChange}
      />

      {/* Error Message */}
      {errorMessage && <p className='text-center'>{errorMessage}</p>}

      {/* Success Message */}
      {successMessage && <p className='text-center'>{successMessage}</p>}

      {/* Submit Button */}
      <Button onClick={onSubmitButtonClicked}>Submit</Button>
    </div>
  );
};

export default CreateVideoForm;
