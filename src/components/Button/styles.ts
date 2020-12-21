import styled from 'styled-components';
import { colors } from '../../theme';

export const ButtonComponent = styled.button`
  color: ${colors.white};
  background-color: ${colors.blue};
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  border: none;
  text-align: center;
  line-height: 22px;
  letter-spacing: 0.35em;
  font-size: 18px;
  padding: 15px 30px;
  border-radius: 10px;
`;
