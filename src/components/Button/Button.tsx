import React from 'react';

import { ButtonComponent, TextSizeTypes } from './styles';

interface ButtonTypes {
  children: string;
  textSize?: TextSizeTypes;
  onClick: () => void;
}

const Button: React.FC<ButtonTypes> = ({
  children,
  textSize = 'small',
  onClick
}) => (
  <ButtonComponent type="button" textSize={textSize} onClick={onClick}>
    {children}
  </ButtonComponent>
);

export default Button;
