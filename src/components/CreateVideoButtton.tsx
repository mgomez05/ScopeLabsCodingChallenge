import React, { ChangeEvent, useState } from 'react';

const CreateVideoButton: React.FC = () => {
  const [fileAsBase64String, setFileAsBase64String] = useState<
    string | ArrayBuffer | null
  >('');

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

  return (
    <div>
      <input type='file' onChange={handleFileInputChange} />
    </div>
  );
};

export default CreateVideoButton;
