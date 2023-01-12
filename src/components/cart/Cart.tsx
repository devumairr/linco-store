import { Close } from '@mui/icons-material'
import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import wheel from '../../assets/images/wheel.png'
import { theme } from '../../theme'
import Counter from '../counter/Counter'
import Image from '../image/Image'

const Cart = (): ReactNode => {
    return (
        <Grid
            boxShadow={theme.shadows[5]}
            container
            direction="row"
            bgcolor="#fff"
            borderBottom={{ xs: 2, lg: 0 }}
            borderColor="#D9D9D9 !important"
        >
            <Grid
                item
                p={2}
                borderColor="#D9D9D9 !important"
                borderRight={{ xs: 0, lg: 2 }}
                gap={2}
                lg={4}
                xs={12}
                display="flex"
                direction="row"
                alignItems={{ xs: 'flex-start', lg: 'center' }}
            >
                <Stack width={{ xs: '100%', lg: 'auto' }}>
                    <Stack
                        display={{ lg: 'none' }}
                        alignSelf="flex-end"
                        width={25}
                        alignItems="center"
                        p="4px 12px"
                        bgcolor={theme.palette.background.lightGrey}
                    >
                        <Close fontSize="small" />
                    </Stack>
                    <Stack direction="row" gap={2}>
                        <Stack
                            px={1}
                            bgcolor={theme.palette.background.lightGrey}
                        >
                            <Image maxWidth="60px" src={wheel} />
                        </Stack>
                        <Stack
                            textAlign="left"
                            width={{ xs: '100%', lg: 'auto' }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                pb={{ xs: '2px', lg: 0 }}
                            >
                                Colson Polyurethane Rigid Caster 4 x 2 (400 LBS
                                Cap) 4.04108.929.7
                            </Typography>
                            <Stack
                                display={{ lg: 'none' }}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Stack>
                                    <Typography
                                        variant="h5"
                                        pb={{ xs: '2px', lg: 0 }}
                                    >
                                        Quantity: 01
                                    </Typography>
                                    <Typography variant="h4" fontWeight="bold">
                                        $26.99
                                    </Typography>
                                </Stack>
                                <Counter />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Grid display={{ xs: 'none', xl: 'block' }} xl={3} />
            </Grid>
            <Grid
                container
                xs={2}
                display={{ xs: 'none', lg: 'flex' }}
                borderColor="#D9D9D9 !important"
                borderRight={{ xs: 0, lg: 2 }}
            >
                <Grid xs={2} />
                <Grid
                    item
                    xs={8}
                    direction="column"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                >
                    <Typography variant="h4">Eatch</Typography>
                    <Typography variant="h4" fontWeight="bold">
                        $26.99
                    </Typography>
                </Grid>
                <Grid xs={2} />
            </Grid>
            <Grid
                container
                justifyContent="center"
                display={{ xs: 'none', lg: 'flex' }}
                xs={3}
                borderColor="#D9D9D9 !important"
                borderRight={{ xs: 0, lg: 2 }}
            >
                <Stack
                    py={2}
                    direction="column"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="h4">Quantity</Typography>
                    <Counter />
                </Stack>
            </Grid>
            <Grid
                container
                justifyContent="center"
                xs={2}
                display={{ xs: 'none', lg: 'flex' }}
                borderColor="#D9D9D9 !important"
                borderRight={{ xs: 0, lg: 2 }}
            >
                <Stack
                    textAlign="center"
                    direction="column"
                    justifyContent="center"
                    gap={2}
                >
                    <Typography variant="h4">Total</Typography>
                    <Typography variant="h4" fontWeight="bold">
                        $80.67
                    </Typography>
                </Stack>
            </Grid>
            <Grid
                display={{ xs: 'none', lg: 'flex' }}
                xs={1}
                alignItems="center"
                justifyContent="center"
                container
            >
                <Stack
                    alignItems="center"
                    p={1}
                    bgcolor={theme.palette.background.lightGrey}
                >
                    <Close fontSize="large" />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Cart
