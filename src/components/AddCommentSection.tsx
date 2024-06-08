import React, { ChangeEvent, useState } from 'react';
import Button from './Button';

type AddCommentSectionProps = {};

const AddCommentSection: React.FC<AddCommentSectionProps> = () => {
  const [newCommentText, setNewCommentText] = useState<string>('');

  return (
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
      <div className=''>
        <Button onClick={() => console.log()}>Comment</Button>
      </div>
    </div>
  );
};

export default AddCommentSection;
