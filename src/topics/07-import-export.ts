import { Product, taxCalculation, tax } from "./06-function-destructuring";


const shoopingCart: Product[] = [
    {
        descrption:'Nokia',
        price:100
    },
    {
        descrption:'ipad',
        price:150
    }
] ;

const [ total , totalWithTax ] = taxCalculation ({
    products: shoopingCart,
    tax: tax,
})

console.log('total', total)
console.log('total', totalWithTax)