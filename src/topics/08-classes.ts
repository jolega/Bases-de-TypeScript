

export class Person {

    constructor( 
        public name: string ,
        private address: string = 'No Address'
    ) {}

}


export class Hero extends Person {

    constructor(
        public alterego: string,
        public age: number,
        public realName: string

    ){
        super(realName, 'New York')
    }

}

const ironman1 = new Person ("Johan", "New York");
const ironman2 = new Hero ("Johan", 45,'Tony');

console.log(ironman1)
console.log(ironman2)
