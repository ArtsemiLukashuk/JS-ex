export function compareNumber(sorting, header) {
    return function (a, b) {
        if (sorting === 'asc') {
            return a[header] - b[header];
        }

        return b[header] - a[header];
    };
}
