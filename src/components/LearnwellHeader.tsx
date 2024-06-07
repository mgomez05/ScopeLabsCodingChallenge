import React from 'react';
import Button from './Button';

type LearnwellHeaderProps = {
  leftSideText: string;
  onButtonClick: () => void;
  buttonText: string;
};

const LearnwellHeader: React.FC<LearnwellHeaderProps> = ({
  leftSideText,
  onButtonClick,
  buttonText,
}) => {
  return (
    <div className='flex flex-row items-center justify-between py-4 px-4'>
      <p>{leftSideText}</p>
      <img width='155px' src='full_logo_color.png' alt='Learnwell Logo'></img>
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </div>
  );
};

export default LearnwellHeader;
