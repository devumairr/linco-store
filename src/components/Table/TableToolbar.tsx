import {
    Box,
    Card,
    CardContent,
    InputAdornment,
    SvgIcon,
    Typography,
    OutlinedInput,
    styled,
} from '@mui/material'

const SearchField = styled(OutlinedInput)(({ theme }) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': { width: 320, boxShadow: theme.shadows[18] },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${theme.palette.grey} !important`,
    },
}))

interface ITableToolbar {
    title: string
    children?: ReactNode[] | ReactNode
    searchText?: string
    onSearchTextChanged?: React.ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement
    >
    placeHolder?: string
}

export const TableToolbar = ({
    title,
    children,
    searchText = '',
    onSearchTextChanged,
    placeHolder = 'Search...',
    ...rest
}: ITableToolbar): ReactNode => {
    return (
        <Box {...rest}>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    m: -1,
                }}
            >
                <Typography sx={{ m: 1 }} variant="h4">
                    {title}
                </Typography>
                <Box sx={{ m: 1 }}>
                    {/* <Button
                        startIcon={<UploadIcon fontSize="small" />}
                        sx={{ mr: 1 }}
                    >
                        Import
                    </Button>
                    <Button
                        startIcon={<DownloadIcon fontSize="small" />}
                        sx={{ mr: 1 }}
                    >
                        Export
                    </Button> */}
                    {children}
                </Box>
            </Box>
            <Box sx={{ mt: 3 }}>
                <Card>
                    <CardContent>
                        <Box sx={{ maxWidth: 500 }}>
                            <SearchField
                                value={searchText}
                                onChange={onSearchTextChanged}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SvgIcon
                                            color="action"
                                            fontSize="small"
                                        />
                                    </InputAdornment>
                                }
                                placeholder={placeHolder}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}
