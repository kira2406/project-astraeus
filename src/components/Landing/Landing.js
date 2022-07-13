import { Box, Grid } from '@mui/material'
import React from 'react'
import "./landing.css"

const Landing = () => {
    return (
        <Box class="landing-container">
            <Box height="20vh">

            </Box>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-end">
                <Grid item md={8} xs={12}>
                    Hi, I'm KUSHWANTH P
                </Grid>
                <Grid item md={4} xs={12}>
                    Here my bootiful photo will came
                </Grid>
            </Grid>
        </Box>
    )
}

export default Landing