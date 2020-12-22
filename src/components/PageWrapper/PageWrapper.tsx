import React from 'react';

import { Wrapper } from './styles';

interface PageWrapperTypes {
  children: React.ReactElement | string;
}

const PageWrapper: React.FC<PageWrapperTypes> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default PageWrapper;
