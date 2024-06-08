import React from 'react';

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => {
  const buttonColor = disabled
    ? 'bg-learnwell-blue-light'
    : 'bg-learnwell-blue';

  const cursorHover = disabled ? 'cursor-normal' : 'cursor-pointer';

  return (
    <button
      disabled={disabled}
      className={`${buttonColor} px-6 py-3 rounded-3xl text-lg font-semibold text-white ${cursorHover}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
