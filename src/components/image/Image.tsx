import React from 'react'
import { Box } from '@mui/material'

interface IProps {
    src: string
    display?: string
    height?: string
    width?: string
    maxWidth?: string | number
}

export default function Image({
    src,
    maxWidth,
    display,
    height,
    width,
}: IProps): ReactNode {
    return (
        <img style={{ maxWidth, display, height, width }} src={src} alt="img" />
    )
}
