import React from 'react'
import { Grid, Typography, Stack, Box } from '@mui/material'
import CalendarIcon from '@mui/icons-material/CalendarTodayOutlined'
import CardContainer from '../../container/card/CardContainer'
import Pagination from '../../components/pagination/Pagination'
import BlogImg from '../../assets/images/Blog.svg'
import Header from '../../components/header/Header'

const BlogCards = [1, 2, 3, 4, 5, 6]
export default function Blog(): ReactNode {
    return (
        <>
            <Header heading="Blogs" />
            <Grid container>
                <Grid xl={1} />
                <Grid xl={10}>
                    <Stack
                        pb={3}
                        gap={1}
                        direction="row"
                        justifyContent="center"
                    >
                        <Typography variant="h2">Recent</Typography>
                        <Typography variant="h2" color="primary">
                            Blogs
                        </Typography>
                    </Stack>
                    <Grid container rowGap={3}>
                        {BlogCards.map((item) => (
                            <Grid key={item} sm={6} lg={4}>
                                <CardContainer
                                    alignItems="flex-start"
                                    padding="20px"
                                    margin="0px 10px"
                                    bgColor="#FFFFFF"
                                    src={BlogImg}
                                    icon={<CalendarIcon />}
                                    text="Get More Info"
                                    rating={false}
                                    date
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Pagination />
                </Grid>
                <Grid xl={1} />
            </Grid>
        </>
    )
}
