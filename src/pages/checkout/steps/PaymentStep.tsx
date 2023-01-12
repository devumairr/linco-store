import React from 'react'
import { Radio, Grid, Typography, Stack, Box, styled } from '@mui/material'
import Card from '../../../components/card/Card'
import CardImgs from '../../../assets/images/CardImgs.png'
import PaypalImg from '../../../assets/images/PayPal.png'

import Image from '../../../components/image/Image'
import InputWithLabel from '../../../components/inputWithLabel/InputWithLabel'
import CustomButton from '../../../components/button/Button'

const RadioBox = styled(Box)`
    width: 25px;
    background-color: white;
    height: 25px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid #f48e08;
    align-items: center;
`

export default function PaymentStep(): ReactNode {
    return (
        <>
            <Grid mt={2} container spacing={2}>
                <Grid lg={12}>
                    <Card padding="40px" backgroundColor="#fff">
                        <Grid lg={12} xs={12}>
                            <Stack
                                direction={{ xs: 'column', lg: 'row' }}
                                justifyContent="space-between"
                                alignItems={{ xs: 'center', lg: 'start' }}
                            >
                                <Grid lg={6}>
                                    <Stack
                                        alignItems="center"
                                        gap={1}
                                        direction="row"
                                    >
                                        <RadioBox>
                                            <Radio
                                                style={{
                                                    width: '20px',
                                                    height: '20px',
                                                    borderRadius: '100px',
                                                    backgroundColor: '#F48E08',
                                                }}
                                            />
                                        </RadioBox>
                                        <Typography variant="h3">
                                            Credit Card
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid xl={2} />
                                <Grid xl={4} alignItems="center">
                                    <Image height="50px" src={CardImgs} />
                                </Grid>
                            </Stack>
                        </Grid>
                        <Stack mb={4} direction={{ xs: 'column', lg: 'row' }}>
                            <Grid lg={8} xs={12} px={{ xs: 3, lg: 0 }}>
                                <InputWithLabel label="Credit Card Number" />
                            </Grid>
                            <Grid
                                pl={1}
                                lg={4}
                                xs={12}
                                px={{ xs: 3, lg: 0 }}
                                alignContent="center"
                                alignItems="center"
                            >
                                <InputWithLabel label="Expiration" />
                            </Grid>
                        </Stack>
                        <Stack mb={4} direction={{ xs: 'column', lg: 'row' }}>
                            <Grid lg={8} xs={12} px={{ xs: 3, lg: 0 }}>
                                <InputWithLabel label="Name on Card" />
                            </Grid>
                            <Grid pl={1} lg={4} xs={12} px={{ xs: 3, lg: 0 }}>
                                <InputWithLabel label="Cvv" />
                            </Grid>
                        </Stack>
                        <Box
                            mb={2}
                            pb={{ lg: 2, md: 0 }}
                            bgcolor={{ xs: 'transparent', lg: '#FAF9F9' }}
                            alignItems="center"
                            textAlign="center"
                            justifyContent="space-between"
                            pl={{ xs: 1, lg: 0 }}
                        >
                            <Stack
                                direction={{ xs: 'column', lg: 'row' }}
                                justifyContent="space-between"
                                alignItems={{ xs: 'center', lg: 'start' }}
                            >
                                <Stack
                                    pl={2}
                                    alignItems="center"
                                    textAlign="center"
                                    direction="row"
                                    gap={2}
                                >
                                    <RadioBox>
                                        <Radio
                                            style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '100px',
                                                backgroundColor: '#F48E08',
                                            }}
                                        />
                                    </RadioBox>
                                    <Image height="30px" src={PaypalImg} />
                                </Stack>
                                <Stack pr={1} pl={{ xs: 1, lg: 0 }}>
                                    <Image height="50px" src={CardImgs} />
                                </Stack>
                            </Stack>
                        </Box>
                        <Grid lg={12} pt={2} pl={{ xs: 1, lg: 0 }}>
                            <CustomButton
                                size="large"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Place Order
                            </CustomButton>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
