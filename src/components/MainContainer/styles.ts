import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    display: table;

    & div:first-child {
      display: table-footer-group;
    }
  }
`;
