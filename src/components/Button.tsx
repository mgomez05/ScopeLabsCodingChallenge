import React from 'react';

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className='bg-learnwell-blue px-6 py-3 rounded-3xl text-lg font-semibold text-white'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
