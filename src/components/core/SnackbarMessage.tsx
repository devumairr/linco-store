import { useContext } from 'react'
import {
    Snackbar,
    Slide,
    Alert,
    AlertTitle,
    SnackbarOrigin,
} from '@mui/material'
import { IMessageContext, MessageContext } from '../../context/MessageContext'

export const SnackbarMessage = (): ReactNode => {
    const position: SnackbarOrigin = {
        vertical: 'bottom',
        horizontal: 'right',
    }

    const { snackbarState, hideSnackbar } = useContext(
        MessageContext
    ) as IMessageContext
    const autoHideDuration = snackbarState.duration
    const variant = snackbarState.isError ? 'error' : 'success'
    function onClose(): void {
        hideSnackbar()
    }
    return (
        <Snackbar
            anchorOrigin={position}
            onClose={() => onClose()}
            open={snackbarState.isSnackbarVisible}
            ClickAwayListenerProps={{
                mouseEvent: false,
            }}
            // action={action}
            TransitionComponent={Slide}
            autoHideDuration={autoHideDuration}
        >
            <Alert
                severity={variant}
                sx={{
                    minWidth: 300,
                    padding: `10px 20px`,
                    boxShadow: '0px 0px 10px 4px rgba(0,0,0,0.25)',
                }}
            >
                <AlertTitle>
                    {snackbarState.isError ? 'Error' : 'Success'}
                </AlertTitle>
                {snackbarState.snackBarMessage}
            </Alert>
        </Snackbar>
    )
}
