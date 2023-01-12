import React from 'react'
import { Stack, InputBase } from '@mui/material'
import CustomButton from '../button/Button'

interface IProps {
    text: string
    placeholder: string
}
export default function ButtonInput({ text, placeholder }: IProps): ReactNode {
    return (
        <Stack
            p={2}
            direction="row"
            justifyContent="space-between"
            bgcolor="white"
        >
            <InputBase fullWidth placeholder={placeholder} />
            <CustomButton variant="contained" color="primary">
                {text}
            </CustomButton>
        </Stack>
    )
}
