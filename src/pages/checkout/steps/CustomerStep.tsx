import React from 'react'
import { Typography, Stack, Checkbox, Grid } from '@mui/material'
import ButtonInput from '../../../components/buttonInput/ButtonInput'

export default function CustomerStep(): ReactNode {
    return (
        <>
            <Stack ml={{ xs: 3, sm: 0 }}>
                <ButtonInput placeholder="info@example.com" text="Continue" />
            </Stack>
            <Stack
                pt={1}
                direction={{ xs: 'column', xl: 'row' }}
                justifyContent="space-between"
                alignContent={{ xs: 'center', xl: 'flex-start' }}
                textAlign={{ xs: 'center', xl: 'start' }}
            >
                <Stack
                    gap={1}
                    direction="row"
                    alignItems="center"
                    justifyContent={{ xs: 'center', xl: 'start' }}
                >
                    <Checkbox defaultChecked />
                    <Typography sx={{ color: '#9C9C9C' }} variant="h6">
                        Subscribe to our newsletter
                    </Typography>
                </Stack>
                <Stack gap={1} direction={{ xs: 'column', xl: 'row' }}>
                    <Typography sx={{ color: '#9C9C9C' }} variant="h6">
                        Already have an account?
                    </Typography>
                    <Typography variant="h6" color="primary" fontWeight="bold">
                        Sign in now
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}
