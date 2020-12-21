import React from 'react';

import { Wrapper } from './styles';

interface AvatarTypes {
  children: React.ReactChildren | string;
}

const Avatar: React.FC<AvatarTypes> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default Avatar;
