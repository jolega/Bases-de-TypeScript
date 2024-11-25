

export class Person {
    private name: string;
    private address: string;

    constructor( name: string , address: string) {

        this.name = name;
        this.address = address

    }

}

const ironman = new Person ("Johan", "New York");

console.log(ironman)
