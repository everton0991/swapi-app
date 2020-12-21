import React from 'react';

import {
  MainContainer, Grid, Tipography, Button
} from '../../components';

const Home = () => (
  <MainContainer>
    <>
      <Grid bottomSpacing="large">
        <>
          <Tipography variant="heading">
            Welcome to <strong>iClinic</strong>
          </Tipography>

          <Tipography>FRONTEND CHALLENGE</Tipography>
        </>
      </Grid>

      <Button onClick={() => {}}>START</Button>
    </>
  </MainContainer>
);

export default Home;
