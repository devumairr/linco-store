import React from 'react'
import { Box, Grid, Typography, Stack, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import wheel2 from '../../assets/images/wheel2.png'
import wheel3 from '../../assets/images/wheel3.png'
import CardContainer from '../../container/card/CardContainer'
import Button from '../../components/button/Button'

const ProductCards = [1, 2, 3, 4]
const ProductSection = (): ReactNode => {
    const [value, setValue] = React.useState('1')
    const handleChange = (
        event: React.SyntheticEvent,
        newValue: string
    ): void => {
        setValue(newValue)
    }
    return (
        <Box py={5} bgcolor="lightGrey">
            <Grid container spacing={2}>
                <Grid xs={1} />
                <Grid xs={10} textAlign="center">
                    <Stack
                        justifyContent="center"
                        flexWrap="wrap"
                        gap={{ xs: 0.5, sm: 2 }}
                        direction="row"
                    >
                        <Typography variant="h1" color="secondary">
                            Our
                        </Typography>
                        <Typography variant="h1" color="primary">
                            Product
                        </Typography>
                    </Stack>
                    <Typography pb={2} variant="h5" color="secondary">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem <br /> Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s
                    </Typography>
                    <TabContext value={value}>
                        <TabList onChange={handleChange} centered>
                            <Tab label="All Products" value="1" />
                            <Tab label="New Products" value="2" />
                            <Tab label="Featured Products" value="3" />
                        </TabList>
                        <TabPanel value="1">
                            <Grid container justifyContent="start" rowGap={2}>
                                {ProductCards.map((item) => (
                                    <Grid key={item} xs={12} sm={4} lg={3}>
                                        <CardContainer
                                            margin="0px 10px"
                                            padding="20px"
                                            src={wheel3}
                                            alignItems="center"
                                            rating
                                            borderRadius="20px"
                                            text="Add To Cart"
                                            color="secondary"
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </TabPanel>
                    </TabContext>
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

                <Grid xs={1} />
            </Grid>
        </Box>
    )
}

export default ProductSection
