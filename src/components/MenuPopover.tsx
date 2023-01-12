// material
import { Popover, SxProps, Theme } from '@mui/material'

import { alpha, styled } from '@mui/material/styles'

// ----------------------------------------------------------------------

const ArrowStyle = styled('span')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        top: -7,
        zIndex: 1,
        width: 12,
        right: 20,
        height: 12,
        content: "''",
        position: 'absolute',
        borderRadius: '0 0 4px 0',
        transform: 'rotate(-135deg)',
        background: theme.palette.background.paper,
        borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
        borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    },
}))

// ----------------------------------------------------------------------

interface IMenuPopover {
    open: boolean
    onClose: () => void
    children: ReactNode[] | ReactNode
    sx: SxProps<Theme>
    anchorEl: Element
}

export default function MenuPopover({
    open,
    onClose,
    children,
    sx,
    anchorEl,
    ...rest
}: IMenuPopover): ReactNode {
    return (
        <Popover
            open={open}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            anchorEl={anchorEl}
            PaperProps={{
                sx: {
                    mt: 1.5,
                    ml: 0.5,
                    overflow: 'inherit',
                    boxShadow: (theme) => theme.shadows[1],
                    border: (theme) => `solid 1px ${theme.palette.grey}`,
                    width: 200,
                    ...sx,
                },
            }}
            {...rest}
        >
            <ArrowStyle className="arrow" />

            {children}
        </Popover>
    )
}
