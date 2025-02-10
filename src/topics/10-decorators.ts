
function classDecoractor(
    constructor: any
) {

    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
}
}



//@classDecoractor
export class SuperClass {

    public myProperty: string = 'Abc123'

    print(){
        console.log('hello World')

    }

}

console.log(SuperClass)

const myClass = new SuperClass();
console.log(myClass)
