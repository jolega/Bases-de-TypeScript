

export class Person {

    constructor( 
        public name: string ,
        public lastName: string,
        private address: string = 'No Address'
    ) {}

}


// export class Hero extends Person {

//     constructor(
//         public alterego: string,
//         public age: number,
//         public realName: string

//     ){
//         super(realName, 'New York')
//     }

// }

// export class Hero {

//     public person: Person;

//     constructor(
//         public alterego: string,
//         public age: number,
//         public realName: string

//     ){
//            this.person = new Person(realName) 
//     }

// }

export class Hero {

       
    
        constructor(
            public alterego: string,
            public age: number,
            public realName: string,
            public person: Person,
    
        ){
        }
    
     }

const tony = new Person ('Tony', 'Stark', 'New York')

//const ironman1 = new Person ("Johan", "New York",tony);
const ironman2 = new Hero ("Johan", 45,'Tony', tony);

//console.log(ironman1)
console.log(ironman2)


