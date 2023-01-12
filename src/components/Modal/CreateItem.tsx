import { useState } from 'react'
import { Button, Typography, Theme } from '@mui/material'
import { Modal } from './Modal'

export interface ICreateItem {
    buttonText: string
    dialogTitle: string
    children?: ReactNode[] | ReactNode
    open: boolean
    onDialogVisibilityChange?: (isVisible: boolean) => void
}

export const CreateItem = ({
    buttonText,
    children,
    dialogTitle,
    open,
    onDialogVisibilityChange,
}: ICreateItem): ReactNode => {
    // const messageContext = useContext(MessageContext)

    // const [role, setRole] = useState(AdminRolesList[0].key)

    const openDialog = (): void => {
        onDialogVisibilityChange?.(true)
    }

    const handleClose = (): void => {
        onDialogVisibilityChange?.(false)
    }

    return (
        <>
            <Button
                onClick={() => openDialog()}
                color="primary"
                variant="contained"
            >
                <Typography
                    color="inherit"
                    variant="button"
                    sx={{ paddingLeft: (theme: Theme) => theme.spacing(1) }}
                >
                    {buttonText}
                </Typography>
            </Button>

            <Modal dialogTitle={dialogTitle} open={open} onClose={handleClose}>
                {children}
            </Modal>
        </>
    )
}
