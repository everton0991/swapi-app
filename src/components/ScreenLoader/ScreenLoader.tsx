import React from 'react';

import Puff from '../../assets/loaders/puff.svg';

import { Container } from './styles';

const ScreenLoader: React.FC = () => {
  return (
    <Container>
      <img src={Puff} alt="Loading.." />
    </Container>
  );
};

export default ScreenLoader;
