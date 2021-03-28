import React from 'react';

export type ButtonProps = Readonly<{
  label: string;
}>;

const Button = (props: ButtonProps) => {
  const { label } = props;
  return (
    <button>
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: '',
};

export default Button;