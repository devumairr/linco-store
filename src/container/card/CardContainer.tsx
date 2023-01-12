import React from 'react'
import { East } from '@mui/icons-material'
import { Rating, Stack, Typography } from '@mui/material'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import Image from '../../components/image/Image'

type Color =
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'

interface IProps {
    minPadding?: string
    padding?: string
    alignItems?: string
    color?: Color
    src?: string
    margin?: string
    width?: string
    borderRadius?: string
    bgColor?: string
    icon?: ReactNode
    text?: string
    rating: boolean
    date?: boolean
}
const CardContainer = ({
    alignItems,
    padding,
    color,
    src,
    margin,
    width,
    borderRadius,
    bgColor,
    icon,
    text,
    rating,
    date,
    minPadding,
}: IProps): ReactNode => {
    return (
        <Card
            padding={minPadding}
            borderRadius={borderRadius}
            width={width}
            minWidth="auto"
            margin={margin}
        >
            <Stack
                direction="column"
                alignItems={alignItems}
                gap="5px"
                bgcolor={bgColor}
            >
                <Image src={src} />
                <Stack padding={padding} gap="5px" alignItems={alignItems}>
                    {date && (
                        <Stack alignItems="center" gap={2} direction="row">
                            {icon}
                            <Typography variant="h5" fontWeight="600">
                                24th Oct 2022
                            </Typography>
                        </Stack>
                    )}
                    <Typography variant="h5" fontWeight="800">
                        Trio Pines 6660
                    </Typography>
                    {rating && (
                        <Rating
                            name="half-rating-read"
                            defaultValue={2.5}
                            precision={0.5}
                            size="small"
                            readOnly
                        />
                    )}
                    <Typography
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '6',
                            WebkitBoxOrient: 'vertical',
                        }}
                        variant="subtitle2"
                    >
                        LINCO nylon wheels are the ultimate solution for a
                        durable, light weight, and corrosive free alternative to
                        other wheel options available.
                    </Typography>
                    <Button
                        variant="text"
                        sx={{ padding: '0px' }}
                        color={color}
                        endIcon={<East fontSize="large" />}
                    >
                        <Typography variant="h6" fontWeight="600">
                            {text}
                        </Typography>
                    </Button>
                </Stack>
            </Stack>
        </Card>
    )
}

export default CardContainer
