import { Box, Container } from '@mui/material'
import React from 'react'
import TextDisplay from '../common/TextDisplay'
import "./introduction.css"

const Introduction = () => {
    return (
        <Container className='introduction-container'>
            <TextDisplay fontFamily="Roboto Condensed" color="#FFFFFF" fontSize="80px" text="Hi, I'm" />
            <TextDisplay fontFamily="Righteous" color="#FFFFFF" fontSize="100px" text="KUSHWANTH P" />
            <TextDisplay fontFamily="Righteous" color="#C77DFF" fontSize="48px" text="ASPIRING GAME DEV" />
        </Container>
    )
}

export default Introduction