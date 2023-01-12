export const NumberFormatter = (
    value: number | string | undefined,
    decimal = 2
): string => {
    if (!value) return `0.${'0'.repeat(decimal)}`
    let num: string[]
    if (typeof value === 'number') {
        num = value.toFixed(decimal).toString().split('.')
        return `${num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${
            num[1] ? `.${num[1]}` : ''
        }`
    }
    num = value.split('.')
    let returnValue = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    if (num[1]) {
        returnValue += num[1].substring(0, decimal + 1) || '0'.repeat(decimal)
    }
    return returnValue
}
