import React from 'react';

import { Wrapper } from './styles';

interface MainContainerTypes {
  children: any;
}

const MainContainer: React.FC<MainContainerTypes> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default MainContainer;
