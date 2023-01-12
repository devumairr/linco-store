import { GridView, List } from '@mui/icons-material'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import category from '../../assets/images/category.svg'
import Button from '../../components/button/Button'
import Pagination from '../../components/pagination/Pagination'
import SideBar from '../../components/sidebar/SideBar'
import CardContainer from '../../container/card/CardContainer'
import { theme } from '../../theme'

const sidebarData = [
    {
        title: 'Categories',
        Link: [
            'Categories',
            'Categories',
            'Categories',
            'Categories',
            'Categories',
            'Categories',
        ],
    },
    {
        title: 'Price',
        Link: [
            'Categories',
            'Categories',
            'Categories',
            'Categories',
            'Categories',
            'Categories',
        ],
    },
    {
        title: 'Brand',
        Link: [
            'Categories',
            'Categories',
            'Categories',
            'Categories',
            'Categories',
            'Categories',
        ],
    },
    {
        title: 'Wheel Diameter',
        Link: [
            'Categories',
            'Categories',
            'Categories',
            'Categories',
            'Categories',
            'Categories',
        ],
    },
    {
        title: 'Wheel Width',
        Link: [
            'Categories',
            'Categories',
            'Categories',
            'Categories',
            'Categories',
            'Categories',
        ],
    },
]
const CategoryCards = [1, 2, 3, 4, 5]

const Categories = (): ReactNode => {
    return (
        <>
            <Grid container py={1}>
                <Grid xs={1} />
                <Grid direction="row" xs={10} textAlign="end">
                    <Button
                        disabled
                        variant="text"
                        color="secondary"
                        startIcon={<List />}
                    >
                        <Typography variant="h6">List</Typography>
                    </Button>
                    <Button
                        variant="text"
                        color="secondary"
                        startIcon={<GridView />}
                    >
                        <Typography variant="h6">Grid</Typography>
                    </Button>
                </Grid>
                <Grid xs={1} />
            </Grid>
            <Grid container bgcolor="#fcfbfb ">
                <Grid xs={1} />
                <Grid item xs={10} sm={3}>
                    <Box py={2} bgcolor="#f3f3f4">
                        {sidebarData.map((item) => (
                            <SideBar item={item} />
                        ))}
                    </Box>
                </Grid>
                <Grid xs={1} display={{ xs: 'block', sm: 'none' }} />
                <Grid xs={1} display={{ xs: 'block', sm: 'none' }} />
                <Grid xs={10} sm={7} container rowGap={2} px={{ sm: 2, xs: 0 }}>
                    <Typography variant="h2">Casters</Typography>
                    <Typography component="p" variant="h6">
                        LINCO provides industrial casters in a range of sizes,
                        options, and safety features. Our casters are available
                        from a variety of brand names to assure you that we can
                        provide the matching replacement caster wheels with the
                        proper size and fit for any of your repair needs. With
                        approximately eight hundred caster wheels coming from 6
                        different brands, you will easily find the part you are
                        looking for. Our industrial casters come in the most
                        common and uncommon sizes including sizes 3”, 3-1/2”,
                        4”, and 5”. Locking and non-locking casters are also
                        available for convenience and safety purposes to insure
                        your equipment stays in the specified space. We offer
                        two versions of locking wheel; either top locking or
                        total lock to accommodate your specific preference or
                        need.
                    </Typography>
                    <Grid
                        pt={1}
                        container
                        direction="row"
                        justifyContent="start"
                        rowGap={3}
                        spacing={1}
                    >
                        {CategoryCards.map((items) => (
                            <Grid item xs={12} md={6} xl={4}>
                                <CardContainer
                                    rating
                                    minPadding="10px 0px"
                                    color="secondary"
                                    margin="0px 15px"
                                    padding="20px"
                                    src={category}
                                    alignItems="center"
                                    text="Add to Cart"
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid xs={12}>
                        <Stack
                            py={{ xs: 1, sm: 0 }}
                            direction={{ xs: 'column-reverse', sm: 'row' }}
                            flexWrap="wrap"
                            justifyContent={{
                                xs: 'center',
                                sm: 'space-between',
                            }}
                            alignItems="center"
                        >
                            <Pagination />
                            <Button variant="contained">Next Page</Button>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid xs={1} />
            </Grid>
            <Grid py={5} container bgcolor="#242F3C">
                <Grid xs={1} />
                <Grid xs={10} textAlign="center">
                    <Typography variant="h6" color={theme.palette.success.main}>
                        LINCO
                        <br />
                        provides industrial casters in a range of sizes,
                        options, and safety features. Our casters are available
                        from a variety of brand names to assure you that we can
                        provide the matching replacement caster wheels with the
                        proper size and fit for any of your repair needs. With
                        approximately eight hundred caster wheels coming from 6
                        different brands, you will easily find the part you are
                        looking for. Our industrial casters come in the most
                        common and uncommon sizes including sizes 3”, 3-1/2”,
                        4”, and 5”. Locking and non-locking casters are also
                        available for convenience and safety purposes to insure
                        your equipment stays in the specified space. We offer
                        two versions of locking wheel; either top locking or
                        total lock to accommodate your specific preference or
                        need.
                    </Typography>
                </Grid>
                <Grid xs={1} />
            </Grid>
        </>
    )
}

export default Categories
