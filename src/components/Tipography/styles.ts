import styled from 'styled-components';
import { colors } from '../../theme';

export type VariantTypes = 'heading' | 'body';

export const Heading = styled.h1`
  color: ${colors.blue};
  font-weight: normal;
  font-size: 72px;
  line-height: 88px;
  margin: 0;
`;

export const Body = styled.p`
  color: ${colors.blue};
  font-size: 14px;
  letter-spacing: 0.35em;
  line-height: 17px;
`;
