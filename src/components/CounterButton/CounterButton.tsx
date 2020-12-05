import React, { PropsWithChildren } from 'react';

interface ButtonProps {
  color: string;
}

const CounterButton = (props: PropsWithChildren<ButtonProps>) => {
  const { color, children } = props;
  return (
    <span
      style={{
        cursor: 'pointer',
        backgroundColor: color,
        margin: '20px',
        padding: '10px',
      }}
    >
      {children}
    </span>
  );
};

export default CounterButton;
