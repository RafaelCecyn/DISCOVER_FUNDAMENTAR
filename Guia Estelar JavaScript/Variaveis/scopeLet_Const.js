/*
    Var e const são variáveis locais e não funcionam fora do bloco
*/


// console.log('Existe o valor de x', x) // ERROR

// {
//     let x = 0;
// }

// console.log('Existe o valor de x', x) // ERROR

let y = 1;

{
    y = 0;
    console.log('Existe o valor de y', y) // 0

}

console.log('Existe o valor de y', y) // 0