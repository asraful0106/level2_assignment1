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



function concatenateArrays<T>(...arrays: T[][]): T[] {
    let newArr: T[] = [];
    arrays.map((arr: T[]) => {
        newArr = [...newArr, ...arr];
    });
    return newArr;
}



class Vehicle {
    private _make: string;
    private _year: number;

    constructor(make: string, year: number) {
        this._make = make;
        this._year = year;
    }

    getInfo() {
        console.log(`Make: ${this._make} Year: ${this._year}`);
    }
}

class Car extends Vehicle {
    private _model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this._model = model;
    }
    getModel() {
        console.log(`Model: ${this._model}`);
    }
}



function processValue(value: string | number): number {
    if (typeof value == 'string') {
        return value.length;
    } else {
        return value * 2;
    }
}



interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length == 0) {
        return null;
    }
    products?.sort((a: Product, b: Product) => {
        return b.price - a.price;
    });
    return products[0] || null;
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day == Day.Sunday || day == Day.Saturday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}



async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n >= 0) {
            setTimeout(() =>{resolve(n * n)}, 1000);
        } else {
            reject("Negative number not allowed")
        }
    });
}
squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed