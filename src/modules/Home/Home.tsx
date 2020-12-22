import React from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../../theme';

import {
  PageWrapper,
  MainContainer,
  Grid,
  Tipography,
  Button
} from '../../components';

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('your-chosed-path');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <PageWrapper>
        <MainContainer>
          <>
            <Grid bottomSpacing="large">
              <>
                <Tipography textSize="large" variant="heading">
                  Welcome to <strong>iClinic</strong>
                </Tipography>

                <Tipography>FRONTEND CHALLENGE</Tipography>
              </>
            </Grid>

            <Button textSize="regular" onClick={handleClick}>
              START
            </Button>
          </>
        </MainContainer>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default Home;
