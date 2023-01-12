import React from 'react'
import {
    Grid,
    Typography,
    Box,
    Stack,
    styled,
    useMediaQuery,
} from '@mui/material'
import BgForm from '../../assets/images/BgForm.svg'
import FormDesign from '../../assets/images/FormDesign.svg'
import CustomButton from '../../components/button/Button'
import { theme } from '../../theme'

export default function ServiceSection(): ReactNode {
    const { breakpoints } = theme
    const IsSmDown = useMediaQuery(breakpoints.down('sm'))
    const Wrapper = styled(Box)`
        background-image: URL(${BgForm});
        position: relative;
        width: 100%;
        margin-top: 24px;
    `
    return (
        <Wrapper height={IsSmDown ? '250px' : '400px'}>
            <Box
                height="100%"
                width="100%"
                position="absolute"
                sx={{ backgroundImage: `url(${FormDesign})` }}
            />
            <Grid
                position="sticky"
                zIndex={10}
                height="100%"
                container
                spacing={2}
            >
                <Grid xs={1} sm={2} />
                <Grid xs={10} sm={8} textAlign="center" alignSelf="center">
                    <Stack
                        gap={2}
                        pb={{ xs: 2, md: 0 }}
                        justifyContent="center"
                        direction="row"
                    >
                        <Typography variant="h1" color="#fff">
                            Our
                        </Typography>
                        <Typography variant="h1" color="primary">
                            Services
                        </Typography>
                    </Stack>
                    <Typography pb={{ xs: 3 }} color="#fff" component="p">
                        Our custom product design, fabrication, and consulting
                        services help your company go from idea generation to
                        implementation. We can handle all stages of products and
                        even assist in managing inventory.
                    </Typography>
                    <CustomButton variant="outlined" color="success">
                        Learn More
                    </CustomButton>
                </Grid>
                <Grid xs={1} sm={2} />
            </Grid>
        </Wrapper>
    )
}
