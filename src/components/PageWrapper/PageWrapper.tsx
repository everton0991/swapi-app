import React from 'react';

import { Wrapper } from './styles';

interface PageWrapperTypes {
  children: React.ReactElement | string;
  topSpacing?: boolean;
}

const PageWrapper: React.FC<PageWrapperTypes> = ({
  children,
  topSpacing = false
}) => <Wrapper topSpacing={topSpacing}>{children}</Wrapper>;

export default PageWrapper;
