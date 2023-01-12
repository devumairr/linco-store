const descendingComparator = (
    a: Record<string, string | number>,
    b: Record<string, string | number>,
    orderBy: string
): number => {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

export declare type getComparatorReturnType = (
    a: Record<string, string | number>,
    b: Record<string, string | number>
) => number

const getComparator = (
    order: 'asc' | 'desc',
    orderBy: string
): getComparatorReturnType =>
    order === 'desc'
        ? (
              a: Record<string, string | number>,
              b: Record<string, string | number>
          ) => descendingComparator(a, b, orderBy)
        : (
              a: Record<string, string | number>,
              b: Record<string, string | number>
          ) => -descendingComparator(a, b, orderBy)

export const applySortFilter = <T extends Record<string, unknown>>(
    array: T[],
    order: 'asc' | 'desc',
    orderBy: string,
    query: string,
    key: string
): T[] => {
    const stabilizedThis = array.map((el, index) => [el, index])
    const comparator = getComparator(order, orderBy)
    stabilizedThis.sort((a, b) => {
        const sortOrder = comparator(
            a[0] as Record<string, string | number>,
            b[0] as Record<string, string | number>
        )
        if (sortOrder !== 0) return sortOrder
        return (a[1] as number) - (b[1] as number)
    })
    // if (query) {
    //     return _.filter(
    //         array,
    //         (item) =>
    //             (item[key] as string)
    //                 .toLowerCase()
    //                 .indexOf(query.toLowerCase()) !== -1
    //     )
    // }
    return array
}
