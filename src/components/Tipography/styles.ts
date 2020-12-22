import styled from 'styled-components';

export type VariantTypes = 'heading' | 'body';
export type TextSizeTypes = 'regular' | 'large';

interface TipographyTypes {
  textSize: TextSizeTypes;
}

export const Heading = styled('h1')<TipographyTypes>`
  color: ${(props) => props.theme.colors.primaryText};
  font-weight: normal;
  font-size: ${({ textSize }) => (textSize === 'regular' ? '36px' : '72px')};
  line-height: 88px;
  margin: 0;
`;

export const Body = styled('p')<TipographyTypes>`
  color: ${(props) => props.theme.colors.primaryText};
  font-size: ${({ textSize }) => (textSize === 'regular' ? '14px' : '18px')};
  letter-spacing: 0.35em;
  line-height: 17px;
`;
