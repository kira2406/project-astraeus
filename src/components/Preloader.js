import React from 'react';
import { Container, Grid } from '@mui/material';
import "./preloader.css"
import { ScaleLoader, SkewLoader } from 'react-spinners';

const PreLoader = () => {
  return <Container className="preloader-container" maxWidth="lg">
    <Grid display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      container>
      <ScaleLoader color="cornflowerblue" />
    </Grid>
  </Container>;
};

export default PreLoader;
