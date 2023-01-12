import React from 'react'
import { Button as Buttons, ButtonProps } from '@mui/material'

const Button = (props: ButtonProps): ReactNode => {
    const { children } = props
    return <Buttons {...props}>{children}</Buttons>
}

export default Button
