import { Box, Divider, Grid, InputBase, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../../components/image/Image'
import master from '../../assets/icons/master.png'
import visa from '../../assets/icons/visa.png'
import discover from '../../assets/icons/discover.png'
import american from '../../assets/icons/american.png'
import paypal from '../../assets/icons/paypal.png'
import { theme } from '../../theme'
import CustomCart from '../../components/cart/Cart'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'

const Cart = (): ReactNode => {
    const navigate = useNavigate()
    return (
        <>
            <Header heading="Shopping Cart" />
            <Grid
                py={{ xs: 2, sm: 5, lg: 10 }}
                container
                bgcolor={{ xs: '#f4f4f4', lg: '#fcfcfb' }}
            >
                <Grid xs={1} />
                <Grid
                    container
                    alignItems="center"
                    textAlign="center"
                    sm={10}
                    lg={10}
                >
                    <Grid xs={1} display={{ xs: 'block', sm: 'none' }} />
                    <Grid item xs={1}>
                        <Stack
                            gap={1}
                            direction="row"
                            py={2}
                            justifyContent="start"
                        >
                            <Typography variant="h2">Shopping</Typography>
                            <Typography variant="h2" color="primary">
                                Cart
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={1} display={{ xs: 'block', lg: 'none' }} />
                    <Grid container gap={{ lg: 5 }}>
                        {Array.from({ length: 3 }).map((_) => (
                            <CustomCart />
                        ))}
                    </Grid>
                </Grid>
                <Grid lg={1} sm={2} />
            </Grid>
            <Box p={1} bgcolor={theme.palette.background.lightGrey} />
            <Grid
                container
                justifyContent="center"
                py={{ xs: 2 }}
                bgcolor={{ xs: '#f4f4f4', lg: '#fcfcfb' }}
            >
                <Grid xs={1} />
                <Grid item xs={10} lg={6} xl={7} py={{ xs: 1, sm: 3, lg: 0 }}>
                    <Stack gap={1} direction="row" justifyContent="start">
                        <Typography variant="h2">Continue</Typography>
                        <Typography variant="h2" color="primary">
                            Shopping
                        </Typography>
                    </Stack>
                </Grid>
                <Grid xs={1} display={{ xs: 'block', lg: 'none' }} />
                <Grid
                    sm={2}
                    display={{ xs: 'none', sm: 'block', lg: 'none' }}
                />
                <Grid
                    bgcolor={{ xs: 'white', lg: 'transparent' }}
                    display="flex"
                    direction="column"
                    gap={{ xs: 2, lg: 3 }}
                    px={{ xs: 3, sm: 4, lg: 0 }}
                    py={{ xs: 5, lg: 4 }}
                    xs={12}
                    sm={8}
                    md={6}
                    lg={4}
                    xl={3}
                >
                    <Stack
                        p={2}
                        direction="row"
                        justifyContent="space-between"
                        bgcolor={theme.palette.background.white}
                        boxShadow={theme.shadows[3]}
                    >
                        <InputBase
                            fullWidth
                            placeholder="Enter your Coupon Code"
                        />
                        <Button variant="contained" color="primary">
                            Apply
                        </Button>
                    </Stack>
                    <Stack
                        gap={1}
                        direction="row"
                        justifyContent="space-between"
                    >
                        <Typography variant="h6" fontWeight={700}>
                            Subtotal
                        </Typography>
                        <Typography variant="h6">$80.97</Typography>
                    </Stack>
                    <Stack
                        gap={1}
                        direction="row"
                        justifyContent="space-between"
                    >
                        <Typography variant="h6" fontWeight={700}>
                            Shipping
                        </Typography>
                        <Typography variant="h6">Estimate Shipping</Typography>
                    </Stack>
                    <Divider variant="fullWidth" />
                    <Stack
                        py={{ xs: 1, lg: 3 }}
                        gap={1}
                        direction="row"
                        justifyContent="space-between"
                    >
                        <Typography variant="h6" fontWeight={800}>
                            GRAND TOTAL
                        </Typography>
                        <Typography variant="h6" fontWeight={800}>
                            $80.97
                        </Typography>
                    </Stack>
                    <Grid
                        xs={12}
                        container
                        display="flex"
                        justifyContent="space-between"
                        direction="row"
                    >
                        <Grid item xs={4} sm={4} lg={6} pr="2px">
                            <Button
                                sx={{ fontWeight: 700, py: 2 }}
                                variant="contained"
                                fullWidth
                                size="small"
                                color="primary"
                                onClick={() => navigate('/checkout')}
                            >
                                Checkout
                            </Button>
                        </Grid>
                        <Grid item xs={7} lg={6} pr="2px">
                            <Button
                                sx={{ fontWeight: 700, py: 2 }}
                                variant="outlined"
                                fullWidth
                                size="small"
                                color="secondary"
                            >
                                Request a Quote
                            </Button>
                        </Grid>
                    </Grid>
                    <Box py={{ xs: 1, lg: 2 }} textAlign="center">
                        <Typography variant="h5">-- or use --</Typography>
                    </Box>
                    <Grid container gap={1} justifyContent="center">
                        <Stack
                            boxShadow={theme.shadows[1]}
                            p={2}
                            direction="row"
                            bgcolor={theme.palette.background.white}
                            gap={1}
                        >
                            <Image width="40px" src={master} />
                            <Image width="40px" src={visa} />
                            <Image width="40px" src={discover} />
                            <Image width="40px" src={american} />
                        </Stack>
                        <Box
                            display="flex"
                            boxShadow={theme.shadows[1]}
                            alignItems="center"
                            p={2}
                            bgcolor={theme.palette.background.white}
                        >
                            <Image width="70px" src={paypal} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    sm={1}
                    display={{ xs: 'none', sm: 'block', lg: 'none' }}
                />
                <Grid xs={1} />
            </Grid>
            <Intro />
        </>
    )
}

export default Cart
