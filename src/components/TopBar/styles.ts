import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md';

export const Wrapper = styled.div`
  height: 70px;
  margin: 0;
  padding: 45px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const BackButton = styled.button`
  color: ${(props) => props.theme.colors.primaryText};
  outline: none;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;

export const ArrowBack = styled(MdArrowBack)`
  color: ${(props) => props.theme.colors.primaryText};
  margin-right: 10px;
`;
