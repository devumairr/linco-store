import React from 'react'
import { Grid, Typography, Box, Stack, useMediaQuery } from '@mui/material'
import FavIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/ShareOutlined'
import Card from '../card/Card'
import Image from '../image/Image'
import logo from '../../assets/images/logo.png'
import InstaIcon from '../../assets/icons/Insta.png'
import InstaCardImg from '../../assets/images/InstaCardImg.png'
import { theme } from '../../theme'

export default function InstagramCard(): ReactNode {
    const { breakpoints } = theme
    const IsSmDown = useMediaQuery(breakpoints.down('sm'))
    return (
        <Card>
            <Stack
                p={2}
                alignItems="center"
                direction="row"
                justifyContent="space-between"
            >
                <Stack alignItems="center" direction="row" gap={4}>
                    <Image width={IsSmDown ? '90px' : '150px'} src={logo} />
                    <Stack>
                        <Typography variant="h4">Shop_Linco</Typography>
                        <Typography variant="h3">OCTOBER 2</Typography>
                    </Stack>
                </Stack>
                <Image width="30px" height="30px" src={InstaIcon} />
            </Stack>
            <Stack bgcolor={theme.palette.background.light} p={2}>
                <Image height="300px" src={InstaCardImg} />
            </Stack>
            <Stack p={3}>
                <Stack justifyContent="space-between" direction="row">
                    <Stack alignItems="center" gap={1} direction="row">
                        <FavIcon />
                        <Typography variant="h4">10</Typography>
                    </Stack>
                    <Stack alignItems="center" gap={1} direction="row">
                        <Typography variant="h4">Share</Typography>
                        <ShareIcon />
                    </Stack>
                </Stack>
                <Typography textAlign="start" py={2} variant="h4">
                    Lets go @angels !!
                </Typography>
            </Stack>
        </Card>
    )
}
