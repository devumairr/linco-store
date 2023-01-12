import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Typography, Stack } from '@mui/material'
import CardContainer from '../../container/card/CardContainer'
import Caster from '../../assets/images/Caster.svg'
import Button from '../../components/button/Button'

const ArticleCards = [1, 2, 3, 4]
const ArticleSection = (): ReactNode => {
    const navigate = useNavigate()
    return (
        <Box py={5}>
            <Grid container spacing={2}>
                <Grid xs={1} />
                <Grid xs={10}>
                    <Grid xs={12}>
                        <Stack
                            flexWrap="wrap"
                            gap={{ xs: 0.5, sm: 2 }}
                            direction="row"
                        >
                            <Typography variant="h1" color="secondary">
                                Latest
                            </Typography>
                            <Typography variant="h1" color="primary">
                                Blog Articles
                            </Typography>
                        </Stack>
                        <Typography pb={2} variant="h5" color="secondary">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem <br /> Ipsum has been
                            the industry&apos;s standard dummy text ever since
                            the 1500s
                        </Typography>
                    </Grid>

                    <Grid
                        container
                        justifyContent="start"
                        rowGap={2}
                        onClick={() => navigate('/blog')}
                    >
                        {ArticleCards.map((item) => (
                            <Grid key={item} xs={12} sm={6} lg={4}>
                                <CardContainer
                                    margin="0px 10px"
                                    padding="20px"
                                    src={Caster}
                                    alignItems="flex-start"
                                    rating
                                    borderRadius="20px"
                                    text="Learn more"
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container justifyContent="center" py={4}>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                        >
                            View More
                        </Button>
                    </Grid>
                </Grid>
                <Grid sm={1} xs={0.75} />
            </Grid>
        </Box>
    )
}

export default ArticleSection
