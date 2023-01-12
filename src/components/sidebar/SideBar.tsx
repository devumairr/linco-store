import { Add, Remove } from '@mui/icons-material'
import { Box, Collapse, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

interface Item {
    title?: string
    Link?: string[]
}

interface IProps {
    item?: Item
}

const SideBar = ({ item }: IProps): ReactNode => {
    const [open, setOpen] = React.useState<boolean>(false)
    return (
        <Box borderBottom={open && 3} borderColor="#3C3C3D">
            <Stack
                px={2}
                py={1}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h4">{item.title}</Typography>
                <IconButton onClick={() => setOpen(!open)}>
                    {open ? (
                        <Remove color="secondary" />
                    ) : (
                        <Add color="secondary" />
                    )}
                </IconButton>
            </Stack>
            <Collapse in={open}>
                <Stack gap={2} p={2}>
                    {item.Link.map((link) => (
                        <Typography variant="h6">{link}</Typography>
                    ))}
                </Stack>
            </Collapse>
        </Box>
    )
}

export default SideBar
