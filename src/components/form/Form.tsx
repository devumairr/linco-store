import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { Check } from '@mui/icons-material'
import Button from '../button/Button'
import BgForm from '../../assets/images/BgForm.svg'
import FormDesign from '../../assets/images/FormDesign.svg'
import { theme } from '../../theme'
import Input from '../input/Input'

const Form = (): ReactNode => {
    return (
        <Box position="relative">
            <Box
                height="100%"
                width="100%"
                position="absolute"
                sx={{ backgroundImage: `url(${BgForm})` }}
            />
            <Box
                height="100%"
                width="100%"
                position="absolute"
                sx={{ backgroundImage: `url(${FormDesign})` }}
            />
            <Box component="form" py={5} position="sticky" zIndex={99}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    gap="5px"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography
                        textAlign="center"
                        variant="h2"
                        color={theme.palette.text.secondary}
                    >
                        Bulk Discounts,
                    </Typography>
                    <Typography color="primary" variant="h2">
                        Sample &{' '}
                    </Typography>
                </Stack>
                <Typography
                    pb={5}
                    textAlign="center"
                    variant="h2"
                    color={theme.palette.text.secondary}
                >
                    Products Inquiries
                </Typography>
                <Grid
                    px={{ xs: 1, sm: 0 }}
                    container
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    marginBottom={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid
                        item
                        display={{ xs: 'none', sm: 'block' }}
                        sm={0.5}
                        md={1}
                    />
                    <Grid item xs={12} sm={5.5} md={5}>
                        <Input color="secondary" placeholder="First Name:" />
                    </Grid>
                    <Grid item xs={12} sm={5.5} md={5}>
                        <Input color="secondary" placeholder="Last Name:" />
                    </Grid>
                    <Grid
                        item
                        sm={0.5}
                        md={1}
                        display={{ xs: 'none', sm: 'block' }}
                    />
                </Grid>
                <Grid
                    px={{ xs: 1, sm: 0 }}
                    container
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    marginBottom={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid
                        item
                        xs={0}
                        sm={0.5}
                        md={1}
                        display={{ xs: 'none', sm: 'block' }}
                    />
                    <Grid item xs={12} sm={5.5} md={5}>
                        <Input color="secondary" placeholder="Company Name:" />
                    </Grid>
                    <Grid item xs={12} sm={5.5} md={5}>
                        <Input color="secondary" placeholder="Email Address:" />
                    </Grid>
                    <Grid
                        item
                        sm={0.5}
                        md={1}
                        display={{ xs: 'none', sm: 'block' }}
                    />
                </Grid>
                <Grid
                    px={{ xs: 1, sm: 0 }}
                    container
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    marginBottom={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid
                        item
                        sm={0.5}
                        md={1}
                        display={{ xs: 'none', sm: 'block' }}
                    />
                    <Grid item xs={12} sm={5.5} md={5}>
                        <Input color="secondary" placeholder="Zip Code:" />
                    </Grid>
                    <Grid item xs={12} sm={5.5} md={5}>
                        <Input color="secondary" placeholder="Phone Number:" />
                    </Grid>
                    <Grid
                        item
                        sm={0.5}
                        md={1}
                        display={{ xs: 'none', sm: 'block' }}
                    />
                </Grid>
                <Grid
                    px={{ xs: 1, sm: 0 }}
                    container
                    spacing={{ xs: 1, sm: 4 }}
                    marginBottom={{ xs: 1, md: 3 }}
                >
                    <Grid
                        item
                        sm={0.5}
                        md={1}
                        display={{ xs: 'none', sm: 'block' }}
                    />
                    <Grid item xs={12} sm={11} md={10}>
                        <Input
                            placeholder="Description:"
                            multiline
                            color="secondary"
                            minRows={7}
                        />
                    </Grid>
                    <Grid
                        item
                        sm={0.5}
                        md={1}
                        display={{ xs: 'none', sm: 'block' }}
                    />
                </Grid>
                <Grid
                    container
                    spacing={{ xs: 1.5, sm: 4 }}
                    gap={{ xs: 1, sm: 0 }}
                    alignItems="baseline"
                    justifyContent={{ xs: 'center', sm: 'start' }}
                >
                    <Grid
                        item
                        px={{ xs: 1, sm: 0 }}
                        sm={0.5}
                        md={1}
                        display={{ xs: 'none', sm: 'block' }}
                    />
                    <Grid container item xs={12} sm={7}>
                        <Stack
                            justifyContent={{
                                xs: 'space-around',
                                sm: 'start',
                            }}
                            direction="row"
                            alignItems="center"
                            flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
                            gap={1}
                        >
                            <Typography color={theme.palette.text.secondary}>
                                By checking this box you agree to recieve future
                                marketing emails:
                            </Typography>
                            <Stack
                                padding="1px"
                                borderRadius="50%"
                                bgcolor={theme.palette.text.secondary}
                            >
                                <Check color="secondary" />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={5} sm={2} md={3}>
                        <Button
                            sx={{ py: 2 }}
                            fullWidth
                            variant="contained"
                            size="medium"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </Grid>
                    <Grid
                        item
                        display={{ xs: 'none', sm: 'block' }}
                        sm={0.5}
                        md={1}
                    />
                </Grid>
            </Box>
        </Box>
    )
}

export default Form
