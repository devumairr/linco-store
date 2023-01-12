import React from 'react'
import LogoIcon from '../../assets/images/logo.png'
import Image from '../image/Image'

interface IProps {
    xLarge?: boolean
    large?: boolean
    medium?: boolean
    small?: boolean
    xSmall?: boolean
    display?: string
}
export default function Logo({
    display,
    large,
    medium,
    small,
    xLarge,
    xSmall,
}: IProps): ReactNode {
    return (
        <>
            {xLarge && (
                <Image display={display} maxWidth="204px" src={LogoIcon} />
            )}
            {large && (
                <Image display={display} maxWidth="175px" src={LogoIcon} />
            )}
            {medium && (
                <Image display={display} maxWidth="150px" src={LogoIcon} />
            )}
            {small && (
                <Image display={display} maxWidth="90px" src={LogoIcon} />
            )}
            {xSmall && (
                <Image display={display} maxWidth="70px" src={LogoIcon} />
            )}
        </>
    )
}
