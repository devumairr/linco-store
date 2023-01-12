import React from 'react'
import { Grid, Typography, Box, Stack, useMediaQuery } from '@mui/material'
import Newspaper from '../../assets/images/newspaper.png'
import AboutImg from '../../assets/images/About.svg'
import AboutImg2 from '../../assets/images/About2.png'
import Image from '../../components/image/Image'
import CustomButton from '../../components/button/Button'
import InstagramCard from '../../components/instagramCard/InstagramCard'
import { theme } from '../../theme'
import Header from '../../components/header/Header'

const InstaCards = [1, 2, 3, 4]

export default function About(): ReactNode {
    const { breakpoints } = theme
    const IsSmDown = useMediaQuery(breakpoints.down('sm'))
    return (
        <>
            <Header heading="About Us" />
            <Grid container mb={4}>
                <Grid xs={1} />
                <Grid alignItems="center" textAlign="center" xs={10}>
                    <Grid container rowGap={4}>
                        <Grid textAlign="left" lg={6} xs={12}>
                            <Stack pb={3} gap={1} direction="row">
                                <Typography variant="h2">About</Typography>
                                <Typography variant="h2" color="primary">
                                    Us
                                </Typography>
                            </Stack>
                            <Stack gap={3} pr={1}>
                                <Typography variant="h4">
                                    In the spring of 1974, while playing our
                                    beloved Dodgers, Hank Aaron broke Babe
                                    Ruth’s homerun record. A fewdays before that
                                    historic moment, a great company was quietly
                                    founded just outside of Downtown Los
                                    Angeles.
                                </Typography>
                                <Typography variant="h4">
                                    Linco’s doors first opened on April 1, 1974.
                                    The company was the brainchild of a few
                                    recently unemployed salespeople from Greens
                                    Material Handling Equipment, a company that
                                    had just shuttered its doors weeks earlier.
                                    One of those salesmen was Harold Patterson,
                                    a stoic, Korean War Veteran whom we would
                                    eventually call Grandpa. Harold disliked his
                                    given name to the extent that he insisted
                                    everyone call him “H”.
                                </Typography>
                                <Typography variant="h4">
                                    “H” was an ornery cuss. The third born of
                                    ten kids. He was a hardworking product of
                                    the Great Depression, and while he wasn’t
                                    the original owner of Linco, H was ambitious
                                    enough to eventually work his way into the
                                    Owner/CEO role. It’s a great story actually.
                                    One that is charged with accusations of
                                    embezzlement and secret payouts that’s best
                                    told over a few beers. Under H’s watch,
                                    Linco grew into one of the largest and most
                                    respected caster distributors in the entire
                                    US.
                                </Typography>
                                <Typography variant="h4">
                                    Eventually, Harold would enlist the help of
                                    his middle child, Steve. While Steve didn’t
                                    have a cool one-letter nickname, he did have
                                    a great business mind, and a willingness to
                                    adapt to the world that was changing around
                                    him. Linco went from a company that mainly
                                    relied on local suppliers to support local
                                    customers, to a company that had an
                                    internationally recognized brand. Linco ‘s
                                    presence grew in Mexico,
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid lg={6} xs={12}>
                            <Image
                                width="100%"
                                height={IsSmDown ? '500px' : '950px'}
                                src={Newspaper}
                            />
                        </Grid>
                        <Grid textAlign="start" lg={12}>
                            <Typography variant="h4">
                                Canada, Europe, and Asia. He also grew the
                                company’s market share across the US. Under
                                Steve’s watch, Linco rooted themselves in the
                                promise to be the most dependable Caster, Wheel,
                                and Handtruck supplier to an expanding and elite
                                list of customers throughout the world. Now that
                                we have our history out of the way, we’d like to
                                talk about Linco’s current team. Steve is still
                                a daily fixture at Linco’s corporate office.
                                However we – Ryan and Evan Patterson - have
                                taken the helm, and are steering this ship down,
                                what we think will be, a fun and exciting
                                course! Our first venture has been the creation
                                of ShopLinco.com
                            </Typography>
                        </Grid>
                        <Stack
                            alignItems="center"
                            textAlign="start"
                            direction={{ lg: 'row', xs: 'column' }}
                        >
                            <Grid xl={4} lg={5} xs={12}>
                                <Image width="100%" src={AboutImg} />
                            </Grid>
                            <Grid lg={1} />
                            <Grid xl={7} lg={6} sm={12}>
                                <Stack gap={3}>
                                    <Typography variant="h4">
                                        We would be remiss to not acknowledge
                                        the great people that make Linco a
                                        community, and not just a company. Linco
                                        has always been synonymous with great
                                        customer service. It has been the
                                        bedrock of the company, and one of the
                                        things that has always set us apart from
                                        other companies in our space. We have
                                        had a lot of great people, and
                                        characters grace the halls of our
                                        Corporate HQ, and we would not be where
                                        we are today without their hardwork.
                                    </Typography>
                                    <Typography variant="h4">
                                        From our Sales team to our Accounting
                                        Department to our Shipping and Receiving
                                        staff, Linco currently has one of the
                                        best teams that our company has ever
                                        assembled.
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Stack>
                        <Grid textAlign="start" lg={12}>
                            <Image width="100%" src={AboutImg2} />
                        </Grid>
                        <Grid lg={12}>
                            <Stack textAlign="start" gap={3}>
                                <Typography variant="h4">
                                    This puts us in a position to provide our
                                    customers with the best product offering,
                                    quick delivery, and detail oriented customer
                                    service that we’ve ever had. Take a look
                                    around our site, let us know what you think.
                                    If you need a helping hand, reach out to any
                                    of us at any time. Thanks for being a part
                                    of our journey, we can’t wait for what the
                                    next chapter has in store.
                                </Typography>
                                <Typography variant="h4">
                                    Thanks again for listening. Now that you
                                    know our story, let us help you create
                                    yours. Anything you need for your business
                                    or home – even if it’s just advice on
                                    selecting the right product for your project
                                    -- feel free to contact us via phone, email,
                                    or any of our social media!
                                </Typography>
                                <Typography variant="h4">
                                    Ryan & Evan, Co-Founders; ShopLinco.com
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid xs={12}>
                            <Stack
                                mb={2}
                                gap={1}
                                justifyContent="center"
                                direction="row"
                            >
                                <Typography variant="h3">
                                    Follow Us On Instagram
                                </Typography>
                                <Typography variant="h3" color="primary">
                                    @Shop_Linco
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={1} />
                <Grid container rowGap={4} xs={12}>
                    {InstaCards.map((item) => (
                        <Grid
                            textAlign="center"
                            key={item}
                            xl={3}
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <InstagramCard />
                        </Grid>
                    ))}
                    <Grid textAlign="center" xs={12}>
                        <CustomButton size="large" variant="contained">
                            Submit
                        </CustomButton>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
