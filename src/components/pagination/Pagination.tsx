import React from 'react'
import { Typography, Stack, Pagination as MuiPagination } from '@mui/material'

export default function Pagination(): ReactNode {
    return (
        <Stack
            py={2}
            direction="row"
            gap={1}
            justifyContent="center"
            alignItems="center"
        >
            <Typography variant="h6">Page</Typography>
            <MuiPagination hideNextButton hidePrevButton count={6} />
        </Stack>
    )
}
