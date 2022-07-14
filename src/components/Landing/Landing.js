import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Image from './Image'
import Introduction from './Introduction'
import "./landing.css"

const Landing = () => {
    return (
        <Container class="landing-container">
            <Box height="10vh">

            </Box>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-end">
                <Grid item md={7} xs={12}>
                    <Introduction />
                </Grid>
                <Grid item md={5} xs={12}>
                    <Image />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Landing