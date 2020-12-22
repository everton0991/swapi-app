import styled from 'styled-components';

export type TextSizeTypes = 'small' | 'regular';

interface ButtonTypes {
  textSize: TextSizeTypes;
}

export const ButtonComponent = styled('button')<ButtonTypes>`
  color: ${(props) => props.theme.colors.buttonColor};
  background-color: ${(props) => props.theme.colors.buttonBackground};
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: ${({ textSize }) => (textSize === 'small' ? '16px' : '18px')};
  line-height: 22px;
  letter-spacing: ${({ textSize }) => textSize === 'regular' && '0.35em'};
  padding: 15px 40px;
  border-radius: 10px;
  border: none;
  text-align: center;
  outline: none;
  transition: all ease 0.5s;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.5);
  }

  &:active {
    opacity: 0.7;
  }
`;
