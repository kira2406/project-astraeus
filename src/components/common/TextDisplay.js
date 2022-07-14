import { Box } from '@mui/material'
import React from 'react'

const TextDisplay = ({ text, fontSize, color, fontFamily }) => {
    return (
        <Box fontFamily={fontFamily} fontSize={fontSize} color={color}>{text}</Box>
    )
}

export default TextDisplay