import React from 'react';

import { Container, BottomSpacingTypes } from './styles';

interface GridTypes {
  children: React.ReactElement;
  bottomSpacing: BottomSpacingTypes;
}

const Grid: React.FC<GridTypes> = ({ children, bottomSpacing = 'small' }) => (
  <Container bottomSpacing={bottomSpacing}>{children}</Container>
);

export default Grid;
