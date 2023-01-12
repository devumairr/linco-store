import React from 'react'
import { Card as CustomCard } from '@mui/material'

interface IProps {
    padding?: string
    minWidth?: string
    borderRadius?: string
    margin?: string
    width?: string
    height?: string
    backgroundColor?: string
    children: ReactNode | ReactNode[]
}

const Card = ({
    children,
    padding,
    borderRadius,
    minWidth,
    margin,
    width,
    height,
    backgroundColor,
}: IProps): ReactNode => {
    return (
        <CustomCard
            sx={{
                margin,
                padding,
                borderRadius,
                backgroundColor,
                minWidth,
                width,
                height,
            }}
        >
            {children}
        </CustomCard>
    )
}

export default Card
