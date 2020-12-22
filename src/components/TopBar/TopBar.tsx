import React from 'react';

import { Wrapper, BackButton, ArrowBack } from './styles';

interface TopBarTypes {
  onClick: () => void;
}

const TopBar: React.FC<TopBarTypes> = ({ onClick }) => (
  <Wrapper>
    <BackButton type="button" onClick={onClick}>
      <ArrowBack size="30" />
      Back
    </BackButton>
  </Wrapper>
);

export default TopBar;
