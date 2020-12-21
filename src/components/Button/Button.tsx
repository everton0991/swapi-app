import React from 'react';

import { ButtonComponent } from './styles';

interface ButtonTypes {
  children: string;
  onClick: () => void;
}

const Button: React.FC<ButtonTypes> = ({ children, onClick }) => (
  <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
);

export default Button;
