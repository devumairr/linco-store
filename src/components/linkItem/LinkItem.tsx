import React from 'react'
import { Link } from '@mui/material'
import { theme } from '../../theme'

interface IProps {
    item: string
    href: string
}

export default function LinkITem({ item, href }: IProps): ReactNode {
    return (
        <Link color={theme.palette.info.main} underline="none" href={href}>
            {item}
        </Link>
    )
}
