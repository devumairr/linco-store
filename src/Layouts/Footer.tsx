import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Typography, Box, styled, Stack } from '@mui/material'
import InstagramIcon from '../assets/icons/Instagram.png'
import FacebookIcon from '../assets/icons/Facebook.png'
import TwitterIcon from '../assets/icons/Twitter.png'
import LinkedInIcon from '../assets/icons/LinkedIn.png'
import LinkItem from '../components/linkItem/LinkItem'
import { about, industries, products, services } from '../utils/Footer'
import Image from '../components/image/Image'
import Logo from '../components/logo/Logo'

const FooterBox = styled(Box)`
    background-color: #ececec;
    width: 100%;
    height: 100%;
    padding: 50px 0px;
    border: 1px solid #d7e7f4;
`
const SubFooterBox = styled(Box)`
    background-color: #242f3c;
    width: 100%;
    height: 100%;
    padding: 20px 0px;
    border: 1px solid #d7e7f4;
    box-sizing: border-box;
`
const FooterText = styled(Typography)`
    color: #d4e8fd;
`

const Icons = [InstagramIcon, FacebookIcon, TwitterIcon, LinkedInIcon]

export default function Footer(): ReactNode {
    const navigate = useNavigate()
    return (
        <>
            <FooterBox>
                <Grid container spacing={2} pl={{ lg: 0, xs: 1 }}>
                    <Grid item xs={12} sm={6} lg={1} />
                    <Grid
                        item
                        xs={12}
                        lg={2}
                        textAlign={{ xs: 'center', lg: 'start' }}
                    >
                        <Logo xLarge />
                        <Stack
                            maxWidth={{ lg: '204px' }}
                            justifyContent={{ xs: 'center' }}
                            py={3}
                            direction="row"
                        >
                            {Icons.map((icon) => (
                                <Image src={icon} />
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="h3">Industries Served</Typography>
                        <Stack py={1} gap={1}>
                            {industries.map((item) => (
                                <LinkItem href="/#" item={item} />
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                        <Typography
                            sx={{ cursor: 'pointer' }}
                            variant="h3"
                            onClick={() => navigate('/about')}
                        >
                            About Us
                        </Typography>
                        <Stack py={1} gap={1}>
                            {about.map((item) => (
                                <LinkItem href="/#" item={item} />
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                        <Typography variant="h3"> Services</Typography>
                        <Stack py={1} gap={1}>
                            {services.map((item) => (
                                <LinkItem href="/#" item={item} />
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                        <Typography variant="h3"> Products</Typography>
                        <Stack py={1} gap={1}>
                            {products.map((item) => (
                                <LinkItem href="/#" item={item} />
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} />
                </Grid>
            </FooterBox>
            <SubFooterBox>
                <Grid
                    container
                    columnSpacing={{ sm: 2, xs: 0 }}
                    textAlign={{ xs: 'center' }}
                >
                    <Grid sm={1} />
                    <Grid sm={9} xs={12}>
                        <Stack
                            direction={{ sm: 'row', xs: 'column' }}
                            justifyContent="space-between"
                        >
                            <FooterText color="#D4E8FD">
                                © 2022 Kreatix. All Rights Reserved.
                            </FooterText>
                            <FooterText color="#D4E8FD">
                                Terms of Use. Privacy Policy.
                            </FooterText>
                        </Stack>
                    </Grid>
                    <Grid sm={2} />
                </Grid>
            </SubFooterBox>
        </>
    )
}
