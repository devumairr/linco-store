import React from 'react'
import { Typography, Stack, Checkbox, Grid } from '@mui/material'
import { theme } from '../../theme'
import Input from '../input/Input'

interface IProps {
    label?: string
}
export default function InputWithLabel({ label }: IProps): ReactNode {
    return (
        <>
            {label && (
                <Typography
                    pl={1}
                    textAlign={{ xs: 'center', lg: 'start' }}
                    variant="h6"
                    color={theme.palette.neutral[100]}
                >
                    {label}
                </Typography>
            )}
            <Input color="secondary" size="small" />
        </>
    )
}
