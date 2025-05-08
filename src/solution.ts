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



class Vehicle{
    private _make: string;
    private _year: number;

    constructor(make:string, year:number){
        this._make = make;
        this._year = year;
    }

    getInfo(){
        console.log(`Make: ${this._make} Year: ${this._year}`);
    }
}

class Car extends Vehicle{
    private _model: string;
    constructor(make:string, year:number, model:string){
        super(make, year);
        this._model = model;
    }
    getModel(){
        console.log(`Model: ${this._model}`);
    }
}



function processValue(value: string | number): number{
    if(typeof value == 'string'){
        return value.length;
    }else{
        return value*2;
    }
}



