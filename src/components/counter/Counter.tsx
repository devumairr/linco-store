import { Add, Remove } from '@mui/icons-material'
import { ButtonGroup, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'
import Button from '../button/Button'

const Counter = (): ReactNode => {
    const [counter, setCounter] = React.useState(1)
    return (
        <Stack
            sx={{
                boxShadow: ' 0px 4px 10px rgba(0, 0, 0, 0.12)',
            }}
            alignItems="center"
            direction="row"
            bgcolor={theme.palette.background.light}
        >
            <ButtonGroup variant="contained" color="success">
                <Button
                    size="small"
                    disabled={counter < 0}
                    onClick={() => setCounter(counter + 1)}
                >
                    <Add fontSize="small" color="secondary" />
                </Button>
                <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    minWidth={{ xs: '40px', sm: '45px', lg: '65px' }}
                    px={{ sm: 2, lg: 3 }}
                    py={{ xs: 0, lg: 1 }}
                    bgcolor="#242F3C"
                    color="#fff"
                    variant="h3"
                    fontFamily="sans-serif"
                >
                    {counter}
                </Typography>
                <Button
                    size="small"
                    disabled={counter <= 1}
                    onClick={() => setCounter(counter - 1)}
                >
                    <Remove fontSize="small" color="secondary" />
                </Button>
            </ButtonGroup>
        </Stack>
    )
}

export default Counter
