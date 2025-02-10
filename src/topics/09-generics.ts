




export function whatMytype <T> ( argument: T ): T {
    return argument;
}


let amIString = whatMytype<string>('Hola Mundo');
let amINumber = whatMytype<number>(100);
let amIArray = whatMytype<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join(' - '));