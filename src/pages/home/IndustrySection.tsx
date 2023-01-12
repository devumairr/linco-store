import React from 'react'
import { Box, Grid, Typography, Stack } from '@mui/material'
import CardContainer from '../../container/card/CardContainer'
import Caster from '../../assets/images/Caster.svg'
import Slider from '../../components/slider/Sliders'

const IndustrySection = (): ReactNode => {
    const IndustryCards = [1, 2, 3, 4, 5]
    return (
        <Box py={4}>
            <Grid container spacing={2}>
                <Grid xs={1} />
                <Grid xs={11}>
                    <Grid xs={11} sm={10} md={10} lg={6} xl={5}>
                        <Stack gap={2} direction="row">
                            <Typography variant="h1" color="secondary">
                                Our
                            </Typography>
                            <Typography variant="h1" color="primary">
                                Industries
                            </Typography>
                        </Stack>
                        <Typography
                            pb={2}
                            variant="h5"
                            color="secondary"
                            component="p"
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem <br /> Ipsum has been
                            the industry&apos;s standard dummy text ever since
                            the 1500s
                        </Typography>
                    </Grid>
                    <Grid xs={11} sm={12}>
                        <Slider>
                            {IndustryCards.map((item) => (
                                <CardContainer
                                    margin="0px 10px"
                                    padding="20px"
                                    src={Caster}
                                    alignItems="flex-start"
                                    rating
                                    borderRadius="20px"
                                    text="Learn more"
                                />
                            ))}
                        </Slider>
                        <Grid xs={1} lg={0} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default IndustrySection
