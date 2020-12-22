import styled from 'styled-components';

interface WrapperTypes {
  topSpacing: boolean;
}

export const Wrapper = styled('div')<WrapperTypes>`
  background-color: ${(props) => props.theme.colors.mainBackground};
  padding-top: ${({ topSpacing }) => topSpacing && '170px'};
  width: 100%;
  height: 100%;
`;
