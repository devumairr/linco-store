import React from 'react'
import { Typography, Box } from '@mui/material'
import HeaderImg from '../../assets/images/HeaderImg.svg'

interface IProps {
    heading: string
}
export default function Header({ heading }: IProps): ReactNode {
    return (
        <Box
            sx={{ backgroundImage: `url(${HeaderImg})` }}
            justifyContent="center"
            display="flex"
            alignItems="center"
            height={{ xs: 200, sm: 300, lg: 500 }}
        >
            <Typography variant="h1">{heading}</Typography>
        </Box>
    )
}
