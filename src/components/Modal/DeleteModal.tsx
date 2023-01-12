import { LoadingButton } from '@mui/lab'
import { Typography, Button, Grid } from '@mui/material'
import { Modal } from './Modal'

export interface IDeleteModal {
    open: boolean
    deleting: boolean
    dialogTitle: string
    onClose: () => void
    onDeleteConfirm: () => void
    children?: ReactNode[] | ReactNode
}

export const DeleteModal = ({
    open,
    deleting,
    dialogTitle,
    onClose,
    onDeleteConfirm,
    children,
}: IDeleteModal): ReactNode => {
    return (
        <Modal
            open={open}
            onClose={() => !deleting && onClose()}
            dialogTitle={dialogTitle}
            closeIcon={!deleting}
            maxWidth="xs"
        >
            <Typography variant="body1">{children}</Typography>
            <Grid
                container
                spacing={2}
                justifyContent="flex-end"
                alignItems="center"
                sx={{ pt: 4 }}
            >
                <Grid item xs={6} sm={5} md={3}>
                    <Button
                        variant="outlined"
                        onClick={onClose}
                        disabled={deleting}
                    >
                        Cancel
                    </Button>
                </Grid>
                <Grid item xs={6} sm={5} md={4}>
                    <LoadingButton
                        loadingPosition="end"
                        loading={deleting}
                        disabled={deleting}
                        variant="contained"
                        color="error"
                        onClick={onDeleteConfirm}
                        fullWidth
                    >
                        {deleting ? 'Deleting' : 'Confirm'}
                    </LoadingButton>
                </Grid>
            </Grid>
        </Modal>
    )
}
