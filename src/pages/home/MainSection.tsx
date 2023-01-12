import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Typography, Stack, useMediaQuery, Box } from '@mui/material'
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded'
import { theme } from '../../theme'
import CustomButton from '../../components/button/Button'
import Card from '../../components/card/Card'
import wheel2 from '../../assets/images/wheel2.png'
import wheel3 from '../../assets/images/wheel3.png'
import SliderImage from '../../assets/images/SliderImage.svg'
import Image from '../../components/image/Image'
import SingleSlider from '../../components/slider/SingleSlider'

const wheels = [wheel2, wheel3, wheel2, wheel2]
export default function MainSection(): ReactNode {
    const navigate = useNavigate()
    const { breakpoints } = theme
    const IsSmDown = useMediaQuery(breakpoints.down('sm'))

    return (
        <Grid
            justifyContent={{ sm: 'center', lg: 'start' }}
            container
            spacing={2}
        >
            <Grid xs={1} />
            <Grid mt={{ md: 10, xs: 5 }} xs={11} sm={10} md={10} lg={6} xl={5}>
                <Typography variant="h1">LINCO</Typography>
                <Stack direction="row" spacing={2}>
                    <Typography variant="h1">Has You</Typography>
                    <Typography
                        width="auto"
                        bgcolor={theme.palette.primary.main}
                        variant="h1"
                        color="#fff"
                        px={1}
                    >
                        Covered
                    </Typography>
                </Stack>
                <Typography
                    py={1}
                    color={theme.palette.info.main}
                    component="p"
                    variant="h5"
                >
                    A product portfolio of casters, handtrucks, carts, and more
                    offering solutions to a wide variety of industries. We
                    manufacturer our products here in the USA and distribute
                    them worldwide.
                </Typography>
                <Stack direction="row">
                    <CustomButton
                        onClick={() => navigate('/categories')}
                        variant="outlined"
                        color="secondary"
                    >
                        Learn More
                    </CustomButton>
                    <CustomButton
                        endIcon={<PlayCircleRoundedIcon />}
                        variant="text"
                        color="primary"
                    >
                        Watch Video
                    </CustomButton>
                </Stack>
                <Stack
                    py={4}
                    gap={2}
                    direction="row"
                    justifyContent={{
                        xs: 'center',
                        lg: 'start',
                    }}
                    flexWrap="wrap"
                >
                    {wheels.map((item) => (
                        <Card padding="12px 16px">
                            <Image src={item} />
                        </Card>
                    ))}
                </Stack>
            </Grid>
            <Grid xs={12} sm={11} md={7} lg={6} xl={5}>
                <SingleSlider>
                    {wheels.map(() => (
                        <Image width={IsSmDown && '300px'} src={SliderImage} />
                    ))}
                </SingleSlider>
            </Grid>
        </Grid>
    )
}
