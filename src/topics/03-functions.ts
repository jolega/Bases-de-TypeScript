

function addNumbers (a : number, b : number) {
return a+b;
}


const addNumbersArrow = (a : number, b : number) : string => {
    return `${a+b}`;
    }


function multiply( firstNumber: number, secondNumber?: number,  base: number = 2 ) {
    return firstNumber * base
}

const result: number = addNumbers(1,2)
const result2: string = addNumbersArrow(1,2)
const mutiplyResult: number = multiply(5)

console.log({result, result2, mutiplyResult})


interface Character {
    name: string;
    hp: number;
    showHP: () => void;
}


const healCharacter = (character: Character, amount: number ) => {

    character.hp += amount;

}

const strider : Character = {
    name:'Strinder',
    hp: 50,
    showHP() {
        console.log(`Point the life ${this.hp}`)
    },
}

healCharacter( strider, 10)
strider.showHP();


export {}