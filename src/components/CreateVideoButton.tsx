import React, { ChangeEvent, useState } from 'react';

const CreateVideoButton: React.FC = () => {
  const [fileAsBase64String, setFileAsBase64String] = useState<
    string | ArrayBuffer | null
  >('');

  const [videoTitle, setVideoTitle] = useState<string>('');
  const [videoDescription, setVideoDescription] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

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

  const onSubmitButtonClicked = () => {
    // Reset the error message and success message
    // before we validate the form fields
    setErrorMessage('');
    setSuccessMessage('');

    if (!videoTitle) {
      setErrorMessage('Please fill out the title field');
      return;
    } else if (!videoDescription) {
      setErrorMessage('Please fill out the description field');
      return;
    } else if (!fileAsBase64String) {
      setErrorMessage(
        'There was an error reading the uploaded video, please try uploading the video again'
      );
      return;
    }

    setSuccessMessage('Video has been uploaded successfully!');

    // TODO Clear the form fields when the submit button is clicked
    // TODO Send the video data to the server
  };

  return (
    <div className='flex flex-col border border-black rounded-lg'>
      <p>Video Title</p>
      <input
        value={videoTitle}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setVideoTitle(event.target.value)
        }
        type='text'
      />

      <p>Video Description</p>
      <textarea
        value={videoDescription}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setVideoDescription(event.target.value)
        }
      />

      <p>Upload the Video</p>
      <input type='file' onChange={handleFileInputChange} />

      <button
        className='bg-white border border-black rounded-lg'
        onClick={onSubmitButtonClicked}
      >
        Submit
      </button>

      {/* Error Message */}
      {errorMessage && <p className='text-center'>{errorMessage}</p>}

      {/* Success Message */}
      {successMessage && <p className='text-center'>{successMessage}</p>}
    </div>
  );
};

export default CreateVideoButton;
