function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == undefined || toUpper) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}


