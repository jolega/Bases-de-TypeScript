

export interface Product {
    descrption : string;
    price: number;
}

const phone: Product = {
    descrption : 'Nokia A1',
    price: 150.0,
}

const tablet: Product = {
    descrption : 'ipad Air',
    price: 250.0,
}


interface taxCalculationOption {
    tax: number;
    products: Product []
}
export function taxCalculation (options: taxCalculationOption ):  [number, number] {

    let total= 0
    const { tax, products } = options


    products.forEach( ({ price }) => {

        total += price
        
    })

    return [total, total * tax]

}

const shoopingCart = [phone, tablet];
export const  tax = 0.15

const [ total , totalWithTax ] = taxCalculation ({
    products: shoopingCart,
    tax: tax,
}
)

console.log('total', total)
console.log('total', totalWithTax)


export {}