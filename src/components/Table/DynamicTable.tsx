import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
    Box,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Stack,
    IconButton,
    Tooltip,
} from '@mui/material'
import { Edit, Delete, Download, Email } from '@mui/icons-material'

declare global {
    interface IColumn {
        name: string
        key: string
        download?: boolean
        downloadCallback?: (item: any) => void
        emailCallback?: (item: any) => void
        component?: (any) => ReactNode
        hideEdit?: boolean
        hideDelete?: boolean
        showEmail?: boolean
    }
}

export function getValue<T>(item: T, keys: string[]): string {
    if (keys.length === 1) {
        return item[keys[0]] as string
    }
    let value: any = item

    keys.forEach((key) => {
        value = value[key]
    })

    return value
}
export interface IDynamicTable<T> {
    data: T[]
    onRowClick?: (item: T) => void
    onRowDelete?: (item: T) => void
    columns: IColumn[]
    isLoading: boolean
}

export const DynamicTable = <T extends IBase>({
    data,
    onRowClick,
    onRowDelete,
    columns,
    isLoading,
    ...rest
}: IDynamicTable<T>): ReactNode => {
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(0)

    const extendedColumns = columns.map((column) => {
        return { ...column, key: column.key.split('.') }
    })

    const handleLimitChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setLimit(parseInt(event.target.value, 10))
    }

    const handlePageChange = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ): void => {
        setPage(newPage)
    }

    const generateCell = (
        column: {
            key: string[]
            name: string
            download?: boolean
            downloadCallback?: (item: any) => void
            emailCallback?: (item: any) => void
            component?: (string: any) => ReactNode
            hideEdit?: boolean
            hideDelete?: boolean
            showEmail?: boolean
        },
        item: T
    ): ReactNode | string => {
        const cell = column.component
            ? column.component(item)
            : getValue(item, column.key)

        return column.key[0] === 'action' ? (
            <Stack
                direction="row"
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
                spacing={2}
            >
                {column.download && (
                    <Tooltip title="Download PDF">
                        <IconButton
                            onClick={(e) => {
                                e.stopPropagation()
                                column.downloadCallback?.(item)
                            }}
                        >
                            <Download />
                        </IconButton>
                    </Tooltip>
                )}
                {column.showEmail && (
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation()
                            column.emailCallback?.(item)
                        }}
                    >
                        <Email />
                    </IconButton>
                )}
                {!column.hideEdit && (
                    <IconButton onClick={() => onRowClick?.(item)}>
                        <Edit />
                    </IconButton>
                )}
                {!column.hideDelete && (
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation()
                            onRowDelete?.(item)
                        }}
                    >
                        <Delete />
                    </IconButton>
                )}
            </Stack>
        ) : (
            cell
        )
    }

    return (
        <TableContainer component={Paper} {...rest}>
            <PerfectScrollbar>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {extendedColumns.map((column, index) => (
                                    <TableCell
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={`${index}`}
                                        align={
                                            column.key[0] === 'action'
                                                ? 'center'
                                                : 'left'
                                        }
                                    >
                                        {column.name}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        {!isLoading && (
                            <TableBody>
                                {data
                                    .slice(page * limit, page * limit + limit)
                                    .map((item) => (
                                        <TableRow
                                            hover
                                            key={item.id as string}
                                            onClick={() => {
                                                onRowClick?.(item)
                                            }}
                                        >
                                            {extendedColumns.map((column) => (
                                                <TableCell
                                                    key={column.key.join('.')}
                                                >
                                                    {generateCell(column, item)}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                            </TableBody>
                        )}
                    </Table>
                    {isLoading && (
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>
                    )}
                </Box>
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={data.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </TableContainer>
    )
}
