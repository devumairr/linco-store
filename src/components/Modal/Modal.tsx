import { Close } from '@mui/icons-material'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Breakpoint,
    IconButton,
} from '@mui/material'

export interface IModal {
    open: boolean
    dialogTitle: string
    maxWidth?: Breakpoint
    closeIcon?: boolean
    onClose: () => void
    children?: ReactNode[] | ReactNode
}

export const Modal = ({
    open,
    dialogTitle,
    maxWidth,
    closeIcon,
    onClose,
    children,
}: IModal): ReactNode => {
    return (
        <Dialog
            fullWidth
            maxWidth={maxWidth}
            open={open}
            onClose={() => onClose()}
        >
            <DialogTitle>
                {dialogTitle}
                {closeIcon ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <Close />
                    </IconButton>
                ) : null}
            </DialogTitle>

            <DialogContent>{children}</DialogContent>
        </Dialog>
    )
}
