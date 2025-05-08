function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == undefined || toUpper) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}



function concatenateArrays<T>(...arrays: T[][]): T[]{
    let newArr: T[] = [];
    arrays.map(arr => {
        newArr = [...newArr, ...arr];
    });
    return newArr;
}



