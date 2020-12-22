import React from 'react';

import { Container, Image } from './styles';

interface AvatarTypes {
  uri: string;
}

const Avatar: React.FC<AvatarTypes> = ({ uri }) => (
  <Container>
    <Image src={uri} />
  </Container>
);

export default Avatar;
