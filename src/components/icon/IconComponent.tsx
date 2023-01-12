import React from 'react'

import { Box, styled, Stack } from '@mui/material'

const IconBox = styled(Box)`
    width: fit-content;
    background-color: #fff;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 10px;
`
interface IProps {
    Icon: ReactNode
    color?: string
}

export default function IconComponent({ Icon, color }: IProps): ReactNode {
    return (
        <>
            <IconBox>
                <Icon color={color} />
            </IconBox>
        </>
    )
}
