import styled from 'styled-components';
import { darkTheme } from '../../theme';

export const Container = styled.div`
  background: ${darkTheme.colors.mainBackground};
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
