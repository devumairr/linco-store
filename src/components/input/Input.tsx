import { OutlinedInput, OutlinedInputProps } from '@mui/material'
import React from 'react'

const Input = (props: OutlinedInputProps): ReactNode => {
    return <OutlinedInput {...props} fullWidth />
}

export default Input
