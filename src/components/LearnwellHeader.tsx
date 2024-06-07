import React from 'react';
import Button from './Button';

const LearnwellHeader: React.FC = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <p>Check out our videos!</p>
      <img width='155px' src='full_logo_color.png' alt='Learnwell Logo'></img>
      <Button onClick={() => console.log('Button clicked!')}>Upload</Button>
    </div>
  );
};

export default LearnwellHeader;
