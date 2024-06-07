import React, { ChangeEvent, useState } from 'react';
import Button from './Button';

const CreateVideoForm: React.FC = () => {
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

    setSuccessMessage('Video has been uploaded successfully!');

    // TODO Clear the form fields when the submit button is clicked
    // TODO Send the video data to the server
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
      <input className='mb-2' type='file' onChange={handleFileInputChange} />

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
