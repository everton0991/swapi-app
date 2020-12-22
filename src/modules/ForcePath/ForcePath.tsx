import React, { useEffect, useCallback, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchMaster } from '../../store/actions/fetchMasters';
import { darkTheme, lightTheme } from '../../theme';

import {
  Avatar,
  Button,
  Grid,
  MainContainer,
  PageWrapper,
  ScreenLoader,
  Tipography,
  TopBar
} from '../../components';
import DarthVader from '../../assets/images/darth-vader.png';
import LukeSkywalker from '../../assets/images/luke-skywalker.png';

interface ForcePathProps {
  masterName: string;
  onFetchMaster: () => void;
}

const ForcePath: React.FC<ForcePathProps> = ({ masterName, onFetchMaster }) => {
  const history = useHistory();

  const isDarkTheme = masterName === 'Darth Vader';

  const handleNewPath = useCallback(() => onFetchMaster(), [onFetchMaster]);

  const handleGoBack = () => history.goBack();

  useEffect(() => {
    handleNewPath();
  }, [handleNewPath]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Suspense fallback={<ScreenLoader />}>
        <PageWrapper>
          <>
            <TopBar onClick={handleGoBack} />

            <MainContainer>
              <>
                <Grid bottomSpacing="small">
                  <Button textSize="small" onClick={handleNewPath}>
                    Choose your path again, Padawan
                  </Button>
                </Grid>

                <Grid bottomSpacing="small">
                  <Avatar uri={isDarkTheme ? DarthVader : LukeSkywalker} />
                </Grid>

                <Grid bottomSpacing="small">
                  <Tipography variant="heading">
                    Your master is <strong>{masterName}</strong>
                  </Tipography>
                </Grid>
              </>
            </MainContainer>
          </>
        </PageWrapper>
      </Suspense>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: any) => ({
  masterName: state.master.name
});

const mapDispatchToProps = {
  onFetchMaster: fetchMaster
};

export default connect(mapStateToProps, mapDispatchToProps)(ForcePath);
