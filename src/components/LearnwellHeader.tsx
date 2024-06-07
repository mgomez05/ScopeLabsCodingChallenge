import React from 'react';

const LearnwellHeader: React.FC = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <p>Check out our videos!</p>
      <img width='155px' src='full_logo_color.png' alt='Learnwell Logo'></img>
      <button>Click me</button>
    </div>
  );
};

export default LearnwellHeader;
