import React from 'react'
import {
    Typography,
    Stack,
    Grid,
    Box,
    Divider,
    Stepper,
    Step,
    StepContent,
    Button,
    StepLabel,
} from '@mui/material'
import { STEPS } from '../../utils/CheckoutItems'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import CustomButton from '../../components/button/Button'
import CartImg from '../../assets/images/CartImg.svg'
import Image from '../../components/image/Image'
import CustomerStep from './steps/CustomerStep'
import ShippingStep from './steps/ShippingStep'
import PaymentStep from './steps/PaymentStep'
import Intro from '../../components/intro/Intro'

const HandleStepContent = (activeStep): ReactNode => {
    switch (activeStep) {
        case 0:
            return <CustomerStep />
        case 1:
            return <ShippingStep />
        case 2:
            return <ShippingStep />
        case 3:
            return <PaymentStep />
        default:
            return null
    }
}

export default function Checkout(): ReactNode {
    const [activeStep, setActiveStep] = React.useState(0)
    const handleNext = (): any => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    return (
        <>
            <Header heading="Checkout" />
            <Grid container spacing={2}>
                <Grid xl={1} lg={2} md={3} sm={2} xs={5} />
                <Grid xl={5} lg={5} md={7} xs={12}>
                    <Stack gap={4} alignItems="center">
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {STEPS.map((step, index) => (
                                <Step key={step}>
                                    <Stack
                                        alignItems="center"
                                        direction={{ xs: 'column', lg: 'row' }}
                                    >
                                        <StepLabel />
                                        <Typography variant="h3">
                                            {step}
                                        </Typography>
                                    </Stack>
                                    <StepContent>
                                        {HandleStepContent(activeStep)}
                                        {index !== STEPS.length - 1 && (
                                            <Box>
                                                <Box
                                                    display="flex"
                                                    justifyContent={{
                                                        xs: 'center',
                                                        xl: 'flex-end',
                                                    }}
                                                    mt={2}
                                                    pr={2}
                                                >
                                                    <CustomButton
                                                        size="large"
                                                        onClick={handleNext}
                                                        variant="contained"
                                                        color="primary"
                                                    >
                                                        Continue
                                                    </CustomButton>
                                                </Box>
                                            </Box>
                                        )}
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </Stack>
                </Grid>
                <Grid lg={1} xs={2} sm={3} md={4} />
                <Grid py={2} px={1} md={6} lg={4} sm={7} xs={9}>
                    <Card backgroundColor="#fff">
                        <Stack
                            p={2}
                            alignItems="center"
                            direction="row"
                            justifyContent="space-between"
                        >
                            <Typography variant="h4">Order Summary</Typography>

                            <CustomButton variant="text" color="primary">
                                Edit Cart
                            </CustomButton>
                        </Stack>
                        <Divider variant="fullWidth" />
                        <Stack
                            p={2}
                            direction={{ xs: 'column', md: 'row' }}
                            justifyContent="space-between"
                            alignContent={{ xs: 'center', md: 'flex-start' }}
                            textAlign={{ xs: 'center', md: 'start' }}
                        >
                            <Stack
                                gap={2}
                                direction={{ xs: 'column', md: 'row' }}
                                alignItems={{ xs: 'center', md: 'flex-start' }}
                                textAlign={{ xs: 'center', md: 'start' }}
                            >
                                <Card height="80px">
                                    <Image src={CartImg} />
                                </Card>
                                <Stack width="250px" pb={{ xss: 1, md: 0 }}>
                                    <Typography variant="h4">
                                        3 x Colson Polyurethane Rigid Caster 4 x
                                        2 (400 LBS Cap) 4.04108.929.7
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Typography variant="h4">$80.97</Typography>
                        </Stack>
                        <Divider variant="fullWidth" />
                        <Stack p={2} gap={2}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                            >
                                <Typography>Subtotal</Typography>
                                <Typography variant="h4">$80.97</Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                            >
                                <Typography>Shipping</Typography>
                                <Typography variant="h4">---</Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                            >
                                <Typography>Sales Tax</Typography>
                                <Typography variant="h4">$0.00</Typography>
                            </Stack>
                        </Stack>
                        <Stack alignItems="start">
                            <CustomButton variant="text" color="primary">
                                Coupon/Gift Certificate
                            </CustomButton>
                        </Stack>
                        <Divider variant="fullWidth" />
                        <Stack
                            p={2}
                            direction="row"
                            justifyContent="space-between"
                        >
                            <Typography>Sales Tax</Typography>
                            <Typography variant="h4" fontWeight="bold">
                                $80.97
                            </Typography>
                        </Stack>
                    </Card>
                </Grid>
                <Grid xl={1} md={0} />
            </Grid>
            <Intro />
        </>
    )
}
