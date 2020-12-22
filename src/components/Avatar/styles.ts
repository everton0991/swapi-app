import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  margin: 100px auto 0 auto;
`;

export const Image = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 200px;

  @media (max-width: 768px) {
    width: 302px;
    height: 302px;
  }
`;
