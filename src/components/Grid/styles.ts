import styled from 'styled-components';

export type BottomSpacingTypes = 'small' | 'medium' | 'large';

interface GridStyledTypes {
  bottomSpacing: BottomSpacingTypes;
}

export const Container = styled('div')<GridStyledTypes>`
  padding: 10px;

  ${({ bottomSpacing }) => bottomSpacing === 'small' && 'margin-bottom: 0'}

  ${({ bottomSpacing }) =>
    bottomSpacing === 'medium' && 'margin-bottom: 30px'}

  ${({
    bottomSpacing
  }) => bottomSpacing === 'large' && 'margin-bottom: 160px'}
`;
