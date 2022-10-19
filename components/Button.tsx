import React from 'react';

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { onClick, children } = props;

  return (
    <button className="rounded border p-4" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
