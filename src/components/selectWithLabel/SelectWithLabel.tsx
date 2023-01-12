import React from 'react'
import { Typography } from '@mui/material'
import Select from '../select/Select'
import { theme } from '../../theme'

interface IProps {
    label?: string
}
export default function SelectWithLabel({ label }: IProps): ReactNode {
    return (
        <>
            {label && (
                <Typography
                    pl={1}
                    variant="h6"
                    color={theme.palette.neutral[100]}
                >
                    {label}
                </Typography>
            )}
            <Select />
        </>
    )
}
