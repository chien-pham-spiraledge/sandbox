export function format(data: unknown) {
    return JSON.stringify(data, null, 2);
}