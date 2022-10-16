import React from 'react';

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { onClick, children } = props;

  return (
    <button className="border p-4 rounded" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
